import React from "react";
import ReactDOM from "react-dom";
import { Product } from "./product";

export class ProductList extends React.Component {
	render() {
		return(
			<div>
             <Product />
			</div>
		);
	}
}