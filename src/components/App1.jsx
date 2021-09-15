import React from 'react';


class App extends React.Component {

    constructor() {
        super();
        this.state = {  bg: 'palegreen',
                        w: '100px',
                        h: '100px',
                        r:  '50%',
                        in: 'Iveskit spalva',
                        in2: 'Iveskit skersmeni'
                         }; 
    };

    changeColor = (color) => {
        this.setState ({
            bg: color,
        })
    }

    
    inChange = (e) => {
        this.setState ({
            in: e.target.value,
        });
    }
    
    inChange2 = (e) => {
        this.setState ({
            in2: e.target.value,
        });
    }

    doColor = () => {
        this.setState(state => ({bg: state.in}));
    }
    
    radius = () => {
        this.setState(state =>({w:state.in2, h:state.in2}))
    }
    form = () => {
        this.setState(state => {
            let radius;
            if (state.r == '50%') {
                radius = '0%'
            }
            else if (state.r == '0%') {
                radius = '50%'
            }
            return (
                {r: radius}
            )
        });
            
    }

    render () {
    return ( <>
        <div className="rutulys" style={{backgroundColor: this.state.bg, height:this.state.h, width:this.state.w, borderRadius: this.state.r}}>  

        <input className ="spalva" type="text" value={this.state.in} onChange={this.inChange}></input>
        <button className="input-button" onClick={this.doColor}>Change Color</button>

        <input className ="skersmenis" type="text" value={this.state.in2} onChange={this.inChange2}></input>
        <button className="input-button2" onClick={this.radius}>Change Size</button>
            
        <input className = "kvadratas" type="checkbox" defaultunchecked={this.state.r} onChange={this.form}></input>
        </div>    
         
    </>);
    }
}

export default App

//
//




    