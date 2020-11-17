import './App.css';
import Card from './src/Components/card';
import {person} from './src/utils/person';
import Counter from "./src/Components/counter" 

function App() {
  return (
    <>
      {person.map((item) =>{
        return(
          <Card
            name={item.name}
            institution={item.institution}
            address={item.address}
            phone={item.phone}
          />
        );
      })}
      <Counter title = "Counter Component"/>
    </>
  );
}

export default App;