import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import Axios from "axios";

class ProductList extends Component {
  state = {
    data: [],
    pages: 0,
    loading: false,
    sorted: "",
    filtered: "",
    page: 0,
    pageSize: 0
  };

  deleteProduct = id => {
    this.props.deleteProduct(id);
  };

  render() {
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

    return (
      <ReactTable
        data={this.state.data} // should default to []
        pages={this.state.pages} // should default to -1 (which means we don't know how many pages we have)
        loading={this.state.loading}
        columns={columns}
        manual // informs React Table that you'll be handling sorting and pagination server-side
        onFetchData={(state, instance) => {
          // show the loading overlay
          this.setState({ loading: true });
          // fetch your data
          Axios.get("http://localhost:8080/api/product/pageable/all", {
            page: state.page,
            pageSize: state.pageSize
            /*             sorted: state.sorted,
            filtered: state.filtered */
          }).then(res => {
            // Update react-table
            this.setState({
              data: res.data.rows,
              pages: res.data.pages,
              loading: false
            });
          });
        }}
      />
    );
  }
}

export default ProductList;
