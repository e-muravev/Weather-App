import React, {useState} from 'react'
import './searchfield.css' 
import geometka from './geometka.png'

function SearchField({ search }) {
	
	const [searchValue, setSearchField] = useState("")
	const [errorInput, setErrorInput] = useState(false)
	const [errorPlaceholder, setErrorPlaceholder] = useState('Find your location...')
	const [autocomplete, setAutocomplete] = useState([])

	const searchInput = React.createRef();
	
	const handleSearchInputChanges = (event) => {
		let value = event.target.value;
		setSearchField(value)
		if(value.length >=3)
		{
			fetch(`https://api.weatherapi.com/v1/search.json?key=44f9ba0e2fa544569ce113811201303&q=${value}`)
			.then(response => response.json())
			.then(data => {
				console.log(data)
				setAutocomplete(data)
			})
		}
		else 
		{
			setAutocomplete([])
		}
	}

	const resetSearchField = () => {
		setSearchField("")
	}

	const getAutocompleteData = (region) => {
		(window.outerWidth > 576) ? setSearchField(region) : setSearchField(`${region.slice(0, 22)}...`)
		setAutocomplete([])
		searchInput.current.focus()
	}

	const callSearchFunction = (event) => {
		event.preventDefault();
		if (searchValue)
		{
			search(searchValue);
			resetSearchField();
			setErrorInput(false)
			setErrorPlaceholder('Find your location...')
			setAutocomplete([])
		}
		else
		{
			setErrorInput(true)
			setErrorPlaceholder('Fill the field...')
		}
	}

	return (
		<div style={{position: 'relative'}}>
			<form className="search" style={errorInput ? {border: '3px solid red'} : null}>
        		<input
          			value={searchValue}
          			onChange={handleSearchInputChanges}
          			type="text"
          			placeholder={errorPlaceholder}
          			ref={searchInput}
        		/>
        		<button onClick={callSearchFunction} type="submit" value="search">SEARCH</button>
      		</form>
      		<div className="autocomplete">
      			{autocomplete ? autocomplete.map(region => {
      				return (
      					<div key={region.id} className="geo">
      						<img style={{marginRight: '5px'}} src={geometka} alt='geometka' width='20px' height='25px'/>
      						<p onClick={() => getAutocompleteData(region.name)}>{region.name}</p>
      					</div>
      				); 
      			}) : null}
      		</div>
		</div>
	);
}

export default SearchField