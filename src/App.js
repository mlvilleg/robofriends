import React from "react";
import SearchBox from './SearchBox'
import CardList from "./CardList";
import {robots} from './robots';
import './App.css';


class App extends React.Component {
    constructor(){
        super();
        this.state = {
            robots: [],
            searchfield: ''        
            
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json()
            ).then(users => this.setState({robots:robots}))


       
    }



    onSearchChange = (event) => {
        this.setState({"searchfield": event.target.value})
      
     
    }
    


    render(){

        const filteredRobot = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());  
            
        })
  
    
        return ( 
            <div className="tc">
                <h1 className="f1">Robo Friends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList robots={filteredRobot} />
                
            </div>
        )
    }
}

export default App;