const offset = 0;
const limit = 10;

const api = axios.create({
  baseURL: `https://pokeapi.co/api/v2/pokemon`,
});


api.get("/")
      .then((response) =>{
        let listPokemon = response.data.results
        return listPokemon.map((pokemon) =>{
          axios.get(pokemon.url).then(res => {
           const pokemonDetetalhes = {
              orden: res.data.order,
              name: res.data.name,
              img: res.data.sprites.front_default,
            } 
            console.log(pokemonDetetalhes)
          })
          
      })
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
     });
 