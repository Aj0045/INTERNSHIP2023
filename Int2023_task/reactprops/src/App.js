import logo from './logo.svg';
import './App.css';
import Details,{Multipledata} from './propscomponents';


function App() {
  return (
    <div className="App">
      <h>Hello</h>
    </div>
  );
}

function New(){
  return(
    <div>
      <h1>New component added</h1>
      <Details name="infolabz" />
      <Details name="GTU" />
      <Details name="INT2023" />
      <Multipledata name="infolabz" email="info@infolabz.in" />
      <Multipledata name="xyz" email="xyz@gmail.com" />
    </div>
  );
}

export default App;
export {New};
