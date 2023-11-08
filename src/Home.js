import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {
    const{data,ispending,error}=useFetch(' http://localhost:8000/blogss');

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
          { data && <BlogList blogs={data}/> }
        </div>
      </>
    );
  };
  
export default Home;
