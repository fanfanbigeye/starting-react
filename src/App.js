import PropTypes from "prop-types";
import "./App.css";
import React, { useState, useEffect} from "react";
import styled from '@emotion/styled'
import { Button } from '@material-ui/core';

const PokemonRow = ({ pokemon, onSelect }) => {
  return (
    <tr key={pokemon.id}>
      <td>{pokemon.name.english}</td>
      <td>{pokemon.type.join(":")}</td>
      <td>
        <Button variant="contained" color="primary" onClick={() => onSelect(pokemon)}>select!</Button>
      </td>
    </tr>
  );
};

const PokemonInfo = ({ name, base }) => {
  return (
    <div>
      <h1>{name.english}</h1>
      <table>
        <thead></thead>
        <tbody>
          {Object.keys(base).map((key) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{base[key]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

PokemonInfo.propTypes = {
  name: PropTypes.shape({
    english: PropTypes.string.isRequired,
  }),
  base: PropTypes.shape({
    HP: PropTypes.number.isRequired,
    Attack: PropTypes.number.isRequired,
    Defense: PropTypes.number.isRequired,
    "SP.Attack": PropTypes.number.isRequired,
    "SP.Defence": PropTypes.number.isRequired,
    Speed: PropTypes.number.isRequired,
  }),
};

PokemonRow.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.shape({
      english: PropTypes.string.isRequired,
    }),
    type: PropTypes.arrayOf(PropTypes.string.isRequired),
  }),
  onSelect: PropTypes.func.isRequired,
};

const Container = styled.div({
  margin: "auto",
  width: 800,
  paddingTop: "1rem",
})

const GridTemplate = styled.div({
  display: "grid",
          gridTemplateColumns: "70% 30%",
          gridColumnGap: "1rem",
})

const Title = styled.h1({
  textAlign: 'center'
})

const Input = styled.input({
  width: '100%',
  fontSize: 'x-large',
  padding: '0.2rem'
})

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      filter: '',
      pokemon: [],
      selectItem: null
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/starting-react/pokemon.json')
    .then(res => res.json())
    .then(pokemon=> {
      this.setState({
        pokemon
      })
    })
    
  }

  render(){
    return (
      <Container>
        <Title> hello react</Title>
        <GridTemplate>
          <div>
            <Input
              value={this.state.filter}
              onChange={(evt) => {
                this.setState({
                  filter: evt.target.value
                });
              }}
            />
  
            <table width="100%">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                {this.state.pokemon
                  .slice(0, 5)
                  .filter((item) =>
                    item.name.english.toLowerCase().includes(this.state.filter)
                  )
                  .map((item) => {
                    return (
                      <PokemonRow
                        pokemon={item}
                        onSelect={(pokemon) => this.setState({
                          selectItem: pokemon
                        })}
                        key={item.id}
                      ></PokemonRow>
                    );
                  })}
              </tbody>
            </table>
          </div>
          {this.state.selectItem && <PokemonInfo {...this.state.selectItem}></PokemonInfo>}
        </GridTemplate>
      </Container>
    );
  }

}

// function App() {
//   const [filter, setFilter] = useState("");
//   const [pokemon, setpokemon] = useState([])
//   const [selectItem, setSelectItem] = useState(null);

//   useEffect(() => {
//     fetch('http://localhost:3000/starting-react/pokemon.json')
//     .then(res => res.json())
//     .then(pokemon=> {
//       setpokemon(pokemon)
//     })

//   }, [])

//   return (
//     <Container>
//       <Title> hello react</Title>
//       <GridTemplate>
//         <div>
//           <Input
//             value={filter}
//             onChange={(evt) => {
//               setFilter(evt.target.value);
//             }}
//           />

//           <table width="100%">
//             <thead>
//               <tr>
//                 <th>Name</th>
//                 <th>Type</th>
//               </tr>
//             </thead>
//             <tbody>
//               {pokemon
//                 .slice(0, 5)
//                 .filter((item) =>
//                   item.name.english.toLowerCase().includes(filter)
//                 )
//                 .map((item) => {
//                   return (
//                     <PokemonRow
//                       pokemon={item}
//                       onSelect={(pokemon) => setSelectItem(pokemon)}
//                       key={item.id}
//                     ></PokemonRow>
//                   );
//                 })}
//             </tbody>
//           </table>
//         </div>
//         {selectItem && <PokemonInfo {...selectItem}></PokemonInfo>}
//       </GridTemplate>
//     </Container>
//   );
// }

export default App;
