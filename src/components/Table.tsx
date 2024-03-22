import { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
// import { PlanetsType } from '../types';
import Planets from './Planets';

export default function Table() {
  const { data } = useContext(StarWarsContext);
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>films</th>
          <th>created</th>
          <th>edited</th>
          <th>url</th>
        </tr>
      </thead>
      <tbody>
        {data.map((planet) => (<Planets key={ planet.name } data={ planet } />))}
      </tbody>
    </table>
  );
}
