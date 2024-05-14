import React, { Component } from "react";
import './Login.css';

class Login extends React.Component {
    render() {
        return(
            <div class="container">
                <div class="login-grid">
                    <div class="login-text">
                        <h2>Login</h2>
                    </div>
                    <div class="login-text">
                        Are you a new member? <span><a href="../Sign_Up/Sign_Up.html" style="color: #2190FF;"> Sign Up Here</a></span>
                    </div>
                    <br />
                    <div class="login-form">
                        <form>
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="email" name="email" id="email" class="form-control" placeholder="Enter your email" aria-describedby="helpId" />
                            </div>
                            <div class="form-group">
                                <label for="password" >Password</label>
                                <input
                                type="password"
                                name="password"
                                id="password"
                                class="form-control"
                                placeholder="Enter your password"
                                aria-describedby="helpId"
                                />
                            </div>

                            <div class="btn-group">
                                <button type="submit" class="btn btn-primary mb-2 mr-1 waves-effect waves-light">Login</button> 
                                <button type="reset" class="btn btn-danger mb-2 waves-effect waves-light">Reset</button>
                            </div>
                            <br />
                            <div class="login-text">
                                Forgot Password?
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;