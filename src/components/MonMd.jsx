import React, { Component } from "react";
import ReactMarkdown from "react-markdown";

class MonMd extends Component {
	constructor(props) {
		super(props);
		this.state = { text: "" };
	}

	handleChange = (e) => {
		this.setState({ text: e.target.value });
	};

	render() {
		return (
			<>
				<h1>MonMd</h1>
				<section
					style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
				>
					<textarea onChange={this.handleChange} rows="30"></textarea>
					<ReactMarkdown>{this.state.text}</ReactMarkdown>
				</section>
			</>
		);
	}
}

export default MonMd;
