const Bar = () => {
    return (
        <div className='bar'>
            <div className="bar-search">
                <form>
                    <input type="text" placeholder="Search.." name="search" />
                    <button className="bar-search-icon" type="submit"><i className="gg-search"></i></button>
                </form>
            </div>
            <div style={{ float: 'right' }} className="bar-layoutIcons">
                <article className="bar-layoutIcons-base">
                    
                    <div className="bar-layoutIcons-base-row">
                        <span className="bar-layoutIcons-base-row-element"></span>
                        <span className="bar-layoutIcons-base-row-element"></span>
                        <span className="bar-layoutIcons-base-row-element"></span>
                    </div>

                    <div className="bar-layoutIcons-base-row">
                        <span className="bar-layoutIcons-base-row-element"></span>
                        <span className="bar-layoutIcons-base-row-element"></span>
                        <span className="bar-layoutIcons-base-row-element"></span>
                    </div>

                    <div className="bar-layoutIcons-base-row">
                        <span className="bar-layoutIcons-base-row-element"></span>
                        <span className="bar-layoutIcons-base-row-element"></span>
                        <span className="bar-layoutIcons-base-row-element"></span>
                    </div>

                </article>
            </div>
        </div>
    );
}

export default Bar;