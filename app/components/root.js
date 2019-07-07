import React from 'react'
import CandyList from './CandyList';
import {HashRouter as Router, Route, Link} from 'react-router-dom';

const Root = () => {
  return (
    <Router>
    <div>
      <nav>
        Goodie Bag
        <Link to="/candies">Candies</Link>
        <Link to="/">Home</Link>
      </nav>
      <main>
        <h1>Welcome to the Goodie Bag!</h1>
        <p>What a nice home page for your goodies!</p>
        <Route exact path="/candies" component={CandyList} />
      </main>
    </div>
    </Router>
  )
}

export default Root
