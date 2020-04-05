import React, {useState} from 'react'
import './searchfield.css' 

function SearchField({ search }) {
	
	const [searchValue, setSearchField] = useState("")
	const [errorInput, setErrorInput] = useState(false)
	const [errorPlaceholder, setErrorPlaceholder] = useState('Find your location...')

	const handleSearchInputChanges = (event) => {
		setSearchField(event.target.value)
	}

	const resetSearchField = () => {
		setSearchField("")
	}

	const callSearchFunction = (event) => {
		event.preventDefault();
		if (searchValue)
		{
			search(searchValue);
			resetSearchField();
			setErrorInput(false)
			setErrorPlaceholder('Find your location...')
		}
		else
		{
			setErrorInput(true)
			setErrorPlaceholder('Fill the field...')
		}
	}

	return (
		<div>
			<form className="search" style={errorInput ? {border: '3px solid red'} : null}>
        		<input
          			value={searchValue}
          			onChange={handleSearchInputChanges}
          			type="text"
          			placeholder={errorPlaceholder}
        		/>
        		<button onClick={callSearchFunction} type="submit" value="search">SEARCH</button>
      		</form>
		</div>
	);
}

export default SearchField