import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <h2>How are you.!</h2>
    </div>
  );
}

function Msg(){
  return(
    <div>New message from Msg component</div>

  );
}

function Add(){
  var a=10,b=20;
  return(
    <div>Addition of {a} and {b} is {a+b}</div>
  );
}

export default App;
export {Msg,Add};
