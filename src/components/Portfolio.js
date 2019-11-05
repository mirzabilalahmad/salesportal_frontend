import React from 'react';
import ResultBar from './ResultBar';
import PortfolioItem from './PortfolioItem';

const portfolio = ()=>{
    return(
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
export default portfolio;