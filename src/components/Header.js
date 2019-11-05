import React from 'react';
import SearchBar from './SearchBar';
import '../../public/assets/css/mystyle.css'

const Header = () => {
    return (
        <div>
        <header className="masthead">
            <div className="container-fluid">
                <div className="intro-text p30">
                    <div className="intro-heading">Talentera Design</div>
                    <SearchBar/>               
                </div>
            </div>
        </header>



    </div>



    )
}
export default Header;