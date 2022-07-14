const SearchBar = () => {
    return (
        <div className='searchBar'>
            <form>
                <input type="text" placeholder="Search.." name="search" />
                    <button className="searchBar-icon" type="submit"><i class="gg-search"></i></button>
            </form>
        </div>
    );
}

export default SearchBar;