import React from "react";
import ReactDOM from "react-dom";

export class Product extends React.Component {
	render() {
		return(
	       <div className="row">
	        <div>
	          <img src={this.props.productImageUrl} width="100" height="110"/>
	        </div>
	        <div className="col-sm-8">
	          <div>
	            <a>
	              <i className="fa fa-caret-up" />
	            </a>
	            {this.props.votes}
	          </div>
	          <div>
	            <a href={this.props.url}>
	              {this.props.title}
	            </a> 
	            <p>
	              {this.props.description}
	            </p>
	          </div>
	          <div>
	            <span>Submitted by:</span>
	            <img
	              className="rounded-circle" width="25" height="25"
	              src={this.props.submitterAvatarUrl}/> 
	           </div>
	        </div>
	      </div>
		);
	}
}