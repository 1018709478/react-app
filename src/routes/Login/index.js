import React,{Component} from "react";
import "./index.css";

class Header extends Component{
    render(){
        return<div className="header">
            <ul>
                <li className="header-btn">{"<"}</li>
                <li className="header-title">登录</li>
                <li className="header-btn"></li>
            </ul>
        </div>
    }
}
class Content extends Component{
    render(){
        return<div className="content">
            <ul>
                <li className="user_name">
                    <input placeholder="请输入手机号" type="number" id="username"/>
                    <span id="clearUserName">
                        <i>X</i>
                    </span>
                </li>
                <li className="password">
                    <input placeholder="请输入密码(不少于6位)" type="number" id="passWord"/>
                     <span id="showPassWord">
                         <i className="current">
                            
                         </i>
                     </span>
                </li>
            </ul>
            <div className="login_btns">
                <span className="orange_btn" id="loginBtn">
                    确定
                </span>
                <a href="javascript:;" className="register">注册立即送好礼</a>
                <a href="javascript:;" className="f_right">忘记密码</a>
            </div>
        </div>
        
    }
}
class Login extends Component{
    render(){
        return<div className="main">
            <Header />
            <Content/>
        </div>
    }
}

export default Login;
