import React, { Component } from 'react'
import ResultBar from './ResultBar';
import PortfolioItem from './PortfolioItem';

export class Portfolio extends Component {
    state={}
    render() {
        return (
            <div>
                <section className="bg-light page-section" id="portfolio">
                    <div className="container-fluid">

                        <ResultBar />
                        <div className="row mt-4">

                            <PortfolioItem />

                        </div>
                    </div>
                </section>

            </div>
        )
    }
}

export default Portfolio
