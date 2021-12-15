import PropTypes from "prop-types";
import "./App.css";
import pokemon from "./pokemon.json";
import { useState } from "react";

const PokemonRow = ({ pokemon, onSelect }) => {
  return (
    <tr key={pokemon.id}>
      <td>{pokemon.name.english}</td>
      <td>{pokemon.type.join(":")}</td>
      <td>
        <button onClick={() => onSelect(pokemon)}>select!</button>
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

function App() {
  const [filter, setFilter] = useState("");
  const [selectItem, setSelectItem] = useState(null);

  return (
    <div
      style={{
        margin: "auto",
        width: 800,
        paddingTop: "1rem",
      }}
    >
      <h1 className="title"> hello react</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "70% 30%",
          gridColumnGap: "1rem",
        }}
      >
        <div>
          <input
            value={filter}
            onChange={(evt) => {
              setFilter(evt.target.value);
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
              {pokemon
                .slice(0, 5)
                .filter((item) =>
                  item.name.english.toLowerCase().includes(filter)
                )
                .map((item) => {
                  return (
                    <PokemonRow
                      pokemon={item}
                      onSelect={(pokemon) => setSelectItem(pokemon)}
                      key={item.id}
                    ></PokemonRow>
                  );
                })}
            </tbody>
          </table>
        </div>

        {selectItem && <PokemonInfo {...selectItem}></PokemonInfo>}
      </div>
    </div>
  );
}

export default App;
