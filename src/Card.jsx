import React from 'react'
import './card.css'

function Card({ card, handleChoice, flipped, disabled }) {

    const handleClick = () => {
        if(!disabled){
        handleChoice(card)
        }

    }


    return (
        <div className="card" key={card.id}>

            <div className={flipped ? 'flipped' : ""}>
                <img src={card.src} className='front' alt="card front" />
                <img
                    src="/img/cover.jpg"
                    className='back'
                    onClick={handleClick}
                    alt="card back" />
            </div>

        </div>
    )
}

export default Card