import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import ReactTable from "react-table";
import "react-table/react-table.css";
import {
  getAllProducts,
  deleteProduct
} from "../../store/actions/productAction";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getAllProducts();
  }

  deleteProduct = id => {
    this.props.deleteProduct(id);
  };

  render() {
    const { products, loader, isLoggedIn } = this.props;

    const preloader = loader ? (
      <div className="progress">
        <div className="indeterminate" />
      </div>
    ) : null;

    const columns = [
      {
        Header: "Id",
        accessor: "productId",
        filterable: true,
        sortable: true,
        style: {},
        width: 100
      },
      {
        Header: "Name",
        accessor: "productName",
        filterable: true,
        sortable: false
      },
      {
        Header: "Price",
        accessor: "unitPrice",
        Filter: ({ filter, onChange }) => (
          <input
            type="text"
            placeholder="Price"
            value={filter ? filter.value : ""}
            onChange={event => onChange(event.target.value)}
          />
        ),
        sortable: true
      },
      {
        Header: "Action",
        Cell: props => {
          return (
            <button
              onClick={() => {
                this.deleteProduct(props.original.productId);
              }}
              className="btn red"
            >
              Delete
            </button>
          );
        },
        filterable: false,
        sortable: false,
        width: 100
      }
    ];

    /* const productItem = products.length ? (
      products.map(product => {
        return (
          <li
            onClick={() => this.deleteProduct(product.productId)}
            key={product.productId}
            className="collection-item"
          >
            {product.productName}
          </li>
        );
      })
    ) : (
      <p className="center">Product not found!</p>
    ); */

    if (!isLoggedIn) return <Redirect to="/login" />;

    return (
      <div className="container">
        {preloader}
        <div className="row mt-3">
          <div className="col s12">
            <div className="col s12 m6">
              {/* <ul className="collection with-header">
              <li className="collection-header center">
                <h4>Product List</h4>
              </li>
              {productItem}
            </ul> */}
              <div className="white p-3">
                <ReactTable
                  data={products}
                  columns={columns}
                  filterable
                  defaultPageSize={10}
                  loadingText="Loading..."
                  noDataText="No Data available"
                  showPageSizeOptions={true}
                  pageSizeOptions={[5, 10, 20, 25]}
                  SubComponent={row => {
                    return (
                      <div>
                        {row.original.productId} || {row.original.productName}{" "}
                        || {row.original.unitPrice}
                      </div>
                    );
                  }}
                />
              </div>
            </div>
            <div className="col s12 m5 offset-m1">
              <h5 className="center">Ad. video</h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.product.products,
    loader: state.product.loader,
    isLoggedIn: state.auth.isLoggedIn
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllProducts: () => dispatch(getAllProducts()),
    deleteProduct: id => dispatch(deleteProduct(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
