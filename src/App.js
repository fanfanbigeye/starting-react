import './App.css'

import pokemon from './pokemon.json'

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
            return (<tr key={item.id}>
              <td>{item.name.english}</td>
              <td>{item.type.join(':')}</td>
            </tr>)
          })}
        </tbody>
      </table>
      
    </div>
  );
}

export default App;
