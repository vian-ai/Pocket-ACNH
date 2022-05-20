import React from 'react';
import ImageCarousel from './ImageCarousel';

function Home() {
    return (
        <div className="home">
            <h1 className="title">Pocket AC</h1>
            <p className="para">View and collect animal crossing villagers!</p>
            <ImageCarousel />
        </div>
    )
}

export default Home;