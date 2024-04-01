import './navBar.css'
function NavBar({ setPokemonIndex, pokemonList }) {

    // const handlePreviousClick = () => {
    //     setPokemonIndex(pokemonIndex - 1);
    // }

    // const handleNextClick = () => {
    //     setPokemonIndex(pokemonIndex + 1);
    // }

    const pikaMessage = (pokemonId, pokemonName) => {
        setPokemonIndex(pokemonId);
        if (pokemonName === "pikachu") {
            alert("pika pikachu !!!")
        }
    }

    return (
        <div>
            {pokemonList.map((pokemon) => (
                <button
                    key={pokemon.id}
                    name={pokemon.name}
                    type="button"
                    onClick={() => pikaMessage(pokemon.id, pokemon.name)}

                >{pokemon.name}</button>
            ))
            }
            {/* {pokemonIndex > 0 ? <button onClick={handlePreviousClick}>Précédent</button> : null}
            {pokemonIndex < pokemonList.length - 1 ? <button onClick={handleNextClick}>Suivant</button> : null} */}
        </div >
    )
}

export default NavBar