import './App.css'
import PokeList from './components/PokeList'
import PokeBall3D from './components/PokeBall3D'
import { useState } from 'react'

function App() {
  const [search, setSearch] = useState('')

  return (
    <div className="app">
      <div className="type-bar" />
      <header>
        <h1>Pokédex</h1>
      </header>

      <div className="search-section">
        <div className="search-box">
          <input
            type="text"
            placeholder="Nombre o número"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <button>🔍</button>
        </div>
        <div className="search-hint">
          Busca un Pokémon por su nombre o usando su número de la Pokédex Nacional.
        </div>
      </div>

      <div className="main-content">
        <PokeBall3D />
        <PokeList search={search} />
      </div>
    </div>
  )
}

export default App