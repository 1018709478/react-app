import React,{Component} from "react";
import "./index.css";
import Footer from "./../../component/Footer";

class ListNav extends React.Component{
    render(){
        return(
            <div className="title">
                <em>购物车</em>
                <span>编辑</span>
            </div>
        )
    }
}

class Main extends React.Component{
    render(){
        return{
            <div className="has_fix_middle">
                <section className="buy"></section>
            </div>
        }
    }
}
class Cart extends React.Component{
    render(){
        return(
            <div className="Cart_body">
                <ListNav/>
            </div>
        )
    }
}



export default Cart


