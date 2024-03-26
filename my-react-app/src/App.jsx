import './App.css'
import MyTitle from './components/MyTitle'
import './components/PokemonCard'
import PokemonCard from './components/PokemonCard'

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];
function App() {


  return (
    <>

      <MyTitle />
      <PokemonCard pokemon={pokemonList[0]} />
    </>
  )
}

export default App
