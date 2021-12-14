import './App.css'
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
            <th>name</th>
            <th>age</th>
            <th>address</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>zyx</td>
            <td>30</td>
            <td>beijing</td>
          </tr>
        </tbody>
      </table>
      
    </div>
  );
}

export default App;
