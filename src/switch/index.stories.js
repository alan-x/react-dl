import React from "react";
import Switch from "./index";
import SwitchExample from "./SwitchExample";

export default {
	title: "Switch",
	component: Switch,
};

export const SwitchMatch = () => (
	<div>
		<h1>示例</h1>
		<div style={{border: "1px solid #eee", padding: "10px"}}>
			<SwitchExample/>
		</div>

		<h2>概述</h2>
		<p>
			在 React 中，还有一个常用的模式就是 Map，根据对应的值，显示对应的组件，比如前面例子中的 Tabs。我们通常会这么实现这种模式：
		</p>
		<pre>
			{'const map = {\n' +
			'	1:"主页",\n' +
			'	2:"新闻",\n' +
			'	3:"个人中心"\n' +
            '}'}
		</pre>
		<p>然后在 render 中：</p>
		<pre>
			{'{map[tab]}'}
		</pre>
		<p>这么实现有两个问题：</p>
		<ul>
			<li>丢失了细节，我们无法直接从 map[tab] 看出来，到底渲染了什么组件</li>
			<li>如果 tab 是错误的值，这里没有对错误数据的处理，如果要处理错误，也需要其他的逻辑</li>
		</ul>
		<h2>解决以上问题：</h2>
		<pre>
			{'<Switch test={tab}>\n' +
            '    <Switch.Case test={1} match={"主页"}/>\n' +
            '    <Switch.Case test={2} match={"新闻"}/>\n' +
            '    <Switch.Case test={3} match={"个人中心"}/>\n' +
            '    <Switch.Default match={"主页"}/>\n' +
            '</Switch>'}
		</pre>
		<p>爽多了！！！</p>
	</div>
);

