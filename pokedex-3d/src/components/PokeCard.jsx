import './PokeCard.css'

export default function PokeCard({ pokemon }) {
  return (
    <div className="card">
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <h3>#{pokemon.id} {pokemon.name}</h3>
      <div className="types">
        {pokemon.types.map(t => (
          <span key={t.type.name} className={`type ${t.type.name}`}>
            {t.type.name}
          </span>
        ))}
      </div>
      <p>HP: {pokemon.stats[0].base_stat}</p>
      <p>Ataque: {pokemon.stats[1].base_stat}</p>
    </div>
  )
}