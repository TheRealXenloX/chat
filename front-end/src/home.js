import React, {useEffect, useState} from 'react';


function Home() {
    const [keys, setKeys] = useState('')

    const getLocalStorage = () => {
        setKeys(sessionStorage.getItem('access'));
    }

    useEffect(() => {
        getLocalStorage()
    })
    return (
        <div>
            <h1>yoman</h1>
            <p>{keys}</p>
        </div>
    );
}


export default Home;