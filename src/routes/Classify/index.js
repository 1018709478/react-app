import React,{Component} from "react";
import "./index.css";
import Footer from "./../../component/Footer";

class ListNav extends React.Component{
    render(){
        return(
            <div className="title">
                <p>分类</p>
            </div>
        )
    }
}

class MainList extends React.Component{
    render(){
        return(
            <div className="mainlist">
                <div><img src="http://i1.ucaiyuan.com/app/category/new_fl/icon_rl.png"/></div>
                <div><img src="http://i1.ucaiyuan.com/app/category/new_fl/icon_rl.png"/></div>
                <div><img src="http://i1.ucaiyuan.com/app/category/new_fl/icon_rl.png"/></div>
                <div><img src="http://i1.ucaiyuan.com/app/category/new_fl/icon_rl.png"/></div>
                <div><img src="http://i1.ucaiyuan.com/app/category/new_fl/icon_rl.png"/></div>
                <div><img src="http://i1.ucaiyuan.com/app/category/new_fl/icon_rl.png"/></div>
                <div><img src="http://i1.ucaiyuan.com/app/category/new_fl/icon_rl.png"/></div>
                <div><img src="http://i1.ucaiyuan.com/app/category/new_fl/icon_rl.png"/></div>
            </div>
        )
    }
}







class Classify extends Component{
    render(){
        return(
            <div>
                <ListNav/>
                <MainList/>
            </div>
        )
    }
}

export default Classify













