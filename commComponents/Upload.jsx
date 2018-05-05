import React, { Component } from 'react';
import PropTypes from 'prop-types';

// 压缩图片
function imgCompress(file, cb){
  const ready = new FileReader();
  ready.readAsDataURL(file);
  const percent = percentCtr(file.size);
  ready.onload = ()=>{
    const res = ready.result;
    canvasData(res, percent, cb);
  };
}
// 使用canvas压缩图片
function canvasData (re, percent, cb){
  const newImg = new Image();
  newImg.src = re;
  let imgWidth;
  let imgHeight;
  let offsetX;
  let offsetY;
  newImg.onload = ()=>{
    const img = document.createElement("img");
    img.src = newImg.src;
    imgWidth = img.width * percent;
    imgHeight = img.height * percent;
    var canvas = document.createElement("canvas");
    canvas.width = imgWidth;
    canvas.height = imgHeight;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, imgWidth, imgHeight);
    ctx.drawImage(img, 0, 0, imgWidth, imgHeight);
    const base64 = canvas.toDataURL("image/jpeg", 1);
    cb(base64);
  };
}
// 压缩比例
function percentCtr(fileSize, percent = 1.0){
  switch (true) {
    case fileSize >= 1:
      percent = 0.1;
      break;
    case fileSize < 1&& fileSize >=0.5:
      percent = 0.4;
      break;
    case fileSize < 0.5:
      percent = 0.8;
      break;
    default:
      percent = 1;
      break;
  }
  return percent;
}
// base64转图片，图片预览
function convertBase64UrlToBlob(urlData){
  //去掉url的头，并转换为byte
  const bytes = window.atob(urlData.split(',')[1]);
  //处理异常,将ascii码小于0的转换为大于0
  var ab = new ArrayBuffer(bytes.length);
  var ia = new Uint8Array(ab);
  for (var i = 0; i < bytes.length; i++) {
    ia[i] = bytes.charCodeAt(i);
  }
  return new Blob([ab], { type: 'image/png' });
}
function submit(file){

}
class Upload extends Component {
  static propTypes = {
    render: PropTypes.func.isRequired
  }
  state = {x:0, Y:1}
  constructor(props) {
    super(props);
  }
  render() { 
    return (
      // <div>{this.props.render(this.state)}</div>
      <div>
        <input type="file"/>
        <button onclick={() => submit}>submit</button>
      </div>
    );
    
  }
}
 
export default Upload;