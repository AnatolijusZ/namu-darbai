import React,  {useEffect, useState} from 'react';
import axios from 'axios';
import Knygos from './Knygos';
    function App() {

        const [knygynas, setKnygynas]=useState([]);

        useEffect (() => {
            console.log("Start");
            axios.get('https://in3.dev/knygos/')
            .then(function (response) {
                setKnygynas(response.data);
            });
        },[]);


        const pirkti = (id) => {
        const knygynasCopy = knygynas.slice();
        for (let i=0; i<knygynasCopy.length; i++) {
            if(knygynasCopy[i].id === id) {
                knygynasCopy.splice(i, 1);
                break;
            }
        } 
            setKnygynas(knygynasCopy);
        }    
      return (
          <div className="knygynas">
            {knygynas.map((knygos)=>(<Knygos key={knygos.id} img={knygos.img} author={knygos.author} title={knygos.title} price={knygos.price} sell={pirkti}></Knygos>))}  
        </div>
     
    )
}
        
    

export default App;