import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import ColorPicker from './components/ColorPicker';
import SizeSetting from './components/SizeSetting';
import Result from './components/Result';
import Reset from './components/Reset';
// import Product from './components/Product'
class App extends Component {
  onClick() {
    console.log("Hello the world!");
  }

  onClick2(text) {
    console.log(text);
  }

  // constructor(props){
  //   super(props);
  //   this.onAddProduct = this.onAddProduct.bind(this);
  // }

  constructor(props){
    super(props);
    this.state = {
      color: 'red',
      fontSize: 15,
    };
  };

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     products: [
  //       {
  //         id: 1,
  //         name: 'Apple Iphone 6 plus 32GB',
  //         price: '16000000 VND',
  //         image: 'https://media.aws.alkosto.com/media/catalog/product/cache/6/image/69ace863370f34bdf190e4e164b6e123/i/p/iphone6plus_pureangles_svr_mx-es-screen.jpg',
  //         status: true
  //       },
  //       {
  //         id: 2,
  //         name: 'Apple Iphone 7 plus 32GB',
  //         price: '17000000 VND',
  //         image: 'https://media.aws.alkosto.com/media/catalog/product/cache/6/image/69ace863370f34bdf190e4e164b6e123/i/p/iphone6plus_pureangles_svr_mx-es-screen.jpg',
  //         status: true
  //       },
  //       {
  //         id: 3,
  //         name: 'Apple Iphone 8 plus 32GB',
  //         price: '18000000 VND',
  //         image: 'https://media.aws.alkosto.com/media/catalog/product/cache/6/image/69ace863370f34bdf190e4e164b6e123/i/p/iphone6plus_pureangles_svr_mx-es-screen.jpg',
  //         status: true
  //       },
  //     ],
  //     isActive: true,
  //   };
  //   // this.onSetStateActive = this.onSetStateActive.bind(this);
  // }

  onSetStateActive = () => {
    // if(this.state.isActive === true){
    //     this.setState({
    //       isActive : false
    //     });
    // }
    // else {
    //   this.setState({
    //     isActive: true
    //   })
    // }
    this.setState({
      isActive: !this.state.isActive
    })
  };
  onAddProduct = () => {
    console.log(this.refs.name.value);
  };

  onSetColor = (params) => {
    this.setState ({
      color: params
    });  
  }


  render() {
    // let elements = this.state.products.map((product, index) => {
    //   let result = null;
    //   if (this.state.isActive) {
    //     result =
    //       <tr key={index}>
    //         <td>{index}</td>
    //         <td>{product.name}</td>
    //         <td>
    //           <span className="badge badge-success" >{product.price} VND</span>
    //         </td>
    //       </tr>
    //   };
    //   return result;
    // });

    // let elements = products.map((product, index) => {
    //   let result = '';
    //   if (product.status) {
    //     result =
    //       <Product
    //         key={product.id}
    //         price={product.price}
    //         image={product.image}
    //       >
    //         {product.name}
    //       </Product>
    //   }
    //   return result;
    // });

    return (
      <div>
        <Header />
        <div className="container mt-50">
          <div className="row">
            <ColorPicker color={this.state.color} onReceiveColor= { this.onSetColor }/>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <SizeSetting />
              <Reset />
            </div>
            <Result />
          </div>
        </div>
        <div className="container">
          <div className="row">

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Tên Sản Phẩm</th>
                    <th>Giá</th>
                  </tr>
                </thead>
                {/* <tbody>{elements}</tbody> */}
              </table><br />
            </div>

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <button type="button" className="btn btn-warning" onClick={ this.onSetStateActive } >
                Active : {this.state.isActive === true ? 'true' : 'false'}
              </button>
            </div>


            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="panel panel-danger">
                <div className="panel-heading">
                  <h3 className="panel-title">Thêm Sản Phẩm</h3>
                </div>
                <div className="panel-body">
                  <div className="form-group">
                    <label >Tên Sản Phẩm</label>
                    <input type="text" className="form-control" id="" placeholder="Input field" ref="name" />
                  </div>
                  <button type="submit" className="btn btn-primary" onClick={this.onAddProduct}>Save</button>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <button type="button" className="btn btn-warning" onClick={this.onClick} >Click button </button>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <button type="button" className="btn btn-warning" onClick={() => { this.onClick2('ABC') }}>Click button </button>
            </div>



            {/* <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              {elements}
            </div> */}

            {/* <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <Product></Product> 
          </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
