import React from "react";
import SearchBox from './SearchBox'
import CardList from "./CardList";
import {robots} from './robots';



class App extends React.Component {
    constructor(){
        super();
        this.state = {
            robots: robots,
            searchfield: ''        
            
        }
    }

    onSearchChange = (event) => {
        this.setState({"searchfield": event.target.value})
      
     
    }
    


    render(){

        const filteredRobot = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());  
            
        })
        console.log(filteredRobot)
    
        return ( 
            <div className="tc">
                <h1>Robo Friends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList robots={filteredRobot} />
                
            </div>
        )
    }
}

export default App;