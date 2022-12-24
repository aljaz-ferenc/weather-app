import React from 'react'
import './Search.css'

export default function Search({handleSubmitCity, handleInputCity}) {
    return (
        <div className='search'>
            <form className='search__form' onSubmit={handleSubmitCity}>
                <input spellCheck='false' placeholder='Search city...' className='search__input' onChange={handleInputCity} type="text" />
                <button type='submit' className='search__submit-btn'><img alt='search icon' src={require('../icons/search.png')}/></button>
            </form>
        </div>
    )
}
