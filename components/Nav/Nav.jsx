import React, { Component } from 'react';
import { Drawer, NavBar, Icon } from 'antd-mobile';
import ClassifyNav from './../classifyNav/ClassifyNav.jsx';
import './Nav.less';
import img from "../../static/images/1.jpg";


class NavComm extends React.Component {
  state = {
    docked: false,
    height: 0
  }
  onDock = (d) => {
    this.setState({
      [d]: !this.state[d],
    });
    if (this.state[d] === true) {
      
    }
  }
  componentDidMount() {
    this.setState({ height: document.documentElement.clientHeight});
  }
  
  render() {
    return (<div style={{ height: '100%' }}>
      <style global jsx>{`
      .my-drawer {
        position: relative;
        margin-top: 45px;
      };
      `}</style>
      <NavBar 
        className="nav-bar-fixed"
        mode="dark"
        icon={<Icon type="ellipsis" />} onLeftClick={() => this.onDock('docked')}
        rightContent={[
          <Icon type="ellipsis" key="0" onClick={e => console.log(e)} />,
      ]}>
        Docked in document
      </NavBar>
      <Drawer
        className="my-drawer"
        style={{ minHeight: '100vh', position: 'relative' }}
        contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 0 }}
        sidebarStyle={{ border: '1px solid #ddd' }}
        sidebar={ClassifyNav}
        docked={this.state.docked}
      >
        <img src={img} alt="" />
        {this.props.children}
      </Drawer>
    </div>);
  }
}

export default NavComm;