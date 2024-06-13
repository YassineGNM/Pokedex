

const container = document.querySelector('.container');
const pokemonDiv = document.getElementById('pokemon');

const pokemonList = []

//premiere méthode fetch
fetch("https://pokeapi.co/api/v2/pokemon")

.then(async (result)=> {
    if (result.ok) {
        const data = await result.json()
        const pokemons = data.results
        for (let index = 0; index < pokemons.length; index++) {
            const element = pokemons[index];

            fetch(element.url).then(async (pokemonFetched)=> {
                if (pokemonFetched.ok) {
                    
                    

                }
            })
            
        }
    }        
})
.catch((error)=> {
    console.log(error);
})



const tableType = [
    {
        name: "grass",
        color: "#78cd54"
    },

    {
        name: "fire",
        color: "#ff421cde"
    },

    {
        name: "bug",
        color: "#abbc1c"
    },

    {
        name: "water",
        color: "#2f9aff"
    },

    {
        name: "normal",
        color: "#BCBCAC"
    },
    
    {
        name: "poison",
        color: "#ab549a"
    },
    {
        name: "flying",
        color: "#669AFF"
    },
    {
        name: "ground",
        color: "#DEBC54"
    },
    {
        name: "fairy",
        color: "#FFACFF"
    },
    {
        name: "psychic",
        color: "#FF549A"
    },
    {
        name: "rock",
        color: "#BCAC66"
    },
    {
        name: "ice",
        color: "#78DEFF"
    },
    {
        name: "dark",
        color: "#785442"
    },
    {
        name: "steel",
        color: "#ABACBC"
    },
    {
        name: "ghost",
        color: "#6666BC"
    },
    {
        name: "dragon",
        color: "#7866EF"
    },
    {
        name: "electric",
        color: "#FFCD30"
    },
    {
        name: "fighting",
        color: "#BC5442"
    },
]





function getColorType(typeName) {
    for (let index = 0; index < tableType.length; index++) {
        const element = tableType[index];
        
        if (element.name === typeName) {
            return element.color

        }
        
    }
}



async function getPokemonList() {
    const result = await fetch("https://pokeapi.co/api/v2/pokemon?limit=898")
    try {
        if (result.ok) {
            const data = await result.json()
            const pokemons = data.results

            return pokemons
        }
            
    }

    catch (error) {
        console.log(error);
    }

}           

async function fetchPokemons() {
    const pokemonList = await getPokemonList()
    try {
        if (pokemonList.length) {
            for (let index = 0; index < pokemonList.length; index++) {
                const element = pokemonList[index];
                
                const pokemonFetched = await fetch(element.url)
                  
                    if (pokemonFetched.ok) {
                        const pokemon = await pokemonFetched.json()
                        
                        
                        
                        const formatTypeName = (index) => 
                                pokemon.types.at(index).type.name.charAt(0).toUpperCase() + pokemon.types.at(index).type.name.slice(1)


                            

                            
                            const newPokemonDiv = `
                                <img class="img" src="${pokemon.sprites.front_default}"/>

                                <div>
                                    <span class="id">N° ${index+1}</span>
                                    <h2>${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
                                    <div class="types">
                                        ${
                                        pokemon.types.length>1 
                                        ? `<span 
                                        
                                            class="type" 

                                                style="background-color: ${getColorType(pokemon.types.at(0).type.name)}"
                                            >
                                                ${formatTypeName(0)}
                                            </span>

                                            <span 
                                                class="type" 
                                                style="background-color: ${getColorType(pokemon.types.at(1).type.name)}"
                                            >
                                                ${formatTypeName(1)}
                                            </span> `

                                        : ` <span 
                                                class="type" 
                                                style="background-color: ${getColorType(pokemon.types.at(0).type.name)}"
                                            >
                                                ${formatTypeName(0)}
                                            </span>`
                                        }
                                    </div>
                                </div>
                            `
        
                            const article = document.createElement("article")
                            article.setAttribute("class","card")
                            article.innerHTML = newPokemonDiv
                            article.setAttribute("id",`pokemon-${index+1}`)
                            container.appendChild(article)
                        }
                    
                
            }
            console.log(pokemonList)


        }
    } catch (error) {
        console.log(error);
    }
}
fetchPokemons()


//méthode de tableau 

const fruits = ["pomme", "kiwi", "poire"]

//modifie le tableau
fruits.push("banane")
fruits.unshift("fraise")

const lastElement = fruits.pop()

fruits.shift()
console.log(fruits)

//recherche 
fruits.indexOf("poire")
fruits.at(2)
fruits[2]
fruits.includes("kiwi")

//modification poussé d'un tableau 


const cars = ["audi", "bmw", "mercedes"]

const x = cars.map((car, i, arr)=>{
    if (car==="bmw") {
        return true 
    }
})

const tablePeople = [75, 10, 5]

const y = tablePeople.map((num)=>{
    return num*5+2-100
}) 

console.log(y);    
