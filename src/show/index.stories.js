import React from "react";
import Show from "./index";

export default {
    title: "Show",
    component: Show,
};

class ShowExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: true
        };
    }

    handleClick = () => {
        this.setState({
            visible: !this.state.visible
        })
    }

    render() {
        const {visible} = this.state;
        return <div>
            <Show test={visible}>
                <p>显示</p>
            </Show>
            <button onClick={this.handleClick}>
                <Show test={visible}>
                    隐藏
                </Show>
                <Show test={!visible}>
                    显示
                </Show>
            </button>
        </div>;
    }
}

export const ShowToggle = () => (<div>
    <h1>例子</h1>
    <div style={{border: '1px solid #eee', padding: '10px'}}>
        <ShowExample/>
    </div>
    <h2>概述</h2>
    <p>
        在 React 开发中，我们常常需要根据条件去展示或者隐藏一个组件，正如前面的例子所示。
    </p>
    <p>
        我们通常使用`三目运算符`或者`逻辑守卫`来达到这个效果。比如：
    </p>
    <code>
        {'isShow: <p>显示</p> ? null'}
    </code>
    <p>或者：</p>
    <code>
        {'isShow && <p>显示</p>'}
    </code>
    <p>但是这存在一些问题：</p>
    <ul>
        <li>中间有一层逻辑转化。</li>
        <li>当逻辑过分复杂的时候，嵌套太深。</li>
    </ul>
    <hr/>
    <h2>逻辑转化</h2>
    <p>React 是声明式的，然而在这一块，却成了命令式的，尽管三目运算符或者逻辑守卫已经够简单了，但是在阅读这种逻辑的时候，依旧要经过一层逻辑转化。对我而言，这是封装泄漏：</p>
    <code>
        {'isShow: <p>显示</p> ? null'}
    </code>
    <p>使用 Show 组件后：</p>
    <pre>
        {'<Show test={isShow}> \n' +
        '   <p>显示</p> \n' +
        '</Show>'}
    </pre>
    <p>将逻辑转化为了声明。</p>
    <hr/>

    <h2>复杂逻辑</h2>
    <p>在逻辑很复杂的时候，这中间的逻辑更加恐怖。假设如下场景，一个页面有编辑态和详情态，编辑态根据是否有写权限有两种情况；详情态根据是否在线也有两种状态：</p>
    <pre>
        {'    isEdit?(\n' +
        '              <div>\n' +
        '                  {\n' +
        '                      hasWrite?(\n' +
        '                          <button>编辑</button>\n' +
        '                      ):(\n' +
        '                          <button>查看</button>\n' +
        '                      )\n' +
        '                  }\n' +
        '              </div>\n' +
        '          ):(\n' +
        '              <div>\n' +
        '                  {isOnline?(\n' +
        '                      <button>下线</button>\n' +
        '                  ):(\n' +
        '                      <button>上线</button>\n' +
        '                  )}\n' +
        '              </div>\n' +
        '          )\n' +
        '    )'}
    </pre>
    <p>使用 Show 之后：</p>
    <pre>
        {'' +
        '\n' +
        '    isShow = (show) => ({children}) => <Show test={show} > {children} </Show>\n' +
        '\n' +
        '    const InEdit = isShow(isEdit)\n' +
        '    const InDetail = isShow(!isEdit)\n' +
        '    \n' +
        '    const HasWrite = isShow(hasWrite)\n' +
        '    const NotHasWrite= isShow(!hasWrite)\n' +
        '    \n' +
        '    const Online= isShow(online)\n' +
        '    const Offline= isShow(!online)\n' +
        '    \n' +
        '    return (\n' +
        '        <div>\n' +
        '            <InEdit>\n' +
        '                <HasWrite>\n' +
        '                    <button>编辑</button>\n' +
        '                </HasWrite>\n' +
        '                <NotHasWrite>\n' +
        '                    <button>查看</button>\n' +
        '                </NotHasWrite>\n' +
        '            </InEdit>\n' +
        '            <InDetail>\n' +
        '                <Online>\n' +
        '                    <button>下线</button>\n' +
        '                </Online>\n' +
        '                <Offline>\n' +
        '                    <button>下线</button>\n' +
        '                </Offline>\n' +
        '            </InDetail>\n' +
        '         </div>\n' +
        '    )\n'}
    </pre>

    <p>虽然看过去代码量多了，但是在大型项目中，代码的可维护性比起代码量来说，远远来的重要。</p>

</div>)
