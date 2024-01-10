import React from "react";
import "./LoginDesign.css"


export default class Login extends React.Component{
    navigate=(url)=>{
    window.location.href = url
    }   
    loginGoogleAuth = async() => {
        try {
        //   const response = await fetch('https//localhost:8080/api/data');
        const response = await fetch('http://localhost:8080/auth/google/login',
        {method:'post'});
        const data = await response.json();
        this.navigate(data.url)
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

    render(){
        return(
            <div>
                {/* <button onClick={this.loginGoogleAuth}>Sign in with google</button> */}
                <div className="card">
            <div className="container">
                <h1>
                Login
                </h1>
                <div>
                <div className="formDesign">
                    <div className="leftDivision">
                    <div>
                    <label for="name">User Name</label>
                        <input className="inputDesign" type="input"  placeholder="User Name" name="name" />
                        
                        </div>
                    </div>
                    <div className="rightDivision">
                    <div >
                        <label for="name" >Password</label>
                        <input className="inputDesign"  type="input"  placeholder="Password" name="name" />     
                        </div>
                    </div>
                </div>
                
                <div>
                    <button className="buttonDesign">Login</button>
                </div>
            </div>             
            <div className="googleButton">
                <button className="buttonSignupDesign" type="button" onClick={this.loginGoogleAuth}>Login With Google</button>
            </div>
        </div>
        </div>
            </div>
        )
    };
}