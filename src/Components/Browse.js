import React from 'react';

function Browse () {
    return (
        <div>
            <h1>AC Library</h1>
            <form>
                <input type="search" id="query" placeholder="Search for villagers!"/>
                <input type="submit" value="Search"/>
            </form>
        </div>
    )
}

export default Browse;