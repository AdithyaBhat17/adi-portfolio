import React,{Component} from 'react';
import './App.css';
import baps from './bapspatil.png';
import rnsit from './rnsit.png';
import aikya from './aikya.png';
import wallart from './wallart.png';
import dugout from './dugout.png';
import yelpcamp from './yelpcamp.png';
import mountain from './mountain.png';
import shutter from './shutterup.png';


class Portfolio extends Component{
    render(){
        return(
            <div className="portfolio" id="portfolio">
                <h3 className="aboutheader wow fadeIn">My work</h3>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-12 col-xs-12 wow fadeInUp">
                            <div className="thumbnail">
                                <img className="workimg" src={baps} alt="Bapspatil"/>
                                <h5 className="workh">bapusaheb patil</h5>
                                <p className="workp">A portfolio made with React.js</p>
                                <a target="_blank" rel="noopener noreferrer" href="https://adithyabhat.com/test/#/test/" className="workbtn">view here</a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-12 col-xs-12 wow fadeInUp">
                            <div className="thumbnail">
                                <img className="workimg" src={rnsit} alt="RNSIT"/>
                                <h5 className="workh">RNSIT</h5>
                                <p className="workp">A progressive web-app for RNSIT</p>
                                <a target="_blank" rel="noopener noreferrer" href="https://rnsit.ac.in" className="workbtn">view here</a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-12 col-xs-12 wow fadeInUp">
                            <div className="thumbnail">
                                <img className="workimg" src={aikya} alt="AIKYA"/>
                                <h5 className="workh">AIKYA</h5>
                                <p className="workp">A web-app for Aikya,RNSIT</p>
                                <a target="_blank" rel="noopener noreferrer" href="https://rnsaikya.herokuapp.com/" className="workbtn">view here</a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-12 col-xs-12 wow fadeInUp">
                            <div className="thumbnail">
                                <img className="workimg" src={wallart} alt="WALLART"/>
                                <h5 className="workh">Wall-art</h5>
                                <p className="workp">A 4k/ultrawide wallpaper app</p>
                                <a target="_blank" rel="noopener noreferrer" href="https://wallart.herokuapp.com/" className="workbtn">view here</a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-12 col-xs-12 wow fadeInUp">
                            <div className="thumbnail">
                                <img className="workimg" src={dugout} alt="Dugout"/>
                                <h5 className="workh">the dugout</h5>
                                <p className="workp">A football blog made with Node.js</p>
                                <a target="_blank" rel="noopener noreferrer" href="https://thedugout.herokuapp.com/" className="workbtn">view here</a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-12 col-xs-12 wow fadeInUp">
                            <div className="thumbnail">
                                <img className="workimg" src={yelpcamp} alt="Yelpcamp"/>
                                <h5 className="workh">Yelpcamp</h5>
                                <p className="workp">Host your campgrounds on Yelpcamp!</p>
                                <a target="_blank" rel="noopener noreferrer" href="http://yelpcamp2k18.herokuapp.com" className="workbtn">view here</a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-12 col-xs-12 wow fadeInUp">
                            <div className="thumbnail">
                                <img className="workimg" src={mountain} alt="Mountain Travel"/>
                                <h5 className="workh">mountain travel</h5>
                                <p className="workp">A startup template made with flexbox</p>
                                <a target="_blank" rel="noopener noreferrer" href="https://adithyabhat.com/mountaintravel" className="workbtn">view here</a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-12 col-xs-12 wow fadeInUp">
                            <div className="thumbnail">
                                <img className="workimg" src={shutter} alt="Shutter Up"/>
                                <h5 className="workh">Shutter Up</h5>
                                <p className="workp">A simple image gallery</p>
                                <a target="_blank" rel="noopener noreferrer" href="https://adithyabhat.com/image-gallery/" className="workbtn">view here</a>
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Portfolio;