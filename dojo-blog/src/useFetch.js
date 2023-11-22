
//import the usestate and useEffect hooks to use in this file
import { useState,useEffect } from "react";

//!custom hooks in react need to starts with use key word insted it won't work
//pass url as a parameter to this function so this could be used for any url

const useFetch = (url) => {

    const [data,setData] = useState(null);
    //use to show loading msg until data is fetched
    const [isPending,setIsPending] = useState(true);
    const [error,setError]  = useState(null);
    
    useEffect(() => {

        //abort the fetch data at a certain point
        const abortCont = new AbortController();

        //this is a end point
        //this is like a get request


        //!assciate it with each fetch request
        fetch(url,{ signal: abortCont.signal })

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
            //!data inside this function and outside this function is different
            //!this will represent local variable inside this function
            setData(data)
            //this will stop the loading
            setIsPending(false);
            setError(null);
        })
        .catch(err =>{



            //this will pause the error and loading msg when we go to another page
            if(err.name === 'AbortError'){
                console.log('fetch aborted');
            }
            else{
                setIsPending(false);
                setError(err.message);

            }


        })


        //use to clean up the fetch
        return () => abortCont.abort();
    }, [url]);


    //after this hook is used in future we need to get the values of these variables 
    //so we need to return them
return {data,isPending,error};

}
export default useFetch;