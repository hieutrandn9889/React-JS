import React, { Component } from 'react';

class Product extends Component {

	// showInforProduct(product) {
	// 	if (product.status) {
	// 		return <h2 >
	// 			ID: {product.id}<br />
	// 			NAME: {product.name}<br />
	// 			PRICE: {product.price} VND<br />
	// 			STATUS: {product.status ? 'ACTIVE' : 'PENDING'}
	// 		</h2>
	// 	}
	// }

	// constructor(props){
	// 	super(props);
	// 	this.onAddToCard = this.onAddToCard.bind(this);
	// }

	// onAddToCard(){
	// 	alert(this.props.children + ' - ' + this.props.price);
	// }

	onAddToCard2 = () => {
		alert(this.props.children + ' - ' + this.props.price);
	}

	render() {
		// var a = 5;
		// var b = 10;
		// var name = 'hieutran';
		// var product = {
		// 	id: 1,
		// 	name: 'iphone 7 plus',
		// 	price: 15000000,
		// 	status: true
		// };
		// var users = [
		// 	{
		// 		id: 1,
		// 		name: 'TRAN VAN A',
		// 		age: 18
		// 	},
		// 	{
		// 		id: 2,
		// 		name: 'TRAN VAN B',
		// 		age: 19
		// 	},
		// 	{
		// 		id: 3,
		// 		name: 'TRAN VAN C',
		// 		age: 20
		// 	}
		// ];
		// var elements = users.map((user, index) => {
		// 	return <div key={user.id}>
		// 		<h2>
		// 			Ten: {user.name} <br />
		// 			Tuoi: {user.age}
		// 		</h2>
		// 	</div>
		// });
		return (
			<div>
				{/* <div className="test1" >
					<img alt="" src={this.props.image} />
					<h3>
						{this.props.children}
					</h3>
					<p>
						{this.props.price}  VND
					</p>
				</div> */}

				{/* <div className="ml-30">
					<h1>
						a: {a} <br />
						b: {b} <br />
						a + b : {a + b}
					</h1>
					<h2>
						name: {name}<br />
					</h2>
					{this.showInforProduct(product)}
					{elements}
				</div> */}

				<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
					<div className="thumbnail">
						<img alt="" src="https://media.aws.alkosto.com/media/catalog/product/cache/6/image/69ace863370f34bdf190e4e164b6e123/i/p/iphone6plus_pureangles_svr_mx-es-screen.jpg" />
						<div className="caption">
							<h3>Iphone 6 plus</h3>
							<p>
								16.000.000VND
		          			</p>
						</div>
						<button type="button" className="btn btn-success" onClick={this.onAddToCard2} >Mua Hàng</button>
					</div>
				</div> 
			</div>
		);
	}
}

export default Product;
