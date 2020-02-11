import React from "react";
import Show from "../index";

export class ShowExample extends React.Component {
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
