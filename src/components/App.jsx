import React from 'react';
import Pets from './Pets';
import Pets2 from './Pets2';


class App extends React.Component {

    constructor() {
        super();
        this.state = {
            pets: [],
            petInput: ''
           
    }; 
    };
    
    addCow = (e) => {
        const cow ={color:this.state.petInput};
        const pets = this.state.pets.slice()
        pets.push(cow);
        this.setState({
            pets: pets
        })
        localStorage.setItem('allPets', JSON.stringify(pets));
        
    }
    addSheep = (e) => {
        const sheep ={color:this.state.petInput};
        const pets = this.state.pets.slice()
        pets.push(sheep);
        this.setState({
            pets: pets
        })
        localStorage.setItem('allPets', JSON.stringify(pets));
        
    }
    
    petInputHandler= (e) => {
        this.setState ({
            petInput: e.target.value,
        });
    }
    componentDidMount() {
        const pets = JSON.parse(localStorage.getItem('allPets'));
        if (null === pets) {
            return;
        }
        this.setState({
           pets: pets
        })
    }
    

    render () {
    return ( <>
       {this.state.pets.map((b, i) => <Pets key={i} color={b.color} />)}
       {this.state.pets.map((b, i) => <Pets2 key={i} color={b.color} />)}
        <div>
            <input type="text" value={this.state.petInput} onChange={this.petInputHandler}></input>
            <button className="input-button" onClick={this.addCow}>Add Cow</button>
            <div>
            
                <button className="input-button" onClick={this.addSheep}>Add Sheep</button></div>
            
        </div>        
    </>);
    }
}

export default App