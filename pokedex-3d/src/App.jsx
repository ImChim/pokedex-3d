import './App.css'
import PokeList from './components/PokeList'
import PokeBall3D from './components/PokeBall3D'

function App() {
  return (
    <div className="app">
      <header>
        <h1>PokéDex 3D</h1>
        <p>Explora el mundo Pokémon</p>
      </header>
      <PokeBall3D />
      <PokeList />
    </div>
  )
}

export default App