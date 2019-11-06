import React, { Component } from 'react'
export class PortfolioItem extends Component {
    state={}
    render() {
        return (
            <div className="col-lg-4 col-sm-6 portfolio-item">
                <div className="dh-container light-boxshadow flexi-cont">
                    <div>
                        <img className="card-img" src="./assets/images/portfolio/portfolio3.jpg" alt="" />
                    </div>
                    
                    <div className="dh-overlay">
                        <h5>SPSP</h5>
                        <p>Employment Placement Agencies/Recruiting</p>
                            <a href="javascript:void(0)" data-toggle="modal" data-target="#portfolioPopup" >
                            <i className="fa fa-search-plus circle_icon"></i></a>  &nbsp;
                            <a href="javascript:void(0)"><i className="fa fa-link circle_icon"></i></a> &nbsp;
                            <a href="javascript:void(0)"><i className="fa fa-pencil circle_icon"></i></a>
                    </div>
                    {/* hover data  */}
                </div>
                <div className="portfolio-caption light-boxshadow">
                    <h5 className="fw600">SPSP
                <span className="float-right">   <i className="heart fa fa-heart-o"></i></span>
                    </h5>
                    <p className="text-muted mt-3 mb-0">
                        <img src="img/location.png" className="alignIco" alt="" />Saudia Arabia
                <span className="float-right">
                            <img src="img/category.png" className="alignIco" alt="" /> &nbsp;Oil/Gas
                </span>
                    </p>
                </div>
            </div>
        )
    }
}

export default PortfolioItem
