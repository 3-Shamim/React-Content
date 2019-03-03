import React, { Component } from "react";
import { addProduct } from "../../store/actions/productAction";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class AddProduct extends Component {
  state = {
    productName: "",
    unitPrice: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addProduct(this.state);
    this.setState({
      productName: "",
      unitPrice: ""
    });
  };

  render() {
    const { isLoggedIn, role, productAddedSuccess } = this.props;
    if (!isLoggedIn) return <Redirect to="/login" />;
    if (role !== "ADMIN") return <Redirect to="/login" />;
    if (productAddedSuccess) return <Redirect to="/" />;
    return (
      <div className="container">
        <div className="card">
          <div className="card-content">
            <form onSubmit={this.handleSubmit}>
              <div className="input-field">
                <label htmlFor="productName">Product Name</label>
                <input
                  type="text"
                  id="productName"
                  onChange={this.handleChange}
                  value={this.state.productName}
                />
              </div>
              <div className="input-field">
                <label htmlFor="unitPrice">Unit Price</label>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  id="unitPrice"
                  onChange={this.handleChange}
                  value={this.state.unitPrice}
                />
                <button type="submit" className="btn btn-success">
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    role: state.auth.role,
    productAddedSuccess: state.product.productAddedSuccess
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addProduct: product => dispatch(addProduct(product))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddProduct);
