import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
//Context API and how Redux integrates with it
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';
//Thunk is just for organization
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import EventForm from './containers/EventForm';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import CategoryShow from './containers/CategoryShow';
import Home from './components/Home';


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <Router>
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/categories" component={App} /> 
      <Route exact path="/categories/:id/events" component={CategoryShow} />
      <Route exact path="/events/new" component={EventForm}/>
    </Router>
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
