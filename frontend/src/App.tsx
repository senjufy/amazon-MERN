import './App.css';
import Header from './components/Header';
import Home from './components/Home'
import SearchRes from './components/SearchRes';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Provider} from "react-redux";
import store from './redux/store';

function App() {

  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/search/:param" component={SearchRes}/>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
