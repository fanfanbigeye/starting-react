import PropTypes from 'prop-types'
import './App.css'
import pokemon from './pokemon.json'

const PokemonRow = ({pokemon}) => {
  return (<tr key={pokemon.id}>
    <td>{pokemon.name.english}</td>
    <td>{pokemon.type.join(':')}</td>
  </tr>)
}


PokemonRow.prototype = {
  pokemon: PropTypes.shape({
    name: PropTypes.shape({
      english: PropTypes.string
    }),
    type: PropTypes.arrayOf(PropTypes.string)
  })
}

function App() {
  return (
    <div style={{
      margin: 'auto',
      width: 800,
      paddingTop: '1rem'

    }}>
      <h1 className="title"> hello react</h1>
      <table width="100%">
        <thead>
        <tr>
            <th>Name</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          { pokemon.slice(0,5).map(item => {
            return <PokemonRow pokemon={item}  key={item.id}></PokemonRow>
          })}
        </tbody>
      </table>
      
    </div>
  );
}

export default App;
