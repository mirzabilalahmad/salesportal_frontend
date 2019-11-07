import React, { Component } from 'react'
import img from '../assets/images/portfolio/portfolio3.jpg';
import EditDrawer from './EditDrawer';
export class PortfolioItem extends Component {
    state={
        id:1,
        name:'Name',
        location:'location',
        industryType:'industry type',
        favourite:false,
        image: img,
        openDrawer:false
    }
    
    openEditDrawer(){
       
        this.setState({
            
            openDrawer: true
        })
        console.log('openEditDrawer called..',this.state.openDrawer);
    }
    render() {
        return (
            <div className="col-lg-4 col-sm-6 portfolio-item">
                <div className="dh-container light-boxshadow flexi-cont">
                    <div>
                        <img className="card-img" src={this.state.image} alt="" />
                    </div>
                    
                    <div className="dh-overlay">
                        <h5>{this.state.name}</h5>
                        <p>{this.state.industryType}</p>
                            <a href="javascript:void(0)" data-toggle="modal" data-target="#portfolioPopup" >
                            <i className="fa fa-search-plus circle_icon"></i></a>  &nbsp;
                            <a href="javascript:void(0)"><i className="fa fa-link circle_icon"></i></a> &nbsp;
                            <a href="javascript:void(0)" onClick={()=>this.props.editCustomer(this.state.id)}><i className="fa fa-pencil circle_icon"></i></a>
                    </div>
                    {/* hover data  */}
                </div>
                <div className="portfolio-caption light-boxshadow">
                    <h5 className="fw600">{this.state.name}
                <span className="float-right">   <i className="heart fa fa-heart-o"></i></span>
                    </h5>
                    <p className="text-muted mt-3 mb-0">
                        <img src="img/location.png" className="alignIco" alt="" />{this.state.location}
                <span className="float-right">
                            <img src="img/category.png" className="alignIco" alt="" /> &nbsp;{this.state.industryType}
                </span>
                    </p>
                </div>
               
            </div>

        )
    }
}

export default PortfolioItem
