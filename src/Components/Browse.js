import { useEffect, useState } from 'react';

const key = '6e4ba353-a4fa-4797-8d15-78371d6c282b';

function Browse() {

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

                if (data.Error) {
                    setErrorMessage(data.Error);
                    setVillager(null);
                } else {
                    console.log(data);
                    setVillager(data);
                    setErrorMessage('');
                }
            })
            .catch(() => setErrorMessage('Not found.'));
            // .then(res => res.json())
            // .then(data => console.log(data))
            // .then(data => {
            //     setSearchVillager('')
            //     setVillager(data)
            // })
            // .catch(() => console.log('error'))
    }

    let displayVillager = '';
    if (villager !== null) {
        displayVillager = (
            <div>
                <h4>Villager Name: {villager[0].name}</h4>
                <h4>Gender: {villager[0].gender}</h4>
                <h4>Species: {villager[0].species}</h4>
                <h4>Personality: {villager[0].personality}</h4>
                <h4>Zodiac Sign: {villager[0].sign}</h4>
                <h4>Birthday: {villager[0].birthday_month} {villager[0].birthday_day}</h4>
                <h4>Phrase: {villager[0].phrase}</h4>
                <h4>Quote: {villager[0].quote}</h4>
                <img src={villager[0].image_url} alt={villager[0].name}/>
            </div>
        )
    }

    return (
        <div className="App">
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