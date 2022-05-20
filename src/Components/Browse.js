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
                    setVillager(data);
                    setErrorMessage('');
                }
            })
            .catch(() => setErrorMessage('Not found.'));
    }

    const ordinal_suffix = (i) => {
        let j = i % 10,
            k = i % 100;
        if (j == 1 && k != 11) {
            return i + "st";
        }
        if (j == 2 && k != 12) {
            return i + "nd";
        }
        if (j == 3 && k != 13) {
            return i + "rd";
        }
        return i + "th";
    }

    let displayVillager = '';
    if (villager !== null) {
        displayVillager = (
            <div className="card">
                <div className="container">
                    <img src={villager[0].image_url} alt={villager[0].name} width="100" />
                    <p className="villagerName">{villager[0].name}</p>
                    <p>Personality: {villager[0].personality}</p>
                    <p>Birthday: {villager[0].birthday_month} {ordinal_suffix(villager[0].birthday_day)}</p>
                    <p>Zodiac Sign: {villager[0].sign}</p>
                </div>
                <button className="favBtn" type="button" onClick={() => props.addToStarredList(villager)}>Add to Favorite</button>
            </div>
        )
    }

    return (
        <div>
            <div className="searchEngine">
                <h1 className="title">AC Library</h1>
                <form className="searchBar" onSubmit={handleSubmit}>
                    <input onChange={updateSearchTerm} value={searchVillager} type="text" placeholder="Search for villagers!" />
                    <input type="submit" value="Search" />
                </form>
            </div>
            <div>
                {displayVillager}
            </div>
        </div>
    )
}

export default Browse;