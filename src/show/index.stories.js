import React from "react";
import Show from "./index";

export default {
	title: "Show",
	component: Show,
};

export const ShowEdit = ()=>(
	<Show test={true}>
		<button>编辑</button>
	</Show>
);

export const HideEdit = ()=>(
	<Show test={false}>
		<button>编辑</button>
	</Show>
);
