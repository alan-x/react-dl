react-dl
---
> 声明式 react 组件，消除 jsx 中的三目运算符和逻辑守卫！！灵感来自 angular 和 vue 的指令。

### 特性
- 🎉 解决在 jsx 中编写三目运算符导致的层层逻辑嵌套，让逻辑归逻辑，布局归布局
- 🎉 解决封装泄漏，提高项目可维护性

### 组件
- 🎉 Show：显示一个组件
- 🚧 Switch/Case：根据条件显示一个组件

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
render(){
    const InEdit = ({children})=><Show test={isEdit}>{children}</Show>
    const InDetail = ({children})=><Show test={!isEdit}>{children}</Show>
    
    const HasWrite = ({children})=><Show test={hasWrite}>{children}</Show>
    const NotHasWrite= ({children})=><Show test={!hasWrite}>{children}</Show>
    
    const Online= ({children})=><Show test={online}>{children}</Show>
    const Offline= ({children})=><Show test={!online}>{children}</Show>
    
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
