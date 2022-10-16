//Imports
import './App.css';
import React from 'react';
import { Content } from './components/content';
import { NavBar } from './components/navBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import { Read } from './components/read';
import { Create } from './components/create';


//App Component
class App extends React.Component {
  //Render Method
  render() {
    return (
      //Routing 
      <Router>
        <div className="App">
          {/* Navbar Component */}
          <NavBar></NavBar>
          <Routes>
            <Route path='/' element={<Content></Content>} exact></Route>
            <Route path='/read' element={<Read />} exact></Route>
            <Route path='/create' element={<Create />} exact></Route>

          </Routes>
          {/*<Header></Header>
      <Content></Content>
    <Footer></Footer>*/}
        </div>
      </Router>
    );
  }
}

export default App;
