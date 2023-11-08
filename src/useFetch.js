import { useState,useEffect } from "react";
const useFetch=(url)=>{
    const [data, setData] = useState(null);
    const[ispending,setispending]=useState(true);
    const[error,setError]=useState(null);

    useEffect(() => {
        setTimeout(()=>{
          fetch(url)
        .then(res=>{
          console.log(res);
          if(!res.ok)
          {
            throw Error("could not fetch data for that resources");
          }
          return res.json();
        })
        .then(data=>{
          setData(data);
          setispending(false);
        })
        .catch(err=>{
          setError(err.message);
        })
        },1000)
      },[url]); 
      return {data,ispending,error}
}
export default useFetch;