import React,{Component} from 'react';
import ReactDOM from 'react-dom';

//COMPONENTS
import Header from './components/header';
import JSON from './db.json';


// const App = () => {
//     console.log(JSON);
//     return (
//         <div>
//         <Header />
//         <h1>Hello CodeNinja!</h1>
//         </div>
        
        
//     )
// }

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            news:JSON
        }
    }
    
    render() {
        return (
            <div>
            <Header />
            </div>
        )
    }
}


ReactDOM.render(<App />,document.querySelector('#root'));