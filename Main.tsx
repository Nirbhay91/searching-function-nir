import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

export default function Main() {
  const history = useNavigate();
  function submit(e) {
    e.preventDefault();
    history('/search');
  }
  return (
    <div>
      <h3>Welcome to favorite NPM package</h3>
      <div className="box">
        <p>You don't have any fev yet.Please add</p>
        <button className="addfev" onClick={submit}>
          Add fev
        </button>
      </div>
    </div>
  );
}
