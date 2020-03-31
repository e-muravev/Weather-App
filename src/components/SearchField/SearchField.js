import React, {useState} from 'react'
import './searchfield.css' 

function SearchField({ search }) {
	
	const [searchValue, setSearchField] = useState("")

	const handleSearchInputChanges = (event) => {
		setSearchField(event.target.value)
	}

	const resetSearchField = () => {
		setSearchField("")
	}

	const callSearchFunction = (event) => {
		event.preventDefault();
		search(searchValue);
		resetSearchField();
	}

	return (
		<div>
			<form className="search">
        		<input
          			value={searchValue}
          			onChange={handleSearchInputChanges}
          			type="text"
          			placeholder="Find your location..."
        		/>
        		<button onClick={callSearchFunction} type="submit" value="search">SEARCH</button>
      		</form>
		</div>
	);
}

export default SearchField