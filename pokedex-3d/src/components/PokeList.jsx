import { useState, useEffect } from 'react'
import axios from 'axios'
import PokeCard from './PokeCard'
import './PokeList.css'

export default function PokeList() {
  const [pokemon, setPokemon] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=50')
      .then(res => {
        const requests = res.data.results.map(p => axios.get(p.url))
        return Promise.all(requests)
      })
      .then(responses => {
        setPokemon(responses.map(r => r.data))
        setLoading(false)
      })
      .catch(() => {
        setError('Error al cargar los Pokémon 😢')
        setLoading(false)
      })
  }, [])

  const filtered = pokemon.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  )

  if (loading) return <p className="status">Cargando Pokémon... ⏳</p>
  if (error) return <p className="status">{error}</p>

  return (
    <div>
      <input
        className="search"
        type="text"
        placeholder="Buscar Pokémon..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <div className="grid">
        {filtered.map(p => <PokeCard key={p.id} pokemon={p} />)}
      </div>
    </div>
  )
}