import './PokeCard.css'

const TYPE_COLORS = {
  fire: '#FF9741', water: '#3692DC', grass: '#38BF4B',
  electric: '#FBD100', psychic: '#FF6675', ice: '#4CD1C0',
  dragon: '#006FC9', dark: '#5B5466', poison: '#B567CE',
  normal: '#919AA2', fighting: '#E0306A', flying: '#89AAE3',
  ground: '#E87236', rock: '#C8B686', bug: '#83C300',
  ghost: '#4C6AB2', steel: '#5A8EA2', fairy: '#FB89EB',
}

export default function PokeCard({ pokemon }) {
  const mainType = pokemon.types[0].type.name
  const color = TYPE_COLORS[mainType] || '#919AA2'
  const artwork = pokemon.sprites.other['official-artwork'].front_default

  return (
    <div className="card" style={{ '--type-color': color }}>
      <div className="card-bg" />
      <span className="card-number">#{String(pokemon.id).padStart(3, '0')}</span>
      <div className="card-img-wrapper">
        <img src={artwork} alt={pokemon.name} />
      </div>
      <div className="card-info">
        <h3>{pokemon.name}</h3>
        <div className="types">
          {pokemon.types.map(t => (
            <span
              key={t.type.name}
              className="type-badge"
              style={{ background: TYPE_COLORS[t.type.name] }}
            >
              {t.type.name}
            </span>
          ))}
        </div>
        <div className="stats">
          <div className="stat">
            <span className="stat-label">HP</span>
            <div className="stat-bar">
              <div className="stat-fill" style={{ width: `${pokemon.stats[0].base_stat}%`, background: color }} />
            </div>
            <span className="stat-val">{pokemon.stats[0].base_stat}</span>
          </div>
          <div className="stat">
            <span className="stat-label">ATK</span>
            <div className="stat-bar">
              <div className="stat-fill" style={{ width: `${pokemon.stats[1].base_stat}%`, background: color }} />
            </div>
            <span className="stat-val">{pokemon.stats[1].base_stat}</span>
          </div>
        </div>
      </div>
    </div>
  )
}