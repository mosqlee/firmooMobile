import React, { Component } from 'react';
import { Accordion, List } from 'antd-mobile';

/**
 * 眼镜分类
 * 
 * @class ClassifyNav
 * @extends {Component}
 */
// class ClassifyNav extends Component {
//   state = {}

//   render() { 
//     return ( 
//       <div style={{ marginTop: 10, marginBottom: 10 }}>
//         <Accordion defaultActiveKey="0" className="my-accordion" onChange={this.onChange}>
//           <Accordion.Panel header="Title 1">
//             <List className="my-list">
//               <List.Item>content 1</List.Item>
//               <List.Item>content 2</List.Item>
//               <List.Item>content 3</List.Item>
//             </List>
//           </Accordion.Panel>
//           <Accordion.Panel header="Title 2" className="pad">this is panel content2 or other</Accordion.Panel>
//           <Accordion.Panel header="Title 3" className="pad">
//             text text text text text text text text text text text text text text text
//           </Accordion.Panel>
//         </Accordion>
//       </div>
//     );
//   }
// }
function onChange(key) {
  console.log(key);
}
const ClassifyNav = (
    <div className="classify-nav">
        <Accordion defaultActiveKey="-1" className="my-accordion" onChange={onChange.bind(this)}>
            <Accordion.Panel header="Title 1">
                <List className="my-list">
                    <List.Item>content 1</List.Item>
                    <List.Item>content 2</List.Item>
                    <List.Item>content 3</List.Item>
                </List>
            </Accordion.Panel>
            <Accordion.Panel header="Title 2" className="pad">this is panel content2 or other</Accordion.Panel>
            <Accordion.Panel header="Title 3" className="pad">
                text text text text text text text text text text text text text text text
          </Accordion.Panel>
        </Accordion>
    </div>
);
export default ClassifyNav;