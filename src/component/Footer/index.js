import React,{Component} from "react"
import {Link} from "react-router"

import "./index.css"
class Footer extends Component{
    constructor(props){
        super(props)
    }
    static defaultProps = {
        footerData:[
            {title:"首页",path:"/"},
            {title:"分类",path:"/classify"},
            {title:"购物车",path:"/cart"},
            {title:"我的",path:"/mine"}
        ]
    };
    render(){
        const{footerData,active}=this.props;
        return<div className="footer">
                <ul>
                    {
                        footerData.map((ele,i)=><li key={i} className={i==active?"active":""}>
                            <Link to={ele.path}>{ele.title}</Link>
                            </li>)
                    }
                </ul>
        </div>
    }
}
export default Footer







