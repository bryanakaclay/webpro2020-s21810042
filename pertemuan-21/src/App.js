import './App.css';
import Card from './Components/card';
import {person} from './utils/person';
import Counter from "./Components/counter" 

function App() {
  return (
    <>
      {/*person.map((item) =>{
        return(
          <Card
            name={item.name}
            institution={item.institution}
            address={item.address}
            phone={item.phone}
          />
        );
      })*/}
      <Counter title = "Counter Component"/>
    </>
  );
}

export default App;