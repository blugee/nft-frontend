import React from 'react'

const Searchpopup = () => {
    return (
        <>
            <div className="search-popup">
                <button className="close-search style-two"><i className="fas fa-times"></i></button>
                <button className="close-search"><i className="fas fa-arrow-up"></i></button>
                <form method="post" action="#">
                    <div className="form-group">
                        <input type="search" name="search-field" value="" placeholder="Search Here" required="" />
                        <button type="submit"><i className="fas fa-search"></i></button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Searchpopup