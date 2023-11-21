//this is use staate hook
import { useState } from "react";
const Home = () => {

  

    //this variable array stores 2 values which will use to pass the value to be change and other to identify it
    const [name,setName] = useState('mario')
    const [age,setAge] = useState(25);
   
    const handleCLick = () =>{
        
        //this function will change the value of name variable
        setName('luigi');
        setAge(30);

    
    }

    return (  

        <div className="home">
            <h2>Home Page</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleCLick}>Click me</button>
        </div>

    );
}
 
export default Home;