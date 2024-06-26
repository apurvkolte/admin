import React, { useEffect, useState } from 'react'
import PageHeader from '../../shared/layout-components/page-header/page-header'
import { Breadcrumb, Button, Card, Col, Row, Table } from "react-bootstrap";
import { connect } from "react-redux"
import { Link } from 'react-router-dom'
// constes
const png14 = "/assets/img/pngs/14.png";
const png15 = "/assets/img/pngs/15.png";
const png16 = "/assets/img/pngs/16.png";
const png17 = "/assets/img/pngs/17.png";
const png18 = "/assets/img/pngs/18.png";
const png19 = "/assets/img/pngs/19.png";
import Seo from '../../shared/layout-components/seo/seo';

let Shoppingcart = [
  { Id: 1, Product: png14, ProductName: "COLLEGE BAG", Color: "Color:", Colorpicker: "Black color", Qty: "Out of stock", Qtytext: "danger", Quantity: 1, Price: "$26.00", },
  { Id: 2, Product: png15, ProductName: "PARTY WEAR SHOES", Color: "Color:", Colorpicker: "Pick", Qty: "In stock", Qtytext: "success", Quantity: 2, Price: "$23.00", },
  { Id: 3, Product: png19, ProductName: "SAMSUNG A2", Color: "Color:", Colorpicker: "Black color", Qty: "Out of stock", Qtytext: "danger", Quantity: 3, Price: "$56.00", },
  { Id: 4, Product: png16, ProductName: "FLOWER POT", Color: "Color:", Colorpicker: " Green and Black color", Qty: "Out of stock", Qtytext: "success", Quantity: 4, Price: "$36.00", },
  { Id: 5, Product: png17, ProductName: "CHAIR", Color: "Color:", Colorpicker: "Green and Black color", Qty: "Out of stock", Qtytext: "success", Quantity: 6, Price: "$24.00", },
  { Id: 6, Product: png18, ProductName: "WATCH", Color: "Color:", Colorpicker: "Green and Black color", Qty: "Out of stock", Qtytext: "danger", Quantity: 7, Price: "$34.00", },];

const Cart = (local_varaiable) => {
  var Delete = (id1) => {
    let ee = Shoppingcart.filter((e, i) => {
      return e.Id !== id1
    })
    Shoppingcart = ee
    setdata(ee)

  }
  const [data, setdata] = useState(Shoppingcart)
  function dec(el) {
    let unit = Number(el.target.parentElement.querySelector("input").value)

    // if (
    //   (unit) === 0) {
    //   return false;
    // } else {
    //   el.target.parentElement.querySelector("input").value--;
    // }
    if (unit > 0) {
      el.target.parentElement.querySelector("input").value--
    }
  }
  function inc(el) {
    Number(el.target.parentElement.querySelector("input").value++);
  }
  return (
    <>
      <Seo title="Cart" />

      <PageHeader title="Cart" item="Ecommerce" active_item="Cart" />

      <div>
        <Row className="row-sm">
          <Col lg={12} xl={9} md={12}>
            <Card className="custom-card">
              <Card.Header>
                <h5 className="mb-3 font-weight-bold tx-14">Shopping cart</h5>
              </Card.Header>
              <Card.Body>
                <div className="table-responsive">
                  <Table bordered className="text-nowrap table-shopping-cart mb-0">
                    <thead className="text-muted">
                      <tr className="small text-uppercase">
                        <th scope="col">Product</th>
                        <th scope="col">Qty</th>
                        <th scope="col" className="wd-120">
                          Quantity
                        </th>
                        <th scope="col" className="wd-120">
                          Price
                        </th>
                        <th scope="col" className="text-center ">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((list, index) => (
                        <tr key={index} data-index={index}>
                          <td>
                            <div className="media">
                              <div className="card-aside-img">
                                <img
                                  src={list.Product}
                                  alt="img"
                                  className="img-sm"
                                />
                              </div>
                              <div className="media-body my-auto">
                                <div className="card-item-desc mt-0">
                                  <h6 className="font-weight-semibold mt-0 text-uppercase">
                                    {list.ProductName}
                                  </h6>
                                  <dl className="card-item-desc-1">
                                    <dt>{list.Color} </dt>
                                    <dd>{list.Colorpicker}</dd>
                                  </dl>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p
                              className={`text-${list.Qtytext} small mb-0 mt-1 tx-12`}
                            >
                              {list.Qty}
                            </p>
                          </td>
                          <td>
                            <div className="handle-counter" id="handleCounter">
                              <Button
                                variant="light"
                                className="counter-minus "
                                onClick={dec}
                              >
                                -
                              </Button>
                              <input
                                type="text"
                                defaultValue={0}
                              />
                              <Button
                                variant="light"
                                className="counter-plus "
                                onClick={inc}
                              >
                                +
                              </Button>
                            </div>
                          </td>
                          <td>
                            <div className="price-wrap">
                              <span className="price font-weight-bold tx-16">
                                {list.Price}
                              </span>
                            </div>
                          </td>
                          <td className="text-center">
                            <Link to="#!"
                              onClick={function () {
                                Delete(list.Id);
                              }}
                              className="remove-list text-danger tx-20 remove-button"
                              data-abc="true">
                              <i className="fa fa-trash"></i>
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col className="col-lg-12 col-xl-3 col-md-12">
            <Card className="custom-card">
              <Card.Body>
                <form>
                  <div className="form-group mb-0">
                    <label>Have coupon?</label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control coupon"
                        placeholder="Coupon code"
                      />
                      <span className="">
                        <Button
                          variant="primary" className=" btn-apply coupon">
                          Apply
                        </Button>
                      </span>
                    </div>
                  </div>
                </form>
              </Card.Body>
            </Card>
            <div className="card custom-card cart-details">
              <Card.Body>
                <h5 className="mb-3 font-weight-bold tx-14">PRICE DETAIL</h5>
                <dl className="dlist-align">
                  <dt className="">ITEMS 3</dt>
                  <dd className="text-end ms-auto">$ 262.00</dd>
                </dl>
                <dl className="dlist-align">
                  <dt>Discount:</dt>
                  <dd className="text-end text-danger ms-auto">- $20.00</dd>
                </dl>
                <dl className="dlist-align">
                  <dt>Total price:</dt>
                  <dd className="text-end ms-auto">$252.97</dd>
                </dl>
                <dl className="dlist-align">
                  <dt>Delivery:</dt>
                  <dd className="text-end text-success ms-auto">Free</dd>
                </dl>
                <hr />
                <dl className="dlist-align">
                  <dt>Total:</dt>
                  <dd className="text-end  ms-auto">
                    <strong>$252.97</strong>
                  </dd>
                </dl>
                <div className="step-footer">
                  <Link
                    href={`/components/ecommerce/products/`} className="btn btn-success btn-block">
                    Continue Shopping
                  </Link>
                </div>
              </Card.Body>
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}

Cart.layout = "Contentlayout"

const mapStateToProps = (state) => ({
  local_varaiable: state
})

export default connect(mapStateToProps)(Cart)