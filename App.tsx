import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './style.css';
import Main from './Main';
import Search from './Search';
import Table from './Table';
export default function App() {
  return (
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/search" element={<Search />} />
          <Route path="/" element={<Main />} />
          <Route path="/table" element={<Table />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
}
