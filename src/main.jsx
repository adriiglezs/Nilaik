import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import reducer, { initialState } from './reducer'
import { StateProvider } from './StateProvider'

ReactDOM
  .createRoot(document
  .getElementById('root'))
  .render(
    <React.StrictMode>
      <StateProvider initialState={initialState} reducer={reducer}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </StateProvider>
    </React.StrictMode>,
  );
