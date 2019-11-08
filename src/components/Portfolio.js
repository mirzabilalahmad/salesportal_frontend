import React, { Component } from 'react'
import ResultBar from './ResultBar';
import PortfolioItem from './PortfolioItem';
import EditDrawer from './EditDrawer';
import img from '../assets/images/portfolio/portfolio3.jpg';

export class Portfolio extends Component {
    state={
        customers: [{
            id:1,
            name:'Name',
            location:'location',
            industryType:'industry type',
            favourite:false,
            image: img,
        }],
        updateCustomerId: null
    }
    enableEditCustomer =(id)=>{
        //fetch customer detail given id
        this.setState({
            updateCustomerId: id
        })
        console.log('enableUpdate called..')

    }
    disableEditCustomer = ()=>{
        this.setState({
            updateCustomerId:null
        })

    }

    renderCustomers = () => {
        if(this.state.customers.length == 0){
            return (
                <h4> No Customer found</h4>
            )
        } 
        return this.state.customers.map((customer) => {
            return <PortfolioItem data={customer} editCustomer={this.enableEditCustomer}/>
        })
    }
    
    render() {
        return (
            <div>
                <section className="bg-light page-section" id="portfolio">
                    <div className="container-fluid">

                        <ResultBar />
                        <div className="row mt-4">
                        <EditDrawer customerId={this.state.updateCustomerId} disableCustomer={this.disableEditCustomer}/>
                        {this.renderCustomers()}

                        </div>
                    </div>
                </section>
            
            </div>
        )
    }
}

export default Portfolio
