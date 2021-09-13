import React from 'react';
import Mygtukas1 from './Mygtukas'
import Mygtukas2 from './Mygtukas2'
import Mygtukas3 from './Mygtukas3'

class App extends React.Component {

    constructor() {
        super();
        this.state = {bg: 'palegreen'}; 
    };

    changeColor = () => {

        this.setState(state => {
            let color;
            if (state.bg == 'palegreen') {
                color = 'orangered';
            }
            else if (state.bg == 'orangered') {
                color = 'palegreen'
            }
            return (
                {bg: color}
           // {bg: state.bg == 'palegreen' ? 'orangered' : 'palegreen'}  sutrumpintas if ciklas
            )
        });

    }

    render () {
    return ( <>
        <div className="rutulys" style={{backgroundColor: this.state.bg}}>           
            <Mygtukas1 clickToChangeColor={this.changeColor}></Mygtukas1>
        </div>
        <div className="rutulys" style={{backgroundColor: this.state.bg}}>           
            <Mygtukas2 clickToChangeColor={this.changeColor}></Mygtukas2>
        </div>     
        <div className="rutulys" style={{backgroundColor: this.state.bg}}>           
            <Mygtukas3 clickToChangeColor={this.changeColor}></Mygtukas3>
        </div>    
         
    </>);
    }
}

export default App