import React from 'react';
import ResultBar from './ResultBar';
import PortfolioItem from './PortfolioItem';

const portfolio = ()=>{
    return(
      <div>
        <section className="bg-light page-section" id="portfolio">
            <div className="container-fluid">
                {/* <div className="row smallfont">
                <div className="col-lg-6 col-md-6 fw600 mt-1  mb-2">
                <span>Showing 222 Results</span>
                </div>
                <div className="col-lg-6 col-md-6 fw600 text-right mobalign">
                <span> Sort by:  &nbsp; </span>
                    <a href="javascript:void(0)" className="btn btn-primary">Latest</a><a href="javascript:void(0)" className="btn btn-lightoutline">Alphabetical</a>
                </div>
                <div className="col-lg-5 text-right float-right hideXS d-none">
                    View: <a href="javascript:void(0)"><img src="./assets/images/box_hover.png" className="ico_boxview active" alt=""/></a>
                    <a href="javascript:void(0)"><img src="./assets/images/list.png" className="ico_boxview" alt=""/> </a>
                </div>
                </div> */}
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