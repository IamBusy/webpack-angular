# webpack-angular
This is an example on how to organize your code when integrating `AngularJS 1.X` with `Webpack 1.x`

# How to use

```
git clone https://github.com/IamBusy/webpack-angular.git
cd webpack-angular
npm install
```
When you are developing your project, you can use
```
npm test
```
This command will use `webpack.dev.config.js` as configuration file.


For production environment, use
```
npm start
```
This command will use `webpack.pro.config.js` file


# How to organize
I was confused by the question of how to integrate angular with webpack. 
So I write the article [Webpack与AngularJS整合之代码逻辑与架构设计](http://www.xiaolewei.com/2017/03/06/Webpack与AngularJS整合之代码逻辑与架构设计/),
Maybe you can get inspiration from it :)