import React, { Component } from 'react'

export class Footer extends Component {
    state={}
    render() {
        return (
            <footer className="footer">
            <div className="container">
            <div className="row align-items-center">
                <div className="col-md-12">
                <img src="./assets/images/footer-ico.png" width="30" alt=""/>
                <p className="mt-2">Talentera Sales Dashboard.</p>
                </div>
            </div>
            </div>
        </footer>
            
        )
    }
}

export default Footer
