import React from 'react';
import Pokemon from './Pokemon';
// import Button from './Button';

class Pokedex extends React.Component {
    constructor() {
        super()
        this.state = {
            countPoke: 0,
            selectType: 'all',

        }
    }  
    

handleClick = (num) => {
    this.setState(state => ({
    countPoke: (state.countPoke + 1) % num, // aqui o valor da % esta atribuindo ao resto da divisão quando for 0
    }));  
}

fetchFilteredPokemons() {
        const { pokemons } = this.props;
        const { selectType } = this.state;
    
        return pokemons.filter(pokemon => {
          if (selectType === 'all') return true;
           return pokemon.type === selectType;
        });
      }
handleType = (type) => {
    this.setState({
    selectType: type, 
    countPoke: 0,
    });  
    }

   
render() {
    const filtro = this.fetchFilteredPokemons();
    const pokes = filtro[this.state.countPoke];

        return (
            <div className='container'>
                <div className="pokedex">
                    {<Pokemon pokemon={ pokes } />}
                </div>                    
                <div className="pokedexButton">
                    <button className='button' onClick={() => this.handleType('all')}>All</button>  
                    <button className='button' onClick={() => this.handleType('Fire')}>Fire</button>  
                    <button className='button' onClick={() => this.handleClick(filtro.length)}>Next</button>
                    <button className='button' onClick={() => this.handleType('Psychic')}>Psychic</button>         
                </div>    
           </div>    
        )
    }
}

export default Pokedex;