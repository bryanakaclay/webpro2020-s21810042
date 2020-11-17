import React, {Component, useEffect, setState} from 'react'
import Card from "./src/Components/card"
import "./App.css"
import axios from 'axios';

// class App extends Component (
//     state = {
//         users: [],
//     };

//     componentDidMount(){
//         axios
//             .get((response) => this.setState({users: response.data}));
//             .
        
//     }
//     render(){
//         return(
//             {
//                 this.state.users.map((item)=>{
//                     return(
//                         <Card
//                             name={item.name}
//                             username={item.username}
//                             email={item.email}
//                             phone={item.phone} 
//                         />
//                     )
//                 })
//             }
//         )
//     }
// )

const App = ( =>{
    useEffect(() => {
        
        }
    }, [])

    return(
        <>
            <p>App Component</p>
        </>
    )
}

export default App