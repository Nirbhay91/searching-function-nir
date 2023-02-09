import * as React from 'react';
import { Results } from './npmPackage';
import { useNavigate } from 'react-router-dom';
import './style.css';
import axios from 'axios';

export default function Search() {
  const [packages, setPackage] = React.useState('');
  const [textarea, setTextarea] = React.useState('');
  const [radioData, setRadiodata] = React.useState('');
  const history = useNavigate();

  React.useEffect(() => {
    localStorage.setItem('dataKey', JSON.stringify(packages));
  }, [packages]);

  function submit(e) {
    let value = { radioData, textarea };
    // localStorage.setItem('dataKey', JSON.stringify(packages));
    console.warn(value);
    e.preventDefault();
    history('/table');
    // await axios.post('npmPackage/value');
  }

  function main(e) {
    e.preventDefault();
    history('/');
  }
  console.log(packages);
  console.log(
    Results.filter((user) => user.package.name.toLowerCase().includes(packages))
  );
  return (
    <div>
      <button onClick={main}>Main</button>
      <h1>Search for NPM Package</h1>
      <input
        type="text"
        placeholder="angular"
        className="search"
        onChange={(e) => setPackage(e.target.value)}
      />
      <h5>Results</h5>
      {Results.filter((pac) =>
        pac.package.name.toLowerCase().includes(packages)
      ).map((data) => (
        <ul key={data.searchScore}>
          <input
            type="radio"
            value={data.package.name}
            onChange={(e) => setRadiodata(e.target.value)}
          />
          {data.package.name}
        </ul>
      ))}

      <h5>Why is this your fav?</h5>
      <textarea
        name="comments"
        id="comments"
        value={textarea}
        onChange={(e) => setTextarea(e.target.value)}
      ></textarea>
      <button onClick={submit}>Submit</button>
    </div>
  );
}
