import React from 'react';
import cafe from '../assets/cafe.png';
import axios from "axios"
import classNames from "classnames"

class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email:"",
            submitted: false
        }
    }
    submitEmail =()=>{

        axios.post('https://adjoined-landing.firebaseio.com/email.json', {
            email: this.state.email
          })
          .then(response=>{
            console.log(response);
            this.setState({submitted : true})
          })
          .catch(error=>{
            console.log(error);
          });
    }
    render(){
        return (
          <div className="home">
              <div className="introduction">
                  <h3>Virtual coworking space for your community</h3>
                  <p>Working remotely can feel isolating at times. Adjoined creates a shared space for people to work together and stay connected.</p>
                  <form action="">
                      <div className="formgroup">
                          <input type="text" placeholder="Enter email address" value={this.state.email} onChange={(e)=>{this.setState({email:e.target.value})}}/>
                          <button className={classNames({"submit":true, "submitted":this.state.submitted})} disabled={this.state.email === ""} onClick={(e)=>{e.preventDefault();this.submitEmail()}}>{this.state.submitted ? "Thank you!" : "Get Early Access"}</button>
                      </div>
                  </form>
              </div>
              <div className="demonstration">
                <div className="subtext">
                    <div className="line"></div>
                    <div className="text">Snapshot of the Adjoined team cafe</div>
                </div>
                <img src={cafe} alt="cafe"/>
              </div>
          </div>
        );

    }
}

export default Home;
