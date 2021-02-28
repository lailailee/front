## 介绍

- 将 new 操作单独封装
- 遇到 new 时,就要考虑是否该使用工厂模式

## UML 类图

<!-- ![image](https://img2020.cnblogs.com/blog/2016690/202011/2016690-20201107113124642-85659290.png) -->

![image](https://note.youdao.com/yws/api/personal/file/6DBD323D35694524B78FF6D7C83F0B8C?method=download&shareKey=a66721ad94a1c1bc1cf6fce56e5bc910)

## 代码演示

```javascript
class Product {
  constructor(name) {
    this.name = name
  }
  init() {
    alert('init')
  }
  fun1() {
    alert('fun1')
  }
  fun2() {
    alert('fun2')
  }
}

class Product {
  constructor(name) {
    this.name = name
  }
  init() {
    alert('init')
  }
  fun1() {
    alert('fun1')
  }
  fun2() {
    alert('fun2')
  }
}

class Creator {
  create(name) {
    return new Product(name)
  }
}

// 测试
let creator = new Creator()
let p = creator.create('p1')
p.init()
p.fun1()
```

## 场景

- jQuery - \$('div')
- React.createElement
- vue 异步组件

### jQuery

- $('div') 和 new $('div') 有何区别?
- 第一:书写麻烦,链式操作将成为恶梦
- 第二:一旦 jQuery 名字变化,将是灾难性的

## 设计原则验证

- 构造函数和创建者分离
- 符合开放封闭原则
