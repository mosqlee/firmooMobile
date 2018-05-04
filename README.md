#一.运行
##运行开发环境
npm i（初次运行）
npm run dev
打开 localhost:3000
##运行正式环境
npm run build
npm start
打开 localhost:3000

#二.项目结构说明
1._document.js是渲染最外层的文件，通用的head（比如通用的css文件，通用的seo）都放在这里。

2.pages文件夹是路由文件，一个文件一个路由。

3.commComponents文件存放通用的组件，如若组件不只包含一个文件，则在commonComponents文件中新建一个文件夹

4.components文件夹存放不通用的组件，如若组件不只包含一个文件，则在components文件中新建一个文件夹

5.lib存放外接的高阶组件和一些无法使用npm安装的js插件,还有一些通用方法。

6.locales中存放语言包。

7.redux文件夹存放使用redux管理状态的文件，包括actions，reducers，store和中间件。

8.static存放静态文件，如图片，通用css文件等。说明：图片需要require进来

#三.编码规范
##1.css
使用'classify-nav-item'这种方案来命名类名。
尽量不要使用嵌入的方式写css样式。
独立的组件使用“<style scope jsx>{``}</style>”的方式写css。

static文件中：
layout.less和style.less文件是用来写通用less函数，变量的。
commStyle.less是写全局css属性的。

##2.js
1.命名
  使用驼峰大小写的方式命名变量，如‘const swiperImgs = xxxx’。组件,class,构造函数采用大写开头的驼峰大小写。
2.变量声明
  使用const和let代替var，尽量使用const，不知道用const还是let就先用const，报错就换成let。
3.箭头函数
  尽量使用箭头函数替代，有this的调用可不使用。
4.如若要使用ES6及以上的promise，string.includes等新增方法，必须从core.js中import相关方法再使用。
5.使用对象属性和方法的简写，例如：
//good
const data = 1111;
const atom = {
  data,
  addData(){
    return this.data++
  }
}
//bad
const atom = {
  data:data,
  addData: function(){
    return this.data++
  }
}
6.不确定引入多少的情况下谨慎使用扩展字符{...arg}.

7.创建对象和数组使用字面量：{},[]。而不是new Object()。。。

8.使用解构存取和使用多属性对象，减少临时变量。{a,b} = obj;

9.需要回传多个值的使用使用对象解构而不是数组解构，可以按需调取需要的变量。

10.程序化生成字符串的使用使用`${arg}`

11.永远不要在一个非函数代码块（if、while 等）中声明一个函数，把那个函数赋给一个变量。浏览器允许你这么做，但它们的解析表现不一致。

12.不要使用arguments而是使用（...rest）

13.给函数参数定义默认值function(a={})

14.如果一个函数只有一个参数，一个return值则括号都省略，使用箭头函数即可。test => console.log(test)

15.使用class，避免操作prototypes，使用extends继承。

16.一个const或者let一个变量。

17.优先使用===和!==而不是==或者!=

18.使用简写，if(a)而不是if(a!=='')

19.使用TODO:标注解决方式，FIXME:标注问题

20.使用2个空格作为缩进

21.使用尾逗号而不是首行逗号，babel会自动去掉尾逗号。

22.使用parseInt带上基数。

23.使用_命名私有属性。

24.不需要使用that或者self保存this，使用箭头函数即可。

##react
1.输出的组件名需与文件名一致。

2.
	* 每个文件只包含一个 React 组件
  不过可以包含多个 Stateless 或 Pure 组件。

3.组件文件使用jsx后缀命名。

4.除非是从一个非 JSX 文件中初始化 app，否则不要使用 React.createElement

5.如果需要管理内部状态或 refs，优先使用 class extends Component
  反之, 则优先使用普通函数(不建议使用箭头函数)。

6.不要使用混淆，使用HOC或者props.renders来提升组件的复用性。

7.




##其他
firmooMobile\node_modules\rmc-nuka-carousel\es\carousel.js中的620行需要特殊处理一下