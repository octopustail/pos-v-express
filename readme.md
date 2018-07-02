# 系统介绍
这是一个简单的基于express的Pos机
数据交互：axios

# 使用说明
npm install（由于git忘记写gitignore，node_module也被加入了版本控制，因此可以略过这一步）

执行命令：$ node server.js

### 商品信息页
访问在http://localhost:3000/items进入商品信息页面

点击 + 号可以添加到购物车，多次点击可以增加购物车内商品数量

点击结算，提交购物车内商品

### 结算页面 
访问在http://localhost:3000/cart进入购物车页面，各种商品的购买情况，以及整个购物车的总金额
  

