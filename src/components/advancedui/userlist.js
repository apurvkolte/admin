import React, { useState } from 'react'
import PageHeader from '../../shared/layout-components/page-header/page-header'
import { Breadcrumb, Card, Col, Row, Button, Dropdown, Table, Pagination } from "react-bootstrap";
const user1 = "/assets/img/users/1.jpg";
const user2 = "/assets/img/users/2.jpg";
const user3 = "/assets/img/users/3.jpg";
const user4 = "/assets/img/users/4.jpg";
const user5 = "/assets/img/users/5.jpg";
const user6 = "/assets/img/users/6.jpg";
const user7 = "/assets/img/users/7.jpg";
const user9 = "/assets/img/users/9.jpg";
const user12 = "/assets/img/users/12.jpg";
const user11 = "/assets/img/users/11.jpg";
import { Link } from 'react-router-dom';
import Seo from '../../shared/layout-components/seo/seo';


const Userlistdropdown = React.lazy(() => import('../../shared/data/advanceui/userlistdropdown'), { ssr: false })


let UserlistData = [
  {
    id: 1,
    Product1: user1,
    ProductId: "Megan Peters",
    created: "08/06/2022",
    status: "Inactive",
    email: "mila@Kunis.com",
    information: "danger"

  },
  {
    id: 2,
    Product1: user2,
    ProductId: "George Clooney",
    created: "08/06/2022",
    status: "active",
    email: "	marlon@brando.com",
    information: "success"
  },
  {
    id: 3,
    Product1: user3,
    ProductId: "Ryan Gossling	",
    created: "08/06/2022",
    status: "Banned",
    email: "jack@nicholson",
    information: "danger"
  },
  {
    id: 4,
    Product1: user4,
    ProductId: "Emma Watson",
    created: "16/06/2022",
    status: "Pending",
    email: "jack@nicholsonm",
    information: "warning"

  },
  {
    id: 5,
    Product1: user5,
    ProductId: "Mila Kunis",
    created: "18/06/2022",
    status: "active",
    information: "success",
    email: "mila@Kunis.com",
  },

  {
    id: 6,
    Product1: user6,
    ProductId: "	Phil Watsons",
    created: "22/06/2022",
    status: "active",
    email: "	phil@watson.com",
    information: "success",
  },
  {
    id: 7,
    Product1: user7,
    ProductId: "Sonia Robertson",
    created: "25/06/2022",
    status: "active",
    email: "robertson@sonia.com",
    information: "success"
  },
  {
    id: 8,
    Product1: user9,
    ProductId: "Megan Peters",
    created: "28/06/2022",
    status: "Banned",
    email: "amelia23@kunis.com",
    information: "danger"
  },
  {
    id: 9,
    Product1: user11,
    ProductId: "Adam Hamilton",
    created: "30/06/2022",
    status: "pending",
    email: "	morganleah@.com",
    information: "warning"

  },
  {
    id: 10,
    Product1: user12,
    ProductId: "Leah Morgan",
    created: "08/06/2022",
    status: "active",
    email: "mila@Kunis.com",
    information: "success"

  }
];

const Userlist = () => {
  var Delete = (list) => {
    let items = UserlistData.filter((userlist, i) => {
      return userlist.id != list
    })
    UserlistData = items
    setdata(items)
    // console.log(items);
  }
  const [data, setdata] = useState(UserlistData)
  return (
    <>
      <Seo title="User List" />

      <PageHeader title="UserList" item="AdvancedUI" active_item="UserList" />

      {/* <!--Row--> */}
      <Row className=" row-sm">
        <Col sm={12} md={12} xl={12} lg={12} className="grid-margin">
          <Card className="custom-card">
            <Card.Header className="border-bottom-0 pb-0">
              <div className="d-flex justify-content-between">
                <label className="main-content-label mb-0 pt-1">User Table</label>
                <div className="ms-auto float-end">
                  <Userlistdropdown />
                </div>
              </div>
              <p className="tx-12 tx-gray-500 mt-0 mb-2">
                Example of Spruha Simple Table. <Link to="#!">Learn more</Link>
              </p>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive border userlist-table">
                <Table responsive className="card-table table-striped table-vcenter text-nowrap mb-0">
                  <thead>
                    <tr>
                      <th className="wd-lg-8p">
                        <span>User</span>
                      </th>
                      <th className="wd-lg-20p">
                        <span></span>
                      </th>
                      <th className="wd-lg-20p">
                        <span>Created</span>
                      </th>
                      <th className="wd-lg-20p">
                        <span>Status</span>
                      </th>
                      <th className="wd-lg-20p">
                        <span>Email</span>
                      </th>
                      <th className="wd-lg-20p">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item, index) => (
                      <tr key={index}>
                        <td>
                          <img
                            className="rounded-circle avatar-md me-2"
                            alt="avatar"
                            src={item.Product1}
                          />
                        </td>
                        <td>{item.ProductId}</td>
                        <td>{item.created}</td>
                        <td className="text-center">
                          <span className={`label text-${item.information} d-flex`}>
                            <span className={`dot-label bg-${item.information} me-1- 300`}></span>
                            {item.status}
                          </span>
                        </td>
                        <td>
                          <Link to="#!">{item.email}</Link>
                        </td>
                        <td>
                          <Link to="#!" className="btn btn-sm btn-primary me-1">
                            <i className="fe fe-search"></i>
                          </Link>
                          <Link to="#!" className="btn btn-sm btn-info me-1">
                            <i className="fe fe-edit-2"></i>
                          </Link>
                          <Link to="#!" className="btn btn-sm btn-danger me-1" onClick={() => { Delete(item.id) }}>
                            <i className="fe fe-trash"></i>
                          </Link>
                        </td>
                      </tr>

                    ))}
                  </tbody>

                </Table>
              </div>
              <div className="mt-5">
                <Pagination className="mb-0 justify-content-end">
                  <Pagination.Item>Previous</Pagination.Item>
                  <Pagination.Item className="page-item disabled">
                    {1}
                  </Pagination.Item>
                  <Pagination.Item className="page-item" active>
                    {2}
                  </Pagination.Item>
                  <Pagination.Item>{3}</Pagination.Item>
                  <Pagination.Item>{4}</Pagination.Item>
                  <Pagination.Item>{5}</Pagination.Item>
                  <Pagination.Item>Next</Pagination.Item>
                </Pagination>
              </div>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
      </Row>
      {/* <!-- row closed  --> */}
    </>
  )
}
Userlist.layout = "Contentlayout"

export default Userlist