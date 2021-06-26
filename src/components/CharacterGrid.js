import React from 'react'
import CharacterItem from './CharacterItem'
import Spinner from './Spinner'

const CharacterGrid = ({items, isLoadding}) => {
    return (
        <>
            {
                isLoadding?(<Spinner/>):(
                    <section className='cards'>
                        {
                            items.map(item=>(<CharacterItem key={items.id} item={item}></CharacterItem>))
                        }
                    </section>
                )
            }  
        </>
    )
}

export default CharacterGrid



