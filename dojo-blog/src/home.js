//this is use staate hook
import { useState,useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {

    const { data, pending, error } = useFetch('http://localhost:8000/blogs');



    //when dependancy used it wont run each time
    //only when name changed it will run


    return (  
        <div className="home">
            { error && <div>{error}</div>}
            {pending && <div>Loading...</div>}

            {/* this can pass values from parent to child parent is home and child is bloglist */}
            {/* this is promps */}
            {data && <BlogList blogs = {data} title = "all blogs" />}


            

        </div>

    );
}
 
export default Home;