import { BrowserRouter as Router } from 'react-router-dom';
import App from './app';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router>
        <App/>
      </Router>
    </div>
  </Provider>
  , document.querySelector('.main'));