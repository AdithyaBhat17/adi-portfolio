import React,{Component} from 'react';
import './App.css';

class Contact extends Component{
    render(){
        return(
            <div className="contact" id="contact">
                <h3 className="aboutheader">Contact</h3>
                <div className="container">
                    <form className="form" action="https://formspree.io/adithyabhat17.ab@gmail.com" method="POST">
                        <div className="form-group">
                            <input type="text" name="name" className="form-control" placeholder="NAME" />
                        </div>
                        <div className="form-group">
                            <input type="email" name="_replyto" className="form-control" placeholder="EMAIL" />
                        </div>
                        <div className="form-group">
                            <textarea rows="5" name="message" className="form-control" placeholder="MESSAGE" />
                        </div>
                        <input type="submit" className="btnf" value="SUBMIT" />
                        <input type="text" name="_gotcha" className="gotcha"/>
                        <input type="hidden" name="_subject" value="Website contact" />
                        <input type="hidden" name="_next" value="https://adithyabhat.com" />
                    </form>
                </div>
            </div>
        )
    }
}

export default Contact;