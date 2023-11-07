import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const[name,setName]=useState("Ghimire");
    const[ispending,setispending]=useState(true);
    const[error,setError]=useState(null);
    const handleDelete=(id)=>{
    const newBlogs=blogs.filter(blog=>blog.id !== id)
    setBlogs(newBlogs);
    }
    useEffect(() => {
      setTimeout(()=>{
        fetch(' http://localhost:8000/blogss')
      .then(res=>{
        console.log(res);
        if(!res.ok)
        {
          throw Error("could not fetch data for that resources");
        }
        return res.json();
      })
      .then(data=>{
        setBlogs(data);
        setispending(false);
      })
      .catch(err=>{
        setError(err.message);
      })
      },1000)
    },[]); 
  
    return (
      <>
        <div className="home">
          {
            error && <div>{error}</div>  
          }
          {ispending && 
          <div>
            loading...
          </div>
          }
          {blogs && <BlogList blogs={blogs}
          handleDelete={handleDelete}/> }
          <button onClick={()=>{
            setName("Sharma");
          }}>changeName</button>
          <p>{name}</p>
        </div>
      </>
    );
  };
  
export default Home;
