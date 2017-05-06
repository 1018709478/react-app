import  React,{Component} from "react";
import { TabBar} from 'antd-mobile';
import './index.css';
import Footer from './../../component/Footer/index.js'
import JSON from './../../mock/home.json';
// console.log(JSON);




class SearchBar extends React.Component{
  render(){
    return (
      <div className="searchbar">
        <a>车厘子</a>
      </div>
    )
  }
}
// 轮播插件
import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile';
class Luobo extends React.Component {
  state = {
    data: ['', '', ''],
    initialHeight: 200,
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: [
          'http://i1.ucaiyuan.com/h5/imformation/exchange/exchange6.jpg?uwidth=750&uheight=428', 
          'http://i5.ucaiyuan.com/activity_pic/H5/20170302-h5-banner/banner-qyfl.jpg?uwidth=750&uheight=428',
          ],
      });
    }, 100);
  }
  render() {
    const hProp = this.state.initialHeight ? { height: this.state.initialHeight } : {};
    return (
      <WingBlank>
        
        <Carousel
          className="my-carousel" autoplay={true} infinite selectedIndex={1}
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map((item,index) => (
            <a href="http://www.baidu.com" key={index} style={hProp}>
              <img
                src={item}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({
                    initialHeight: null,
                  });
                }}
              />
            </a>
          ))}
        </Carousel>

        
        
      </WingBlank>
    );
  }
}
class Coupon extends React.Component{
  render(){
    return (
      <div>
        <a href="###">
          <img alt="" src="http://i1.ucaiyuan.com/h5_activity/h5kqdhbanner/h5kqdhbanner0104.jpg?uwidth=750&uheight=234"/>
        </a>
      </div>
    )
  }
}

//福利nav bar
class NavBar extends Component {
  
  render(){
    return (
        <ul className="navBar">
          <li href="">
            <img src="http://i5.ucaiyuan.com/activity_pic/H5/20170428-sygnx/njfl.png" alt=""/>
            <p>年节福利</p>
          </li>
          <li href="">
            <img src="http://i1.ucaiyuan.com/pc/channel/images/rszy.png" alt=""/>
            <p>肉食主义</p>
          </li>
          <li href="">
            <img src="http://i1.ucaiyuan.com/pc/channel/images/qydz.png" alt=""/>
            <p>企业定制</p>
          </li>
          <li href="">
            <img src="http://i1.ucaiyuan.com/pc/channel/images/fldh.png" alt=""/>
            <p>福利兑换</p>
          </li>
        </ul>
        
    )
  }
}

class HotProduct extends Component{
  constructor(props){
    super(props);
    this.state = {
      Json:JSON.content
    }
  }
  render(){
    var data =this.state.Json
    return(
      <div className="hot">
          <section className="hot_product">
            <h2>限时抢购</h2>
            <ul>
               {
              data.map((ele,index)=>{
                console.log(ele)
                return (
              <li key={index}>
                <a href="javascript:;">
                  <img src={ele.img}/>>
                  <h3>{ele.name}</h3>
                  <div className="price_wrap">
                    <span className="new_price">
                      <em>¥</em>
                      {ele.price}
                    </span>
                  </div>
                </a>
              </li>
                )
              })
            }
              
            </ul>
          </section>
      </div>
    )
  }
}

class Active extends Component{
  constructor(props){
    super(props);
    this.state={
      json:JSON
    }
  }
  render(){
    var data=this.state.json.list_pro
    return(
      <div>
      {
        data.map((ele,index)=>{
          console.log(ele);
          return (
          <section className="active_pro">
            <h4>{ele.title}</h4>
            <div><img src={ele.img}/></div>
            <ul>{
                ele.pro_nav.map((item,index)=>{
                return(
                <li>
                  <a href="javascript:;">
                    <img src={item.img}/>>
                    <h3>{item.name}</h3>
                    <div className="price_wrap">
                      <span className="new_price">
                        <label>¥</label>
                        {item.price}
                      </span>
                    </div>
                  </a>
                </li>
                      )
                })  
                
               }
              </ul>
          </section>
          )
        })
      }
      </div>
    )
  }
}



class Home extends Component {
    render(){
        return (
            <div>
                <SearchBar /> 
                <Luobo />
                <Coupon/>
                <NavBar/>
                <HotProduct/>
                <Active/>
                <Footer active="0"/>             
                
            </div>
        )
    }
};


export default Home