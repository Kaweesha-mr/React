//this is use staate hook
import { useState } from "react";
import BlogList from "./BlogList";
const Home = () => {

  

    // //this variable array stores 2 values which will use to pass the value to be change and other to identify it
    // const [name,setName] = useState('mario')
    // const [age,setAge] = useState(25);
   
    // const handleCLick = () =>{
        
    //     //this function will change the value of name variable
    //     setName('luigi');
    //     setAge(30);

    
    // }


    const [blog,setBlog] = useState([

        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }

    ])
    return (  

        <div className="home">


            {/* this can pass values from parent to child parent is home and child is bloglist */}
            {/* this is promps */}
            <BlogList blog = {blog} title = "all blogs" />

            <BlogList  blog = {blog.filter((blog) => blog.author === 'mario' )} title="mario Blog"/>

        </div>

    );
}
 
export default Home;