import { useState, useEffect } from 'react'
import axios from 'axios'
import PokeCard from './PokeCard'
import './PokeList.css'

const STARTERS = [
  { name: 'bulbasaur', gen: 'Gen I' },
  { name: 'charmander', gen: 'Gen I' },
  { name: 'squirtle', gen: 'Gen I' },
  { name: 'chikorita', gen: 'Gen II' },
  { name: 'cyndaquil', gen: 'Gen II' },
  { name: 'totodile', gen: 'Gen II' },
  { name: 'treecko', gen: 'Gen III' },
  { name: 'torchic', gen: 'Gen III' },
  { name: 'mudkip', gen: 'Gen III' },
  { name: 'turtwig', gen: 'Gen IV' },
  { name: 'chimchar', gen: 'Gen IV' },
  { name: 'piplup', gen: 'Gen IV' },
  { name: 'snivy', gen: 'Gen V' },
  { name: 'tepig', gen: 'Gen V' },
  { name: 'oshawott', gen: 'Gen V' },
  { name: 'chespin', gen: 'Gen VI' },
  { name: 'fennekin', gen: 'Gen VI' },
  { name: 'froakie', gen: 'Gen VI' },
  { name: 'rowlet', gen: 'Gen VII' },
  { name: 'litten', gen: 'Gen VII' },
  { name: 'popplio', gen: 'Gen VII' },
  { name: 'grookey', gen: 'Gen VIII' },
  { name: 'scorbunny', gen: 'Gen VIII' },
  { name: 'sobble', gen: 'Gen VIII' },
  { name: 'sprigatito', gen: 'Gen IX' },
  { name: 'fuecoco', gen: 'Gen IX' },
  { name: 'quaxly', gen: 'Gen IX' },
]

const GENERATIONS = ['Todos', 'Gen I', 'Gen II', 'Gen III', 'Gen IV', 'Gen V', 'Gen VI', 'Gen VII', 'Gen VIII', 'Gen IX']

export default function PokeList({ search = '' }) {
  const [pokemon, setPokemon] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [genFilter, setGenFilter] = useState('Todos')

  useEffect(() => {
    const requests = STARTERS.map(s =>
      axios.get(`https://pokeapi.co/api/v2/pokemon/${s.name}`)
        .then(res => ({ ...res.data, gen: s.gen }))
    )
    Promise.all(requests)
      .then(data => {
        setPokemon(data)
        setLoading(false)
      })
      .catch(() => {
        setError('Error al cargar los Pokémon 😢')
        setLoading(false)
      })
  }, [])

  const filtered = pokemon.filter(p => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase())
    const matchGen = genFilter === 'Todos' || p.gen === genFilter
    return matchSearch && matchGen
  })

  if (loading) return <p className="status">Cargando Pokémon... ⏳</p>
  if (error) return <p className="status">{error}</p>

  return (
    <div>
      <div className="gen-filters">
        {GENERATIONS.map(gen => (
          <button
            key={gen}
            className={`gen-btn ${genFilter === gen ? 'active' : ''}`}
            onClick={() => setGenFilter(gen)}
          >
            {gen}
          </button>
        ))}
      </div>
      <div className="grid">
        {filtered.map(p => <PokeCard key={p.id} pokemon={p} />)}
      </div>
    </div>
  )
}