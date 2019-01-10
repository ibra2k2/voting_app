import React from "react";
import ReactDOM from "react-dom";
import { Product } from "./product";
import { seed } from "./seed";

export class ProductList extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			products: [],
		};
	    this.handleProductUpVote = this.handleProductUpVote.bind(this);
	}
    componentDidMount(){
    	this.setState({ products:Seed.products });
    }

	  handleProductUpVote(productId) {
	    const nextProducts = this.state.products.map((product) => {         
	      if (product.id === productId) {
	        return Object.assign({}, product, {
	          votes: product.votes + 1,
	        });
	      } else {
	        return product;
	      }
	    });
	    this.setState({
	      products: nextProducts,
	    });
	    console.log(nextProducts);
	  }


	render() {
        const products = this.state.products.sort((a,b) =>(
        	    b.votes - a.votes
        	));
		const productComponents = products.map((product) => (
			    <Product
			      key={"product-" + product.id}
                  id={product.id}
                  title={product.title}
                  description={product.description}
                  url={product.url}
                  votes={product.votes}
                  submitterAvatarUrl={product.submitterAvatarUrl}
                  productImageUrl={product.productImageUrl}
                  onVote={this.handleProductUpVote}
               />
		));
		return(
			<div className="container">
              {productComponents}
			</div>
		);
	}
}