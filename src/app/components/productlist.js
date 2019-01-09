import React from "react";
import ReactDOM from "react-dom";
import { Product } from "./product";
import { seed } from "./seed";

export class ProductList extends React.Component {
	render() {
        const products = Seed.products.sort((a,b) =>(
        	    b.votes - a.votes
        	));
		const productComponents = Seed.products.map((product) => (
			    <Product
			      key={"product-" + product.id}
                  id={product.id}
                  title={product.title}
                  description={product.description}
                  url={product.url}
                  votes={product.votes}
                  submitterAvatarUrl={product.submitterAvatarUrl}
                  productImageUrl={product.productImageUrl}
               />
		));
		return(
			<div className="container">
              {productComponents}
			</div>
		);
	}
}