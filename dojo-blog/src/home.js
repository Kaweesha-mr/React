//this is use staate hook
import { useState } from "react";
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


            {blog.map((blog) => (

                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>written by {blog.author}</p>

                </div>
            ))}


        </div>

    );
}
 
export default Home;