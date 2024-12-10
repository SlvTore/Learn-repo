import React from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import './App.css';
import Heading from './components/Heading';
import handleClick  from './components/Handlenumber';
import Fruits from './components/Fruits';
import Fruitscounter from './components/Fruitscounter';
import Contact from './components/Contact';


function App() {
  const [fruits] = React.useState([
    {fruitsname : "apple", id : 1},
    {fruitsname : "apple", id : 2},
    {fruitsname : "plum", id : 3},
]);
  function Main(props) { 
    return <Header msg={props.msg} />; 
  };
  
  function Header(props) { 
    return ( 
      <div style={{ border: "10px solid whitesmoke" }}> 
        <h1>Header here</h1> 
        <Wrapper msg={props.msg} /> 
      </div> 
    ); 
  };
  
  function Wrapper(props) { 
    return ( 
      <div style={{ border: "10px solid lightgray" }}> 
        <h2>Wrapper here</h2> 
        <Button msg={props.msg} /> 
      </div> 
    ); 
  };
  
  function Button(props) { 
    return ( 
      <div style={{ border: "20px solid orange" }}> 
        <h3>This is the Button component</h3> 
        <button onClick={() => alert(props.msg)}>Click me!</button> 
      </div> 
    ); 
  };

  return (
    <div className="App">
      <BrowserRouter>
      <nav>
        <Link to="/contact" className="nav-item">Contact</Link>
      </nav>
        <Route path="/contact" element={<Contact />}>Contact</Route>
      </BrowserRouter>
      <Heading  firstName = "Fadil"/>
      <Heading  firstName = "Elisa"/>
      <h1>Task: Add a button and handle a click event</h1>
      <button onClick={handleClick}>Guess the Number between 1 and 3</button>
      <Main  
      msg="I passed through the Header and the Wrapper and I reached the Button component"  
      /> 
      <h1>Where should the state go?</h1>
      <Fruits fruits={fruits}/>
      <Fruitscounter fruits={fruits}/>
    </div>
  );
}

export default App;
