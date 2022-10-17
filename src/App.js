import './App.css';
import './Components/Navbar';
import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar/>
          {/* <News pageSize={18} category="entertainment"/> */}
          <Routes>
            <Route exact path='/' element={<News key="general" pageSize={18} category="general"/>}/>
            <Route exact path='/business' element={<News key="business" pageSize={18} category="business"/>}/>
            <Route exact path='/entertainment'element={<News key="entertainment" pageSize={18} category="entertainment"/>}/>
            <Route exact path='/health' element={<News key="health" pageSize={18} category="health"/>}/>
            <Route exact path='/science' element={<News key="science" pageSize={18} category="science"/>}/>
            <Route exact path='/sports' element={<News key="sports" pageSize={18} category="sports"/>}/>
            <Route exact path='/technology' element={<News key="technology" pageSize={18} category="technology"/>}/>

          </Routes>
        </Router>
          
      </div>
    )
  }
}
