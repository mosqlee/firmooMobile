import { Button } from 'antd-mobile';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import 'core-js/fn/string/includes';
import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { withI18next } from '../lib/withI18next';
// 引入样式
import './index.less';
// redux
import {initStore} from '../redux/store';
import withRedux from '../lib/withRedux';

import { getSwiperInfo } from '../redux/actions/swiperInfo';
// components;
import PureComponent from '../components/PureComponent/PureComponent.jsx';
import NavComm from '../components/Nav/Nav.jsx';
import Swiper from './../components/Swiper/Swiper.jsx';

// component
/**
 * 首页
 * @class Index
 * @extends {Component}
 */
class App extends Component {
  static async getInitialProps({ store, req, res, isServer }, lang) {
    let lan;
    // 获取需要渲染的语言
    if (isServer) {
      lan = lang.initialLanguage;
    }
    // 发起语言特性的特殊请求
    const json = await axios('http://localhost:3000/static/mock.json');
    return { isServer, json: json.data, lang: lan };
  }
  constructor(props) {
    super(props);
    this.t = this.props.t;
    // 根据这个变量来确认请求不同语言的接口
    // console.log(this.props,'lang'.repeat(100))
    // en-US,zh-CN
  }
  componentDidMount() {
    axios.get('test').then((res) => {
      console.log(res);
    });
    const a = { a: 1 };
    const b = { b: 2 };
    console.log(Object.assign(a, b));
    console.log('firmoo'.includes('fir'));
    // this.props.getSwiperInfo();
  }
  render() {
    return (
      <div>
        <NavComm t={this.t} isServer={this.props.isServer}>
          <PureComponent t={this.t} />
          <Swiper></Swiper>
        </NavComm>
        {/* <p>{this.t('common:integrates_react-i18next')}</p> */}

        {/* <ul>
          <li><a onClick={() => Router.push('/b')}>aa</a></li>
          <li><Link href="/b"><a>b</a></Link></li>
        </ul>
        <div>
          <Button>test</Button>
        </div> */}

      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  getSwiperInfo: bindActionCreators(getSwiperInfo, dispatch),
});
const withI18n = withI18next(['home', 'common'])(App);
const wuthR = withRedux(initStore, null, mapDispatchToProps)(withI18n);
export default wuthR;