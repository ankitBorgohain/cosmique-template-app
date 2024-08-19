import React from 'react';
import PoojaCard from '../../components/PoojaCard/PoojaCard';
import apiPoojaData from '../../poojaServer';
import './poojaList.css';

function PoojaList() {
  
  return (
    <div>
    <h1 className='poojaHeader'>Pooja list</h1>
    <div className="pooja-list">
            {apiPoojaData.map(pooja => (
                <PoojaCard
                    key={pooja.id}
                    title={pooja.title}
                    imgSrc={pooja.imgSrc}
                    // description={pooja.description}
                    occassion={pooja.occassion}
                    location={pooja.location}
                    // transport={pooja.transport}
                />
            ))}
        </div>
    
    </div>
  )
}

export default PoojaList;