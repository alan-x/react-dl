import React from "react";

const Switch = ({children, test}) => {
	let result = null;
	let defaultCase = null;

	React.Children.forEach(children,function(child) {
		if ((child.type === Switch.Case) && test === child.props.test) {
			result = child;
		}

		if (child.type === Switch.Default){
			defaultCase = child;
		}
	});
	return result || defaultCase;
};

Switch.Case = Switch.Default = ({match, children}) => match || children;

export default Switch;
