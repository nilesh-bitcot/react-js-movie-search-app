import React, {useState, useEffect} from 'react'

const Search = (props) => {
    const [searchValue, setSearchValue] = useState("");
  
    const handleSearchInputChanges = (e) => {
        setSearchValue(e.target.value);
    }

    const resetInputField = () => {
        setSearchValue("")
    }

    const callSearchFunction = () => {
        props.search(searchValue);
        resetInputField();
    }
    return(
        <>
        <div className='searchDiv'>
        <input
          style={{ borderWidth:1,padding:10, marginBottom:10}}
          value={searchValue}
          placeholder={'Search movie'}
          onChange={handleSearchInputChanges}
        />
        <button onClick={callSearchFunction}>Search</button>
        </div>
        </>
    )
}

export default Search