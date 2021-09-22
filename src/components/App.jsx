import React,  {useEffect, useState} from 'react';
import axios from 'axios';
import Knygos from './Knygos';
    function App() {

        const [knygynas, setKnygynas]=useState([]);

        useEffect (() => {
            console.log("Start");
            axios.get('https://in3.dev/knygos/')
            .then(function (response) {
                console.log(response.data);
                setKnygynas(response.data);
            });
        },[]);

     
      //      const todosCopy2 = todos.slice();
      //      for(let i=0; i<todosCopy2.length; i++) {
      //          if(id === todosCopy2[i].id){
      //              todosCopy2[i].completed = !todosCopy2[i].completed;
       //             break;
       //         }
      //      }
      //      setTodos(todosCopy2);
            

      return (
          <div className="knygynas">
            {knygynas.map((knygos)=>(<Knygos key={knygos.id} img={knygos.img} author={knygos.author} title={knygos.title} price={knygos.price}></Knygos>))}
        </div>
    )
}
        
    

export default App;