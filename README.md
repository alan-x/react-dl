react-dl
---
> 声明式 react 组件，消除 jsx 中的三目运算符和逻辑守卫！！灵感来自 angular 和 vue 的指令。

### 在线例子🌰🌰🌰🌰🌰🌰🌰🌰

[https://followwinter.github.io/react-dl](https://followwinter.github.io/react-dl)

### 特性
- 🎉 解决在 jsx 中编写三目运算符导致的层层逻辑嵌套，让逻辑归逻辑，布局归布局
- 🎉 解决封装泄漏，提高项目可维护性

### 组件
- 🎉 Show：显示一个组件
- 🚧 Switch/Case：根据条件显示一个组件

### TODO 列表
- 🚧 优化文档
- 🚧 优化组件和示例

### 安装指令
```shell
$ npm install --save @followwinter/react-dl-show
$ npm install --save @followwinter/react-dl-switch
```

### 使用前
```jsx harmony
render(){
    return (
        isEdit?(
              <div>
                  {
                      hasWrite?(
                          <button>编辑</button>
                      ):(
                          <button>查看</button>
                      )
                  }
              </div>
          ):(
              <div>
                  {isOnline?(
                      <button>下线</button>
                  ):(
                      <button>上线</button>
                  )}
              </div>
          )
    )
}
```

### 使用后
```jsx harmony

isShow = (show) => ({children}) => <Show test={show} > {children} </Show>

render(){
    const InEdit = isShow(isEdit)
    const InDetail = isShow(!isEdit)
    
    const HasWrite = isShow(hasWrite)
    const NotHasWrite= isShow(!hasWrite)
    
    const Online= isShow(online)
    const Offline= isShow(!online)
    
    return (
        <div>
            <InEdit>
                <HasWrite>
                    <button>编辑</button>
                </HasWrite>
                <NotHasWrite>
                    <button>查看</button>
                </NotHasWrite>
            </InEdit>
            <InDetail>
                <Online>
                    <button>下线</button>
                </Online>
                <Offline>
                    <button>下线</button>
                </Offline>
            </InDetail>
         </div>
    )
}
```
