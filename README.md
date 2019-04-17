# cat-clicker-react

> MVVM 架构模式简单示例（React）

----

[演示地址](https://wingmeng.github.io/cat-clicker-react/build/index.html)

## 一、MVVM 的本质及原理

1. MVVM 本质上是 M-V-C-VM，它是在 MVC 的基础上增加了一层 VM，C 被弱化了，被并入到 M 的概念中。
2. VM 用于分离 V 和 M，避免由于直接操作 V 层的 DOM 而带来逻辑上的繁琐和效率上的低下，在实际开发中只需关注 VM 和 M 层之间的通信，因为 V 和 VM 层之间的映射和通信都是由框架自动完成的。
3. MVVM 使开发更高效，结构更清晰，增加了代码的复用性。

## 二、MVVM 四层结构

1. **Model：** 模型层，定义数据结构。
2. **Controller：** 控制层，实现业务逻辑，即数据的增删改查。在 MVVM 模式中一般把 C 层算在 M 层中。
3. **ViewModel：** 视图模型层，是视图 View 的模型，映射和显示逻辑（非业务逻辑），另外绑定器也在此层。
4. **View：** 视图层，将 ViewModel 通过特定的 GUI 展示出来，并在 GUI 控件上绑定视图交互事件，该层一般由 MVVM 框架自动生成在浏览器中。

## 相关

- [cat-clicker](https://github.com/wingmeng/cat-clicker)
- [cat-clicker-react-redux](https://github.com/wingmeng/cat-clicker-react-redux)
- [cat-clicker-vue](https://github.com/wingmeng/cat-clicker-vue)
