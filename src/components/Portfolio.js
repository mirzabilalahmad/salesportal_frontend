import React, { Component } from 'react'
import ResultBar from './ResultBar';
import PortfolioItem from './PortfolioItem';
import EditDrawer from './EditDrawer';
import img from '../assets/images/portfolio/portfolio3.jpg';

export class Portfolio extends Component {
    state={

        customer:null
    }
    enableEditCustomer =(id)=>{
        //fetch customer detail given id
        this.setState({
            customer:{
                id:1,
                name:'Name',
                location:'location',
                industryType:'industry type',
                favourite:false,
                image: img,
            }
        })
        console.log('enableUpdate called..')

    }
    disableEditCustomer = ()=>{
        this.setState({
            customer:null
        })

    }
    
    render() {
        return (
            <div>
                <section className="bg-light page-section" id="portfolio">
                    <div className="container-fluid">

                        <ResultBar />
                        <div className="row mt-4">
                        <EditDrawer customer={this.state.customer} disableCustomer={this.disableEditCustomer}/>
                        <PortfolioItem editCustomer={this.enableEditCustomer}/>

                        </div>
                    </div>
                </section>
            
            </div>
        )
    }
}

export default Portfolio
