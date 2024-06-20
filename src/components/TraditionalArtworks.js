import React from 'react';
import Carousel from './Carousel';
import DigitalArtwork from './DigitalArtwork';

const TraditionalArtworks = ({data}) => {
    const houseSketch = data[0]
    const skull = data[1]
    const oilHand = data[2]
    const spirit = data[3]
    const acrylicHand = data[4]
    const traditionalPaintings = data[5].traditionalPaintings
    const teddy = data[6]
    const toas = data[7]
    const traditionalPyrography = data[8].traditionalPyrography

    return (
        <section className="digitalArtworks">
          <DigitalArtwork data={houseSketch}/>      
          <DigitalArtwork data={skull}/>      
          <DigitalArtwork data={oilHand}/>      
          <DigitalArtwork data={spirit}/>      
          <DigitalArtwork data={acrylicHand}/> 

          <Carousel data={traditionalPaintings} id="traditionalPaintings" classDescription="descriptionConcepts"/>     
            
          <DigitalArtwork data={teddy}/> 
          <DigitalArtwork data={toas}/> 

          <Carousel data={traditionalPyrography} id="traditionalPyrography" classDescription="descriptionConcepts"/>     
        </section>

    );
};

export default TraditionalArtworks;