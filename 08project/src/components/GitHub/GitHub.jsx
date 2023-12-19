import React, {useEffect, useState} from 'react';

function GitHub(){
    const [data, setdata] = useState([]);
    useEffect(() => {
       const Api = fetch('https://api.github.com/users/govin07');
       Api .then(resp => resp.json());
       Api .then(data => console.log(data));
        setdata(data)
    }, [])
   
    
    return(
           <div className='text-center  m-4 bg-gray-600 text-white p-4 text-3xl '>Github followers: {data.id} </div>
    );
};

export default GitHub;