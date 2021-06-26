import React from 'react'

const CharacterItem = ({item}) => {
    return (
        <div className='card'>
            <div className='card-inner'>
                <div className='card-front'>
                    <img src={item.img_url} alt="..." />
                </div>
                <div className='card-back'>
                    <h1>{item.name}</h1>
                    <ul>
                        <li><strong>Character Name: </strong>{item.name}</li>
                        <li><strong>Gender: </strong>{item.gender}</li>
                        <li><strong>Species: </strong>{item.species}</li>
                        <li><strong>Origin: </strong>{item.origin}</li>
                        <li><strong>Status: </strong>{item.status}</li>
                        <li><strong>Ability: </strong>{item.abilities[1]}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CharacterItem
