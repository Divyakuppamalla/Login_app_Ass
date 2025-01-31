import React from 'react'

export default function Login() {
  return (
    <div>
      <div id="login">
        <h3 className="text-center text-white pt-5">Login form</h3>
    <div className="container">
        <div id="login-row" className="row justify-content-center align-items-center">
            <div id="login-column" className="col-md-6">
                <div id="login-box" className="col-md-12">
                    <form id="login-form" className="form" action="" method="post"/>
                        <h3 className="text-center text-info">Login</h3>
                        <div className="form-group">
                            <label form="username" className="text-info">Username:</label>
                            <input type="text" name="username" id="username" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label form="password" className="text-info">Password:</label>
                            <input type="text" name="password" id="password" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label form="remember-me" className="text-info"/><span>Remember me</span> <input id="remember-me" name="remember-me" type="checkbox"/>
                            <input type="submit" name="submit" className="btn btn-info btn-md" value="submit"/>
                        </div>
                        <div id="register-link" className="text-right">
                            <a href="#" className="text-info">Register here</a>
                        </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
  )
}
