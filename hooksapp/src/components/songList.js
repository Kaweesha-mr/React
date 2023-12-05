import React, {useState,useEffect} from 'react';
import { v1 as uuidv1 } from 'uuid';
import NewSongForm from './NewSongForm';


//!useState is used to store and manage data that can chanage over time

const SongList = () => {
   const [songs,setSongs] =  useState([
        {title: 'almost home', id: 1},
        {title: 'memory gospel', id: 2},
        {title: 'this wild darkness', id: 3}
    ]
    );

    const [age,setAge] = useState(20);

    const addSong = (title) => {
        setSongs([...songs, {title: title, id: uuidv1()}]);
    }

    //useEffect is used to run code when the component renders
    //callack function will run each time data changes


    //any data changes inside this component this use effect will run
    // !useEffect(()=> {
    // !    console.log('useEffect hook ran', songs);

    // !})

    //?when we want to update only once when data is changed do this
    //!when you put something inside [] it will run only once when that changes

    useEffect(()=> {
        console.log('useEffect hook ran', songs);

    },[age])



    return (  
        <div className="song-list">
            <ul>

                {songs.map(song => {
                    return (<li key={song.id}>{song.title}</li>)
                })}
            </ul>


            {/* this will give chance to use the addSong function in NewSongForm */}
           <NewSongForm addSong={addSong}/>
           <button onClick={() => setAge(age+1)}>Add 1 to age : {age} </button>

        </div>
    );
}
 
export default SongList;