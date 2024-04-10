import { Link } from 'react-router-dom';;
import React, { useEffect, useState } from "react";
import { server } from "../../shared/config";
import PageHeader from "../../shared/layout-components/page-header/page-header";
import Seo from "../../shared/layout-components/seo/seo";
import { connect } from "react-redux"
import { AddToCart } from "../../shared/redux/actions"
import { Productdata } from "../../shared/data/e-commerce/productdata";
import Multiselect from "react-select";
const Products = ({ AddToCart }) => {

  let [product, setproduct] = Productdata

  const objectArray = [
    { value: "Accessories", label: "Accessories" },
    { value: "Men's Groming", label: "Men's Groming" },
    { value: "Bootom wear", label: "Bootom wear" },
    { value: "Top wear", label: "Top wear" },
    { value: "Foot wear", label: "Foot wear" },
  ];

  return (
    <>
      <Seo title={"Products"} />

      <PageHeader title="Products" item="Ecommerce" active_item="Products" />

      <div>
        {/* <!-- Row --> */}
        <div className="row row-sm">
          <div className="col-md-8 col-lg-9">
            <div className="row row-sm">
              {Productdata.map((ele) => {
                return (
                  <div
                    className="col-md-6 col-lg-6 col-xl-4 col-sm-6"
                    key={Math.random()}
                  >
                    <div className="card custom-card">
                      <div className="p-0 ht-100p">
                        <div className="product-grid">
                          <div className="product-image">
                            <Link to={`/components/ecommerce/product-details`}
                              className="image">

                              <div className="pic-1">
                                <img
                                  alt="product-image-1"
                                  src={ele.Product1}
                                />
                              </div>
                              <div className="pic-2">
                                <img
                                  alt="product-image-2"
                                  src={ele.Product2}
                                />
                              </div>
                            </Link>
                            <a className="product-like-icon" href="#!">
                              <i className="far fa-heart"></i>
                            </a>
                            <span className="product-discount-label">-33%</span>
                            <div className="product-link">
                              <Link to="/components/ecommerce/cart" onClick={() => { AddToCart(ele.id) }}>
                                <i className="fa fa-shopping-cart"></i>
                                <span>Add to cart</span>
                              </Link>
                              <Link to={`/components/ecommerce/product-details`}>
                                <i className="fas fa-eye"></i>
                                <span>Quick View</span>
                              </Link>
                            </div>
                          </div>
                          <div className="product-content">
                            <h3 className="title">
                              <a href="#!">{ele.ProductId}</a>
                            </h3>
                            <div className="price">
                              <span className="old-price">
                                {ele.Productpriceold}
                              </span>
                              <span className="text-danger">
                                ${ele.Productdiscountnew}
                              </span>
                            </div>
                            <ul className="rating">
                              <li className="fas fa-star"></li>
                              <li className="fas fa-star"></li>
                              <li className="fas fa-star"></li>
                              <li className="fas fa-star"></li>
                              <li className="far fa-star"></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <nav>
              <ul className="pagination justify-content-end">
                <li className="page-item disabled">
                  <a className="page-link" href="#!">
                    Prev
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#!">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#!">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#!">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#!">
                    4
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#!">
                    5
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#!">
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-md-4 col-lg-3 col-xl-3">
            <div className="card custom-card">
              <div className="card-body">
                <div className="row row-sm">
                  <div className="col-sm-12">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search ..."
                      />
                      <span className="">
                        <button
                          className="btn ripple btn-primary"
                          type="button"
                        >
                          Search
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row row-sm">
              <div className="col-md-12 col-lg-12">
                <div className="card custom-card">
                  <div className="card-header custom-card-header">
                    <h6 className="main-content-label mb-3">Categories</h6>
                  </div>
                  <div className="card-body">
                    <div className="form-group">
                      <label className="form-label">Mens</label>
                      <Multiselect options={objectArray} classNamePrefix="selectform" singleSelect displayValue="key" />

                    </div>
                    <div className="form-group">
                      <label className="form-label">Women</label>
                      <Multiselect options={objectArray} classNamePrefix="selectform" singleSelect displayValue="key" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Baby & Kids</label>
                      <Multiselect options={objectArray} classNamePrefix="selectform" singleSelect displayValue="key" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Electronics</label>
                      <Multiselect options={objectArray} classNamePrefix="selectform" singleSelect displayValue="key" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Sport,Books & More </label>
                      <Multiselect options={objectArray} classNamePrefix="selectform" singleSelect displayValue="key" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Price</label>
                      <label className="custom-control custom-radio">
                        <input
                          type="radio"
                          className="custom-control-input"
                          name="example-radios"
                          value="option1"
                        // checked=""
                        />
                        <span className="custom-control-label">Under $25</span>
                      </label>
                      <label className="custom-control custom-radio">
                        <input
                          type="radio"
                          className="custom-control-input"
                          name="example-radios"
                          value="option2"
                        />
                        <span className="custom-control-label">$25 to $50</span>
                      </label>
                      <label className="custom-control custom-radio">
                        <input
                          type="radio"
                          className="custom-control-input"
                          name="example-radios"
                          value="option2"
                        />
                        <span className="custom-control-label">
                          $50 to $100
                        </span>
                      </label>
                      <label className="custom-control custom-radio">
                        <input
                          type="radio"
                          className="custom-control-input"
                          name="example-radios"
                          value="option2"
                        />
                        <span className="custom-control-label">
                          Other (specify)
                        </span>
                      </label>
                    </div>
                    <a className="btn ripple btn-primary btn-block" href="#!">
                      Apply Filter
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Row --> */}
      </div>
    </>
  );
};

// Products.getInitialProps = async ()=>{
//   const response = await fetch(`${server}/api/product`)
//   const products = await response.json();
//   return {product :products}
// }

Products.layout = "Contentlayout"

const mapStateToProps = (state) => ({
  local_Products: state
})
export default connect(mapStateToProps, { AddToCart })(Products);
