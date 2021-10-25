import React, { Component } from "react";
import ReactMarkdown from "react-markdown";

class MonMd extends Component {
	constructor(props) {
		super(props);
		this.state = { text: "" };
	}

	handleChange = (e) => {
		this.setState({ text: e.target.value });
		console.log("====================================");
		console.log(this.state);
		console.log("====================================");
	};

	render() {
		return (
			<>
				<h1>MonMd</h1>
				<section className="mon-md">
					<textarea onChange={this.handleChange} rows="30"></textarea>
					<ReactMarkdown className="reactmarkdown">
						{this.state.text}
					</ReactMarkdown>
				</section>
			</>
		);
	}
}

export default MonMd;
