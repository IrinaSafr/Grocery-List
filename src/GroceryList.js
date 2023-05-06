import { Component } from 'react';
import icon from './icon.png';

export class GroceryList extends Component {
    state = {
        userInput: "",
        groceryList: []
    }

    onChangeEvent(e){
        this.setState({userInput: e})
        // console.log(e)
    }

    addItem(input) {
        if (input === ""){
            alert("Please enter an item")
        }
        else{
        let listArray = this.state.groceryList;
        listArray.push(input)
        this.setState({groceryList: listArray, userInput:'' })
        console.log(listArray)}
    }

    deleteItem(){
        let listArray = this.state.groceryList;
        listArray = [];
        this.setState ({groceryList: listArray})
    }

    crossedWord(e) {
        const li = e.target;
        li.classList.toggle('crossed')
    }

    onFormSubmit(e){
        e.preventDefault();
    }

    render() {
        return(
            <div>

            <form onSubmit={this.onFormSubmit}>
                 <div className='conteiner'>
                    <input type="text" 
                        placeholder= "What are you want to buy today?"
                         onChange={(e) => {this.onChangeEvent(e.target.value)}}
                        value={this.state.userInput}
                    /> 
                  </div>

                  <div className='conteiner'>
                     <button className='add' onClick={() => this.addItem(this.state.userInput)} >Add</button>
                  </div>

                  <ul>

                    {this.state.groceryList.map((item, index) =>(
                        <li onClick={this.crossedWord} key={index}>
                        <img src={icon} width= "30px" alt= "icon"/>
                        {item}</li>
                        ))
                    }
                  </ul>

                  <div className='conteiner' >
                      <button className='delete' onClick={() => this.deleteItem()}>Delete</button>
                  </div>

                  </form> 
            </div>

            
        )
    }
}