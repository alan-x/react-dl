import React from "react";
import Switch from "./index";

export default {
	title: "Switch",
	component: Switch,
};

export const SwitchMatch = ()=>(
	<Switch test={1}>
		<Switch.Case test={1} match={"命中"}/>
		<Switch.Case test={2} match={"未命中"}/>
	</Switch>
);


export const SwitchNoMatch = ()=>(
	<Switch test={3}>
		<Switch.Case test={1} match={"命中"}/>
		<Switch.Case test={2} match={"未命中"}/>
		<Switch.Default match={"默认命中"}/>
	</Switch>
);
