import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setData] = useState('');
    const [author, setAuthor] = useState('mario');
    const history = useHistory();

    const handleSubmit = (e) =>{
        //prevent windows from refresh when submit button clicked
        e.preventDefault();
        //create a object and add the details needed to be submit 
        const blog = {title,body,author};
        console.log(blog);


        fetch('http://localhost:8000/blogs',{
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added');   
            history.push('/'); 
    })
    }
    return ( 
        <div className="create">

            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Blog Title</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label htmlFor="">Blog body</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setData(e.target.value)}
                />
                <label htmlFor="">Blog Author</label>
                <select name="" id="" 
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                </select>

                <button>Add Blog</button>

                <h1> { title } </h1>
                <h3>{author}</h3>
                <p>{body}</p>

            </form>


        </div>
     );
}
 
export default Create
;