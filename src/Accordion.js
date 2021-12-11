import React from "react";

export default class Accordian extends React.Component {
	render() {
		const panels = [];

		for (let i = 0; i <= 2; i++) {
			panels.push(
				<Panel
					className="button"
					panelTitle={this.props.title}
					panelDescription={this.props.description}
					panelNum={i}
					openPanel={this.props.value}
					key={i}
					onPanelClick={this.props.onPanelClick}
				/>
			);
		}

		return <>{panels}</>;
	}
}

class Panel extends React.Component {
	render() {
		return (
			<>
				<button
					type="button"
					className="panel btn btn-darkish"
					onClick={() => {
						const clickedPanelValue =
							this.props.panelNum === this.props.openPanel ? 0 : this.props.panelNum;
						this.props.onPanelClick(clickedPanelValue);
					}}
				>
					{this.props.panelTitle[`${this.props.panelNum}`]}
				</button>
				<p
					className="content"
					style={{
						display: this.props.panelNum === this.props.openPanel ? "block" : "none",
					}}
				>
					{this.props.panelDescription[`${this.props.panelNum}`]}
				</p>
				{console.log(this.props.openPanel)}
			</>
		);
	}
}
