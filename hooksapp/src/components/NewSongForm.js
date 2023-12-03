import React, {useState} from 'react';


//you have to catch the passed proped in here
const NewSongForm = ({addSong}) => {

    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        //stop refereshing the page
        e.preventDefault();

        //2. then you can use it in anywhere
        addSong(title);
        setTitle('');
        
    }



    return (

        <form action="" onSubmit={ handleSubmit }>
            <label htmlFor="">Song Name</label>
            <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type="submit" value="add song" />
        </form>
    );
}

export default NewSongForm;