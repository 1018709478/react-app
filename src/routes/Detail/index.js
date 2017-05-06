import React,{Component} from "react";
import "./index.css";
import { NavBar, Icon } from 'antd-mobile';
import { TabBar} from 'antd-mobile';
import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile';


class Header extends Component{
    render(){
        return<div>
            <NavBar  mode="light" onLeftClick={() => console.log('onLeftClick')}
            rightContent={[
                <Icon key="0" type="search" style={{ marginRight: '0.32rem' }} />,
                <Icon key="1" type="ellipsis" />,
            ]}
            ></NavBar>
  </div>
    }
}

class RunPic extends React.Component {
  state = {
    data: ['', '', ''],
    initialHeight: 200,
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'AiyWuByWklrrUDlFignR'],
      });
    }, 100);
  }
  render() {
    const hProp = this.state.initialHeight ? { height: this.state.initialHeight } : {};
    return (
      <WingBlank>
        <div className="sub-title"></div>
        <Carousel
          className="my-carousel" autoplay={false} infinite selectedIndex={1}
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map(ii => (
            <a href="http://www.baidu.com" key={ii} style={hProp}>
              <img
                src={`https://zos.alipayobjects.com/rmsportal/${ii}.png`}
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



class Price extends Component{
  render(){
    return <div className="price">
        <div className="price_box">
          <span className="retailprice">
            ¥<i>
              15.00
            </i>
          </span>
        </div>
        <h1 className="title">
          <i className="tips orange_yellow_tips">
            自营
          </i>
          光明.都市菜园 鲽鱼 500g
        </h1>
    </div>
  }
}

class Price_mid extends Component{
  render(){
    return <div className="pic_place">
        <a href="javascript:;">
            <img src="http://s1.ucaiyuan.com/h5/1.6.4/images/product/pingz_new.png"  />
        </a>
    </div>
  }
}

class Coments extends Component{
  render(){
    return <section className="product_comments">
        <a href="javascript:;">
          评论(0)
        </a>
    </section>
  }
}

class Product_detail extends Component{
  render(){
    return <section className="product_detail">
      <a href="javascript:;">
        图片详情
      </a>
    </section>
  }
}
class Product_list extends Component{
  render(){
    return <section className="product_list">
        <div className="goods_ulike">
          <p className="title_popular">大家都在买</p>
          <div className="scroll_box">
            <div className="item_wrap">
              <a href="javascript:;">
                <img src="http://i1.ucaiyuan.com/ugoods/212100000001/212100000001_750.jpg"/>
                <p>丹麦皇冠天然古寺猪肋排500g</p>
                <span>
                  ¥<i>42.00</i>
                </span>
              </a>
               <a href="javascript:;">
                <img src="http://i1.ucaiyuan.com/ugoods/212100000001/212100000001_750.jpg"/>
                <p>丹麦皇冠天然古寺猪肋排500g</p>
                <span>
                  ¥<i>42.00</i>
                </span>
              </a>
               <a href="javascript:;">
                <img src="http://i1.ucaiyuan.com/ugoods/212100000001/212100000001_750.jpg"/>
                <p>丹麦皇冠天然古寺猪肋排500g</p>
                <span>
                  ¥<i>42.00</i>
                </span>
              </a>
               <a href="javascript:;">
                <img src="http://i1.ucaiyuan.com/ugoods/212100000001/212100000001_750.jpg"/>
                <p>丹麦皇冠天然古寺猪肋排500g</p>
                <span>
                  ¥<i>42.00</i>
                </span>
              </a>
               <a href="javascript:;">
                <img src="http://i1.ucaiyuan.com/ugoods/212100000001/212100000001_750.jpg"/>
                <p>丹麦皇冠天然古寺猪肋排500g</p>
                <span>
                  ¥<i>42.00</i>
                </span>
              </a>
               <a href="javascript:;">
                <img src="http://i1.ucaiyuan.com/ugoods/212100000001/212100000001_750.jpg"/>
                <p>丹麦皇冠天然古寺猪肋排500g</p>
                <span>
                  ¥<i>42.00</i>
                </span>
              </a>
            </div>
            <div className="item_wrap">
              <a href="javascript:;">
                <img src="http://i1.ucaiyuan.com/ugoods/212100000001/212100000001_750.jpg"/>
                <p>丹麦皇冠天然古寺猪肋排500g</p>
                <span>
                  ¥<i>42.00</i>
                </span>
              </a>
               <a href="javascript:;">
                <img src="http://i1.ucaiyuan.com/ugoods/212100000001/212100000001_750.jpg"/>
                <p>丹麦皇冠天然古寺猪肋排500g</p>
                <span>
                  ¥<i>42.00</i>
                </span>
              </a>
               <a href="javascript:;">
                <img src="http://i1.ucaiyuan.com/ugoods/212100000001/212100000001_750.jpg"/>
                <p>丹麦皇冠天然古寺猪肋排500g</p>
                <span>
                  ¥<i>42.00</i>
                </span>
              </a>
               <a href="javascript:;">
                <img src="http://i1.ucaiyuan.com/ugoods/212100000001/212100000001_750.jpg"/>
                <p>丹麦皇冠天然古寺猪肋排500g</p>
                <span>
                  ¥<i>42.00</i>
                </span>
              </a>
               <a href="javascript:;">
                <img src="http://i1.ucaiyuan.com/ugoods/212100000001/212100000001_750.jpg"/>
                <p>丹麦皇冠天然古寺猪肋排500g</p>
                <span>
                  ¥<i>42.00</i>
                </span>
              </a>
               <a href="javascript:;">
                <img src="http://i1.ucaiyuan.com/ugoods/212100000001/212100000001_750.jpg"/>
                <p>丹麦皇冠天然古寺猪肋排500g</p>
                <span>
                  ¥<i>42.00</i>
                </span>
              </a>
            </div>
          </div>
        </div>
    </section>
  }
}

class Tab_bottom extends Component{
  render(){
    return<section className="table_btn">
          <a href="javascript:;">购物车</a>
          <ul>
            <li>加入购物车</li>
          </ul>
    </section>
  }
}



class Detail extends Component{
    render(){
        return<div className="main">
            <Header/>
            <RunPic/>
            <Price/>
            <Price_mid/>
            <Coments/>
            <Product_detail/>
            <Product_list/>
            <Tab_bottom/>
        </div>
    }
}





export default Detail;
