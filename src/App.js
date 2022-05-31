import Nav from './views/Nav'
import Home from './views/Home'
import HomeTwo from './views/HomeTwo'
import HomeThree from './views/HomeThree'
import About from './views/About'
import Header from './views/Header'
import Missing from './views/Missing'
import NewPost from './views/NewPost'
import PostPage from './views/PostPage'
import BlogList from './views/BlogList'
import CountdownTimer from './views/CountdownTimer'
import Footer from './views/Footer' 

//import axios from 'axios';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';


function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
          <Route  path= "/" component={Header} />
      < Nav />
        <Switch>
          <Route exact path= "/" component={Home} />
          <Route exact path= "/about" component={About} />
          <Route exact path= "/HomeTwo" component={HomeTwo} />
          <Route exact path= "/HomeThree" component={HomeThree} />
          <Route exact path= "/BlogList" component={BlogList} />
          <Route exact path= "/Missing" component={Missing} />
          <Route exact path= "/NewPost" component={NewPost} />
          <Route exact path= "/PostPage" component={PostPage} />
          <Route exact path= "/CountdownTimer" component={CountdownTimer} />
        </Switch>
          <Route  path= "/" component={Footer} />
      </header>
    </div>
      </Router>
  );
}

export default App;
