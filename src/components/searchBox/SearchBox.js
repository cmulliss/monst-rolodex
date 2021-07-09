import React from 'react'

import './SearchBox.css'

// props coming in include placeholder
const SearchBox = ({ placeholder, handleChange }) => {
	return (
		<div>
			<input className='search' type='search' placeholder={placeholder} onChange={handleChange} />
		</div>
	)
}

export default SearchBox

/*

why the handle change function, simply pass the parent's setState callback to child's onClick callback

the reason is, when there is onClick event occur in child component, we want to setState(render something different) in parent component

since child cannot setState parent component, so we need to pass down parent component setState for child to utilize it
*/
