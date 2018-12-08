This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Start Project

Please clone or download this project to your local, and use `npm` to install the dependences and start server:

```
npm install
npm start
```


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### 开发中遇到的坑和分享

在create-react-app中使用mobx, 需要npm install @babel/plugin-proposal-decorators, 并npm run eject 项目, 在package.json中新增babel,并在babel下使用plugin

在catalog.js中，在render函数里如果解构this.state.rawData,会导致删除失败，因为上一级是props传入，再重新获取rawdata并更新在catalog组件时，该组件state没有清空，所以页面不会有同步结果。

开发中尽量避免了操作dom，尽量做到全状态管理。

在一级路由‘/home’需要单独返回一个component或者render虚拟dom，并且要加上exact,仅当location时localhost:3000/home时，页面回返回一些文字样式。.


### 使用到的技术栈

create-react-app
react-router 4.x
mobx
mobx-react
antd
ant-motion
sass
json-server
使用json-server做了个简单的登录验证,存储session

### 待完善

search功能,加上一些样式

jest


非常抱歉花了一点时间，最近手头上活比较多，每天只能抽出一点时间来更新，调试代码。希望TW的大佬们能谅解下。




