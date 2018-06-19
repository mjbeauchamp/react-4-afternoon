import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from "./components/Home/Home"
import About from './components/About/About'
import ClassList from './components/ClassList/ClassList'
import Student from './components/Student/Student'

//Here we're creating a PURE JSX component, not a class-based or functional component
//When we do this, we keep the file name lowercase
//These routes don't show up visually on the page. They get attached to the components that they are given as arguments
export default (
    <Switch>
        {/* Using the "exact" parameter lets us put the / first, even though it's less specific than /about */}
        <Route component={ Home } exact path='/' />
        <Route component={ About } path='/about' />
        <Route component={ ClassList } path="/classlist/:class"/>
        <Route component={ Student } path="/student/:id"/>
    </Switch>
)