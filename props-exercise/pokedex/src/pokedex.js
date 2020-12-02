// import react and component from react
// import pokecard.js
// import pokedex css

import { Component } from "react";

export default class Pokedex extends Component {
    render () {
        // 1st TODO: complete the array TODOs below this function

        // Map with arrow functions
        // TODO: create a const called pokemon, set equal to this.props.pokemonm.map( insert callback function here )
            // inside callback function: create instance of Pokecard:
            //Pokecard key: {p.id}
                    // name: {p.name}
                    // type: {p.type}
                    // image: {p.image}

        // return a div containing an h1 tag for the name, then another div with a nested div containing the pokemon

    }
}


// TODO: for each pokemon in the array
            // give each pokemon the following properties:
                    // id
                    // name
                    // type
                    // image

Pokedex.defaultProps = {
    pokemon: [
        { // example pokemon 1
            id: 1,
            name: "Charmander",
            type: "Fire",
            image: "https://www.pinterest.com/pin/401453754277055869/"
        },
        {
            // pokemon 2
        }, 
        {
            // pokemon 3
        },
        {
            // pokemon 4
        }
    ]
};