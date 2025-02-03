
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ConfigProvider, theme } from 'antd';
import { antConfig } from './utils/antConfig.js';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import  store  from './services/Store/store.js';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <ConfigProvider theme={antConfig}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </ConfigProvider>,
  </Provider>
)
