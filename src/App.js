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

    onSearchChange(event){
        console.log(event)
    }


    render(){

    
    return (
        <div className="tc bg-lightest-blue">
            <h1>Robo Friends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <CardList robots={this.state.robots}/>
        </div>
    )
    }
}

export default App;