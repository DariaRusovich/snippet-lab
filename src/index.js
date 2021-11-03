import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { TagsProvider } from './hooks/useTags';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <TagsProvider>
        <App />
      </TagsProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
