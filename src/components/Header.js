import React from 'react';
//import '../../public/assets/css/App.css';
// import '../../public/assets/css/App.css'
// import '../../public/assets/css/bootstrap.min.css';
// import '../../public/assets/css/select2.css';
import '../../public/assets/css/mystyle.css'

const Header = () => {
    return (
        <div>
        <header className="masthead">
            <div className="container-fluid">
                <div className="intro-text p30">
                    <div className="intro-heading">Talentera Design</div>
                    <div className="row box-shadow hideXS stickySearch">
                        <div className="col-xl-4 col-sm-4 nopadd">
                            
                            <input type="text" name="country" className="form-control custinput" placeholder="Search Customer..." />
                        </div>
                        <div className="col-xl-2 col-sm-2 nopadd">
                        {/* <a href="javascript:void(0)" data-toggle="modal" data-target="#exampleModal"> <i className="fa fa-search searchmobile" /></a> */}
                            <select className="custom-select d-block w-100 custinput" id="location" required title="asdf">
                                <option selected>Location</option>
                                <option>United States</option>
                                <option>United States4</option>
                                <option>United States3</option>
                                <option>United States2</option>
                            </select>
                        </div>
                        <div className="col-xl-3 col-sm-3 nopadd">
                            <select className="custom-select d-block w-100 custinput" id="industry" required title="asdf">
                                <option selected>Industry</option>
                                <option>United States</option>
                                <option>United States4</option>
                                <option>United States3</option>
                                <option>United States2</option>

                            </select>
                        </div>
                        <div className="col-xl-2 col-sm-2 nopadd">
                            <select className="custom-select d-block w-100 custinput" id="type" required title="asdf">
                                <option selected>Type</option>
                                <option>United States</option>
                                <option>United States4</option>
                                <option>United States3</option>
                                <option>United States2</option>
                            </select>
                        </div>
                        <div className="col-xl-1  col-sm-1 nopadd ">
                            <button className="btn btn-primary searchbtn w-100">Search</button>
                        </div></div>
                </div>
            </div>
        </header>



    </div>



    )
}
export default Header;