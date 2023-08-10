import logo from './logo.svg';
import './App.css';

const data="Hii";
function App() {
  const newdata = "How are you?";
  return (
    <div>
      <h1>Data Variable</h1>
      <h1>{newdata}</h1>
      <h1>{data}</h1>
    </div>
  );
}

const dat = "hi";
const newacc = [5,12,15,25,35];

function Newcomp(){
  return(
    <div>
      <h1>Hello</h1>
      <h2>{dat}</h2>
      <h3>{newacc[0]}</h3>
    </div>
  );
}
const alldata=[5,12,15,25,35];
function Display(){
  return(
    <div>
      {
        alldata.map(
          (data)=>{
            return <h1>{data}</h1>
          }
        )
      }
    </div>
  );
}

export default App;
export {Newcomp,Display};