import React, { Fragment } from "react"
import { Icon } from 'antd';
import { Header, Container,Footer } from "./styled"
import{withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {mapStateToProps,mapDispatchToProps} from "./mapStore";
@connect(mapStateToProps,mapDispatchToProps)

@withRouter
class Detail extends React.Component {
    constructor(){
        super()
    }
    render() {
        let {info}  = this.props;
        console.log(info);
        return (
            <Fragment>
                <Header>
                    <Icon type="left" />
                    <div>
                        <span>商品</span>
                        <span>详情</span>

                    </div>
                    <Icon type="search" style={{ fontSize: '16px', }} />
                    <Icon type="dash" style={{ fontSize: '20px', }} />
                </Header>
                <Container>
                    <div className="gallery-container">
                        <div className="bannerimg">
                            <img src="http://ac01bt.img.file.ehaoyao.com/w/goods/img01/set_meal_copy_56426/000000005f48950d015f5b7ba78d0f75_zfx_big0-w.jpg" alt="" />
                        </div>
                    </div>
                    <div className="menu-list">
                        <div className="main-title">
                            <p>
                                <i>¥</i>
                                {info.price}.
                            <span>00</span>
                            </p>
                            <p>
                                <i>¥</i>
                               {info.oldPrice}
                        </p>
                            <p>
                                <Icon type="file-text" style={{ fontSize: '16px', }} />
                                <span>说明书</span>
                            </p>
                            <p>
                                <Icon type="star" style={{ fontSize: '16px', }} />
                                <span>收藏</span>
                            </p>

                        </div>
                        <div className="main-info">
                             <p><span>自营</span>{info.goodsName}</p>
                            <h5>{info.brief}</h5>
                        </div>

                    </div>
                    <div className="spec-info pd">
                        <span>已选</span>
                            <span>{info.spec}</span>
                    </div>
                    <div className="recommend bg">
                        <p className="bg">相关推荐</p>
                        <div className="recommend-item bg">
                            <img src="http://image.qumaiyao.com/data/goodscenter/imges/set_meal_copy_41982/ff80808166f8265e01672ef9a5da1f3a_zfx_small0.jpg" alt="" />
                            <div>
                                <h5></h5>
                                <i>规格：250g</i>
                                <p>¥<span>699.</span>00</p>

                            </div>
                        </div>
                    </div>
                    <div className="pharmacy-box pd">
                        <span>好药师商城（2-5天送达）</span>
                        <span>满79元包邮！</span>

                    </div>
                    <ul className="promise-box bg">
                        <li>
                            <Icon type="check-circle" style={{ color: 'rgb(255, 122, 45)', fontSize: '13px', }} />
                            正品保证
                        </li>
                        <li>
                            <Icon type="check-circle" style={{ color: 'rgb(255, 122, 45)', fontSize: '13px', }} />
                            品质保障
                        </li>
                        <li>
                            <Icon type="check-circle" style={{ color: 'rgb(255, 122, 45)', fontSize: '13px', }} />
                            隐私配送
                        </li>
                    </ul>
                    <div className="recommendWrapper bg mg">
                        <div className="tabTitle">
                            <p>
                                <span>为您推荐</span>
                                <span>品牌专区</span>
                            </p>
                        </div>
                        <div className="tabContent ">
                            <li>
                                <img src="http://image.qumaiyao.com/data/goodscenter/imges/set_meal_copy_444314/8a8094216c1eeba9016cccb5c012542b_zfx_mid1.jpg" alt="" />
                                <h5 className="to">299元/盒)东阿阿胶 复方阿胶浆(无蔗糖) 20ml*48支 3盒装</h5>
                                <div>
                                    <span>￥897.00</span>

                                    <h2>+</h2>
                                </div>
                            </li>

                        </div>
                    </div>
                    <div className="goods_2 bg">
                        <div className="details-nav">
                            <p>
                                <span>为您推荐</span>
                                <span>品牌专区</span>
                            </p>
                        </div>
                        <div className="details ">
                            <ul>
                                <li>
                                    <img src="http://img01.img.ehaoyao.com/data/goodscenter/imges/set_meal_copy_1/8a8094216cf7514e016e4a0c66cd0ff5.jpg" alt="" />
                                </li>
                            </ul>
                            <h4>
                                <br/>
                             
                            </h4>
                            <ul className="HTML" dangerouslySetInnerHTML={{__html:info.imageTexts}}>
                             
                            </ul>

                        </div>
                    </div>
                </Container>
                <Footer>
                    <ul>
                        <li>
                        <Icon type="home" style={{ fontSize: '20px', }}/>
                        首页
                        </li>
                        <li>
                        <Icon type="user" style={{ fontSize: '20px', }}/>
                        咨询药师
                        </li>
                        <li>
                        <Icon type="shopping-cart" style={{ fontSize: '20px', }}/>
                        购物车
                        </li>
                        <li  className="addCart">
                            <span>加入购物车</span>
                        </li>
                        <li className="rightPerchase">
                            <span>立即购买</span>
                        </li>
                    </ul>
                </Footer>
            </Fragment>
        )
    }
    componentDidMount(){
        let{groupId} = this.props.match.params;
        
        this.props.handleGetDetailData(groupId);
    }
}
export default Detail
