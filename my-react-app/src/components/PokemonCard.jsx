// import cardImg from "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"


function PokemonCard({ pokemon }) {
    return (
        <figure>
            {pokemon.imgSrc ? <img src={pokemon.imgSrc} alt={pokemon.name} /> : <p>???</p>}
            <figcaption>{pokemon.name}</figcaption>
        </figure>
    )
}


export default PokemonCard