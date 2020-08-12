import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Discover from './components/Discover';
import DiscoverBattle from './components/DiscoverBattle';
import Popular from './components/Popular';
import PopularBattle from './components/PopularBattle';
import MyList from './components/MyList';
//import Card from './components/movie/Card';

//71ec704e7ba9b86c4840374f4ec0e67a
class App extends React.Component {

//  constructor(props) {
//    super(props); 

//    this.state = {
//      movies: [{}]
//    }
//  }
  render() {
//    const {
//      movies,
//    } = this.state;
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li><Link to="/">This week</Link></li>
              <li><Link to="/discoverbattle/">This week Battle</Link></li>
              <li><Link to="/popular/">Popular</Link></li>
              <li><Link to="/popularbattle/">PopularBattle</Link></li>
              <li><Link to="/mylist/">MyList</Link></li>
            </ul>
          </nav>
          <Switch>
            <Route path="/popular/">
              <Popular />
            </Route>
            <Route path="/popularbattle/">
              <PopularBattle />
            </Route>
            <Route path="/mylist/">
              <MyList />
            </Route>
            <Route path="/discoverbattle/">
              <DiscoverBattle />
            </Route>
            <Route path="/">
              <Discover />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;