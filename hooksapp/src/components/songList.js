import React, {useState} from 'react';
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

    const addSong = (title) => {
        setSongs([...songs, {title: title, id: uuidv1()}]);
    }
    return (  
        <div className="song-list">
            <ul>

                {songs.map(song => {
                    return (<li key={song.id}>{song.title}</li>)
                })}
            </ul>


            {/* this will give chance to use the addSong function in NewSongForm */}
           <NewSongForm addSong={addSong}/>

        </div>
    );
}
 
export default SongList;