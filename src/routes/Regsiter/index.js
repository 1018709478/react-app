import React,{Component} from "react";
import "./index.css";
class Header extends React.Component{
    render(){
        return<div className="header">
            <ul>
                <li className="header-btn">{"<"}</li>
                <li className="header-title">注册</li>
                <li className="header-btn"></li>
            </ul>
        </div>
    }
}
class Content extends React.Component{
    render(){
        return<div className="content">
            <ul>
                <li className="user_name">
                    <input placeholder="请输入手机号" type="number" id="username"/>
                    <span id="clearUserName">
                        <i>X</i>
                    </span>
                </li>
                <li className="captcha">
                    <input placeholder="请输入验证码" type="number" id="captchaCode"/>
                    <i id="sendSms">获取验证码</i>
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
                    验证手机快捷登录
                </span>
                <a href="javascript:;" className="register">以后账户,点击登录</a>
            </div>
        </div>
    }
}

class Regsiter extends React.Component{
    render(){
        return<div className=" main">
            <Header />
            <Content/>
        </div>
    }
}

export default Regsiter;


