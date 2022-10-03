import './App.css';
import React from 'react';
import { Content } from './components/content';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { NavBar } from './components/navBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";


class App extends React.Component {
  render() {
    return(
      <Router>
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Content></Content>} exact></Route>
        <Route path='/read' element={<Header />} exact></Route>
        <Route path='/create' element={<Footer />} exact></Route>

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
