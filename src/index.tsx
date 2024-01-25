import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  RouterProvider,
} from "react-router-dom";

import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import store from  '../src/store/store';
import rootRouter from './route/route';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={rootRouter} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
