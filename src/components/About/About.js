import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";
import History from "../History/History";
import Contact from "../Contact/Contact";

export default class About extends Component {
  render() {
    return (
      <div>
          <div className='subnav'>
            <Link to='/about' className='subnav_links'><h3>About</h3></Link>
            <Link to='/about/history' className='subnav_links'><h3>History</h3></Link>
            <Link to='/about/contact' className='subnav_links'><h3>Contact</h3></Link>
          </div>

          <div className='box'>
            <Switch>
              <Route path='/about/history' component={ History }/>
              <Route path='/about/contact' component={ Contact }/>
              <Route path='/about' render={() => (
                <div>
                    <h1>Monsters University Fight Song</h1>
                    <p>Monsters University
We give our heart to you
We want you to be proud of us
What ever we may do

Wherever children are dreaming
We'll bring them nightmares too
From Monsters University
Alma Mater, we love you

Monsters of the world
Can you hear the call?
At Monsters University
You're welcome, one and all

Monsters University, Monsters University
First in terror, first in fear
We're awfully glad we're here

Monsters University
We never will forget
The golden years we spent with you
And the monsters that we met

No matter where life takes us
Your light will come shining through
Oh, Monsters University
Alma Mater, hail to you</p>
                </div>
              )}/>
            </Switch>
          </div>
        </div>
    );
  }
}
