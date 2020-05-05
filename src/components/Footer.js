import React, {Component} from 'react';
import './Footer.css'



class Footer extends Component{
    constructor(){
        super()
        this.state={

        }
    }
    render(){
        return(
            <div>
                <div className="background">
                    <div className="footerdisplay">
                        <div>
                            <h3>Become an instructor</h3>
                            <p className="footerpara">Top instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love.</p>
                            <button className="btne">Start teaching today</button>
                        </div>
                        <div className="borderfooter"></div>
                        <div className="borderline">
                            <h3>Udemy for Children</h3>
                            <p className="footerpara">Get unlimited access to 4,000+ of Udemy’s top courses for your team.</p>
                            <button className="btne">Udemy for children</button>
                        </div>
                    </div>
                </div>
                <div className="footerflex">
                    <div>
                        <h5 className="fotpara">Udemy for Children</h5>
                        <h5 className="fotpara" >Teach on Udemy</h5>
                        <p className="fotpara">Udemy app</p>
                        <p className="fotpara">About us</p>
                    </div>

                    <div>
                        <p className="fotpara">Careers</p>
                        <p className="fotpara">Blog</p>
                        <p className="fotpara">Help and Support</p>
                        <p className="fotpara">Affiliate</p>
                    </div>

                    <div>
                        <p className="fotpara">Sitemap</p>
                        <p className="fotpara">Featured courses</p>
                    </div>
                    <div>
                        <button className="gray">English</button>
                    </div>
                </div>
                <div className="footerlast">
                    <div>
                        <h3 className="udemy">Udemy For Children</h3>
                        <p className="fotpara"> Copyright © 2020 Udemy, Inc.</p>
                    </div>
                    <div>
                        <p className="fotpara">Terms Privacy Policy and Cookie Policy</p>
                    </div>

                </div>
            </div>
        )
    }
}

export default Footer