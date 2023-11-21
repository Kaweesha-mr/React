//this is use staate hook
import { useState,useEffect } from "react";
import BlogList from "./BlogList";
const Home = () => {

  

    //this variable array stores 2 values which will use to pass the value to be change and other to identify it
    // const [name,setName] = useState('mario')
    // const [age,setAge] = useState(25);
   
    // const handleCLick = () =>{
        
         //this function will change the value of name variable
    //     setName('luigi');
    //     setAge(30);

    
    // }


    const [blog,setBlog] = useState(null);

    const [name,setName] = useState('mario');

    const handleDelete = (id) =>{
        const newBlogs = blog.filter(blog => blog.id !== id);
        setBlog(newBlogs);
    }


    //when dependancy used it wont run each time
    //only when name changed it will run


    useEffect(() => {
        fetch('http://localhost:8000/blogs')
        .then(res => {
            return res.json();
        })
        .then(data =>{
            console.log(data);
        })
    }, []);

    return (  
        <div className="home">


            {/* this can pass values from parent to child parent is home and child is bloglist */}
            {/* this is promps */}
            <BlogList blog = {blog} title = "all blogs"  handleDelete={handleDelete}/>
            <button onClick={() => setName('luigi')}> Change Name</button>
            

        </div>

    );
}
 
export default Home;