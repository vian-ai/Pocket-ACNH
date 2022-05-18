import { useState } from 'react';

const key = '';

function Browse() {

    const [searchVillager, setSearchVillager] = useState('');

    const updateSearchTerm = (event) => {
        setSearchVillager(event.target.value);
    }

    const handleSubmit = (event) => {

        event.preventDefault()
        
        fetch(`https://api.nookipedia.com/villagers?name=${searchVillager}`, {
            headers: {
                'X-API-KEY': key
            }
        })
            .then(res => res.json())
            .then(data => {
                setSearchVillager('')
                console.log(data);
            })
            .catch(() => console.log('Error'))
    }

    return (
        <div>
            <h1>AC Library</h1>
            <form onSubmit={handleSubmit}>
                <input onChange={updateSearchTerm} value={searchVillager} type="text" placeholder="Search for villagers!" />
                <input type="submit" value="Search" />
            </form>
        </div>
    )
}

export default Browse;