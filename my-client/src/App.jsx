import React , { Component}from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './Component/Header';
import Home from'./Component/Home';
import AllStudents from './Component/AllStudents';
import Student from './Component/Student'
import './App.css';

export default  class App extends Component{
  state={

  }
  componentDidMount(){

  }
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/all-students' component={AllStudents} />
          <Route exact path='/all-student/:username' component={Student} />
          <Route exact render={()=>(
            <h1>page not found</h1>
          )} />

        </Switch>
      </BrowserRouter>
    )
  }
}