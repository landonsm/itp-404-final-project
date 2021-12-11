import React from "react";
import ReactDom from "react-dom";

export default class Modal extends React.Component {
	render() {
		return (
			<div className="modal" tabIndex="-1">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">{this.props.title}</h5>
							<button
								type="button"
								className="btn-close"
								aria-label="Close"
								onClick={this.props.onClose}
							></button>
						</div>
						<div className="modal-body">
							<p>{this.props.body}</p>
						</div>
						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-secondary"
								onClick={this.props.onClose}
							>
								Close
							</button>
							<button
								type="button"
								className="btn btn-danger"
								onClick={this.props.onConfirm}
							>
								Confirm Delete
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
