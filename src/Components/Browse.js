import { useState } from 'react';

const key = '6e4ba353-a4fa-4797-8d15-78371d6c282b';

function Browse(props) {

    const [searchVillager, setSearchVillager] = useState([]);
    const [villager, setVillager] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

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
            .then((data) => {
                setSearchVillager('');

                if (data.error) {
                    setErrorMessage('');
                    setVillager(null);
                } else {
                    console.log(data);
                    setVillager(data);
                    setErrorMessage('');
                }
            })
            .catch(() => setErrorMessage('Not found.'));
    }

    let displayVillager = '';
    if (villager !== null) {
        displayVillager = (
            <div>
                <p>Villager: {villager[0].name}</p>
                <p>Personality: {villager[0].personality}</p>
                <p>Birthday: {villager[0].birthday_month}/{villager[0].birthday_day}</p>
                <p>Zodiac Sign: {villager[0].sign}</p>
                <p>Quote: {villager[0].quote}</p>
                <img src={villager[0].image_url} alt={villager[0].name} width="100" />
                <button onClick={() => props.addToStarredList(villager)}>Add to Favorite</button>
            </div>
        )
    }

    return (
        <div>
            <h1>AC Library</h1>
            <form onSubmit={handleSubmit}>
                <input onChange={updateSearchTerm} value={searchVillager} type="text" placeholder="Search for villagers!" />
                <input type="submit" value="Search" />
            </form>
            <div>
                {displayVillager}
            </div>
        </div>
    )
}

export default Browse;