import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

export default function Table() {
  const history = useNavigate();
  function addfev(e) {
    e.preventDefault();
    history('/search');
  }
  return (
    <div>
      <button onClick={addfev}>Add fev</button>
      <h3>Welcome to favorite NPM package</h3>
      <table>
        <tbody>
          <tr>
            <th>Package Name</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>data</td>
            <button>Edit</button>
            <button>delete</button>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
