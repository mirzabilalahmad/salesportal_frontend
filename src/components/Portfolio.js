import React, { Component } from 'react'
import ResultBar from './ResultBar';
import PortfolioItem from './PortfolioItem';
import EditDrawer from './EditDrawer';
import img from '../assets/images/portfolio/portfolio3.jpg';

export class Portfolio extends Component {
    state={
        customers: [],
        updateCustomerId: null,
        error:null,
        isLoaded:false
    }

    componentDidMount() {
        fetch("http://salesportal1.local/api/customers")
          .then(res => res.json())
          .then(
              
            (result) => {
                console.log('result: ',result)
              this.setState({
                isLoaded:true,
                customers: result
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                console.log('error',error)
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
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
        {console.log('render called')}
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
