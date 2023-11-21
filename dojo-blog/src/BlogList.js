const BlogList = (props) => {

    const blog = props.blog;

    return (  
        blog.map((blog) => (
            <div className="blog-preview" key={blog.id}>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
            </div>
            ))
    );
}
 
export default BlogList;