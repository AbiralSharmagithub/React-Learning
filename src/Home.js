import { useState } from "react";
import BlogList from "./BlogList";
// const Home = () => {
//     const[name,setName]=useState("Avash")
//     const[age,setAge]=useState(20)
//      const Clicked=()=>{
//       setName("Aashish");
//       setAge(30);
//      } 
    // const clickedmeAgain=(oe,e)=>{
    //     console.log("Hello",oe,e.target);
    // }

    // return ( 
    // <>
    //  <h1>This is the homepage</h1>
    //   <p>My name is {name}.I m {age} years old</p>
    //   <button style={{
    //    padding:"10px",
    //    cursor: "pointer",
    //    background:"blue",
    //    color: "white",
    //    }}
    //    onClick={Clicked}
    //    >Click-Homepage
    //   </button>
      /* <button style={{
       padding:"10px",
       cursor: "pointer",
       background:"blue",
       color: "white",
       }}
       onClick={(e)=>{
        clickedmeAgain("Boss",e);
       }}
       >ClickmeAgain</button> */
//     </> );
// }
//  const Home = ()=>{
//  useState[blogs,setBlogs]=useState([
//  {title:"My Website",body:"lorem ipsum...",author:"Karki",id:1},
//  {title:"Your Website",body:"lorem ipsum...",author:"Ghimire",id:2},
//  {title:"Our Website",body:"lorem ipsum...",author:"Chaulagain",id:3}
//  ]);
//   return(
//       <>
//         <div className="home">
//          {blogs.map((blog)=>{
//            return(
//            <div className="blog-preview" key={blog.id}>
//               <h2>{blog.title}</h2>
//               <p>Written by {blog.author}</p>
//             </div>
//             )})}
//         </div>
//       </>
//     );
//   };
const Home = () => {
    const [blogs, setBlogs] = useState([
      { title: "My Website", body: "lorem ipsum...", author: "Karki", id: 1 },
      { title: "Your Website", body: "lorem ipsum...", author: "Ghimire", id: 2 },
      { title: "Our Website", body: "lorem ipsum...", author: "Chaulagain", id: 3 }
    ]);
  
    return (
      <>
        <div className="home">
          <BlogList blogs={blogs}/>
        </div>
      </>
    );
  };
  
export default Home;
