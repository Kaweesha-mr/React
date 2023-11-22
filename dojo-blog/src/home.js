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

    //use to show loading msg until data is fetched
    const [isPending,setIsPending] = useState(true);

    const [error,setError]  = useState(null);

    const handleDelete = (id) =>{
        const newBlogs = blog.filter(blog => blog.id !== id);
        setBlog(newBlogs);
    }


    //when dependancy used it wont run each time
    //only when name changed it will run


    useEffect(() => {
        console.log("use effect run");

        //this is a end point
        //this is like a get request
        fetch('http://localhost:8001/blogs')

        //
        .then(res => {

            console.log(res);

            if(!res.ok){
                throw Error('could not fetch the data for that resource');
            }
            
            //this pass the jason dat in to js object
            //and return it
            return res.json();
        })

        .then(data =>{
        
            setBlog(data)

            //this will stop the loading
            setIsPending(false);

            setError(null);
        })
        .catch(err =>{
            setIsPending(false);
            setError(err.message);
            
        })

    }, []);

    return (  
        <div className="home">


            { error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}

            {/* this can pass values from parent to child parent is home and child is bloglist */}
            {/* this is promps */}
            {blog && <BlogList blog = {blog} title = "all blogs"  handleDelete={handleDelete}/>}


            

        </div>

    );
}
 
export default Home;