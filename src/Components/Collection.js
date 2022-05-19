import React from 'react';

function Collection (props) {
    const collectedItems = props.starred.map((villager, index) => {
        return (
            <div>
                <p>Placeholder: {villager[0].name}</p>
            </div>
        )
    });

    return (
        <div>
            <h1>AC Collection</h1>
            <div style={{ display: 'flex' }}>{collectedItems}</div>
        </div>
    )
}

export default Collection;