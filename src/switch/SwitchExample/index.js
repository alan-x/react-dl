import React from 'react';
import Switch from "../index";

class SwitchExample extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            tab: 1
        }
    }

    handleClick = (tab) => {
        this.setState({tab})
    }

    render() {
        const { tab } =this.state
        return (
            <div>
                <div>
                    <button onClick={() => this.handleClick(1)}>主页</button>
                    <button onClick={() => this.handleClick(2)}>新闻</button>
                    <button onClick={() => this.handleClick(3)}>用户中心</button>
                    <button onClick={() => this.handleClick(404)}>错误页面</button>
                </div>
                <Switch test={tab}>
                    <Switch.Case test={1} match={"主页"}/>
                    <Switch.Case test={2} match={"新闻"}/>
                    <Switch.Case test={3} match={"个人中心"}/>
                    <Switch.Default match={"主页"}/>
                </Switch>
            </div>
        )
    }
}

export default SwitchExample
