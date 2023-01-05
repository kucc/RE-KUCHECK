import ReactDOM from 'react-dom';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';

import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <Router>
      <App />
    </Router>
  </BrowserRouter>,
  document.getElementById('root'),
);
