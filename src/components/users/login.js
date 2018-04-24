import * as React from 'react';
import { loginUser } from './loginUser';



class Login extends React.Component{
    constructor(props) { 
        super(props);
        this.state = {
            phoneNum: "",
            password: ""
    };

    this.handlePhoneNum = this.handlePhoneNum.bind(this);
    this.handlePassword = this.handlePassword.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
}

    handleSubmit = (event) => {
        event.preventDefault()

        const loginParams = {
            phoneNum: this.state.phoneNum,
            password: this.state.password
        }
    

    loginUser(loginParams).then((user) => {
        localStorage.setItem("id", user.user_id)
      })
    }
    
    handlePhoneNum = (event) => {
        this.setState({phoneNum: event.target.value})
    
      }
    
      handlePassword = (event) => {
        this.setState({password: event.target.value})
      }

    render(){
        return (
       
            <li className="dropdown">
                <button className="btn btn-lg dropdown-toggle btn-outline-secondary" data-toggle="dropdown">Log In 
                    <span className="caret"></span>
                </button>
                <ul className="dropdown-menu dropdown-lr animated slideInRight">
                    <div className="col-lg-12">
                        <div className="text-center">
                            <h3><b>Log In</b></h3>
                        </div>
                            <form id="ajax-login-form" action="" method="post" autoComplete="off" onSubmit={this.handleSubmit} >
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Phone Number" required="required"
                                        onChange={this.handlePhoneNum} value={this.state.phoneNum} />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Password" required="required"
                                    onChange={this.handlePassword} value={this.state.password} />
                                </div>
                                <button className="btn btn-secondary btn-block"> Login 
                                </button> 
                            </form>
                    </div>
                </ul>
            </li>
        );
    } 
}
export default Login;