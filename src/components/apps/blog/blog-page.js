import React from 'react'
import PageHeader from '../../../shared/layout-components/page-header/page-header'
import { Breadcrumb, Card, Row, Col, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';


//image
const user2 = "/assets/img/users/2.jpg"
const blog3 = "/assets/img/media/blog3.jpg"
const blog1 = "/assets/img/media/blog1.jpg"
const blog11 = "/assets/img/media/blog11.jpg"
const blog10 = "/assets/img/media/blog10.jpg"
const blog6 = "/assets/img/media/blog6.jpg"
const blog5 = "/assets/img/media/blog5.jpg"
const blog2 = "/assets/img/media/blog2.jpg"
const blog4 = "/assets/img/media/blog4.jpg"
const user5 = "/assets/img/users/5.jpg"
const user1 = "/assets/img/users/1.jpg"
import Seo from '../../../shared/layout-components/seo/seo';

const BlogPage = () => {
  return (
    <>
      <Seo title="Blog Page" />

      <PageHeader title="Blog" item="Advanced UI" active_item="Blog" />

      <Row className="row-sm">
        <Col xl={6} lg={12}>
          <Card className=" custom-card overflow-hidden">
            <div className="px-4 pt-4">
              <Link to={`/components/apps/blog/blog-details`}>
                <img
                  src={blog1}
                  alt="blog9"
                  className="rounded-lg w-100"
                />
              </Link>
            </div>
            <Card.Body className="blog-details">
              <div className="item-card-desc d-md-flex mb-3">
                <Link to="#!" className="d-flex me-3 mb-2">
                  <span className="fe fe-calendar text-muted me-2 tx-18"></span>
                  <div className="mt-0 mt-0 text-dark">20-Mar-2021</div>
                </Link>
                <Link to="#!" className="d-flex mb-2">
                  <span className="fe fe-user text-muted me-2 tx-18"></span>
                  <div className="mt-0 mt-0 text-dark">Dennis Mark</div>
                </Link>
                <div className="ms-auto mb-2">
                  <Link to="#!" className="me-0 d-flex">
                    <span className="fe fe-message-square text-muted me-2 tx-18"></span>
                    <div className="mt-0 mt-0 text-dark">6 Comments</div>
                  </Link>
                </div>
              </div>
              <Link to="#!" className="mt-4">
                <h5 className="font-weight-semibold">
                  Excepteur occaecat cupidatat
                </h5>
              </Link>
              <p className="text">
                I must explain to you how all this mistaken idea of denouncing
                pleasure and praising pain was born and I will give you Link
                complete account of the system, and expound the actual teachings
                of the great explorer of the truth, the master-builder of human
                happiness. No one rejects, dislikes, or avoids pleasure itself,
                because it is pleasure.
              </p>
              <div className="media mt-0 border-top">
                <div className="media mg-t-15 profile-footer">
                  <div className="media-user">
                    <div className="demo-avatar-group">
                      <div className="main-img-user">
                        <span className="rounded-circle">
                          <img
                            alt="blog9"
                            src={blog1}
                            className="rounded-circle"
                          />
                        </span>
                      </div>
                      <div className="main-img-user">
                        <span className="rounded-circle">
                          <img
                            alt="blog3"
                            src={blog3}
                            className="rounded-circle"
                          />
                        </span>
                      </div>
                      <div className="main-img-user">
                        <span className="rounded-circle">
                          <img
                            alt="blog6"
                            src={blog6}
                            className="rounded-circle"
                          />
                        </span>
                      </div>
                      <div className="main-img-user">
                        <span className="rounded-circle">
                          <img
                            alt="blog5"
                            src={blog5}
                            className="rounded-circle"
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6} lg={12} md={12}>
          <Card className="custom-card">
            <Card.Body className="p-3">
              <Row className="g-0 blog-list">
                <Col xl={5} lg={12} md={12}>
                  <Card.Body className="p-0">
                    <div className="item-card-img">
                      <Link
                        href={`/components/apps/blog/blog-details`}
                      >
                        <img
                          className="card-img-left h-130 w-100"
                          src={blog2}
                          alt="blog2"
                        />
                      </Link>
                    </div>
                  </Card.Body>
                </Col>
                <Col xl={7} lg={12} md={12}>
                  <Card.Body className="p-2">
                    <Link to={`/components/apps/blog/blog-details`}>
                      <h5 className="font-weight-semibold mt-3">
                        Circumstances Certain claims
                      </h5>
                    </Link>
                    <p>
                      I of human happiness. sint occaecat ccaecat cupidatat non
                      proident, sunt in culpa qui officia cupidatat non proident,
                      sunt in culpa qui officia deserunt No one rejects, dislikes,
                      or avoids pleasure itself, because it is pleasure.
                    </p>
                    <div className="media py-2 mt-0 border-top"></div>
                    <div className="item-card-desc d-flex">
                      <div className="main-avatar avatar online">
                        <img
                          alt="avatar"
                          className="rounded-circle"
                          src={user2}
                        />
                      </div>
                      <div className="main-contact-body">
                        <h6>Abigail Johnson</h6>
                        <span className="phone">2 days ago</span>
                      </div>
                      <div className="ms-auto mb-2">
                        <Link to="#!" className="me-0 d-flex" >
                          <span className="fe fe-message-square text-muted me-2 tx-18"></span>
                          <div className="mt-0 mt-0 text-dark">6 Comments</div>
                        </Link>
                      </div>
                    </div>
                  </Card.Body>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card className=" custom-card">
            <Card.Body className="p-3">
              <Row className="g-0 blog-list">
                <Col xl={5} lg={12} md={12}>
                  <Card.Body className="p-0">
                    <div className="item-card-img">
                      <Link
                        href={`/components/apps/blog/blog-details`}
                      >
                        <img
                          className="card-img-left h-130 w-100 op-8"
                          src={blog4}
                          alt="user2"
                        />
                      </Link>
                    </div>
                  </Card.Body>
                </Col>
                <Col xl={7} lg={12} md={12}>
                  <Card.Body className="p-2">
                    <Link to={`/components/apps/blog/blog-details`}>
                      <h5 className="font-weight-semibold mt-3">
                        Teri Dactyl Certain
                      </h5>
                    </Link>
                    <p className="text">
                      I of human happiness. sint occaecat ccaecat cupidatat non
                      proident, sunt in culpa qui officia cupidatat non proident,
                      sunt in culpa qui officia deserunt No one rejects, dislikes,
                      or avoids pleasure itself, because it is pleasure.
                    </p>
                    <div className="media py-2 mt-0 border-top"></div>
                    <div className="item-card-desc d-flex">
                      <div className="main-avatar avatar online">
                        <img
                          alt="avatar"
                          className="rounded-circle"
                          src={user2}
                        />
                      </div>
                      <div className="main-contact-body">
                        <h6>Christian Lerio</h6>
                        <span className="phone">3 days ago</span>
                      </div>
                      <div className="ms-auto mb-2">
                        <Link to="#!" className="me-0 d-flex" >
                          <span className="fe fe-message-square text-muted me-2 tx-18"></span>
                          <div className="mt-0 mt-0 text-dark">5 Comments</div>
                        </Link>
                      </div>
                    </div>
                  </Card.Body>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card className=" custom-card">
            <Card.Body className="p-3">
              <Row className="g-0 blog-list">
                <Col xl={5} lg={12} md={12}>
                  <Card.Body className="p-0">
                    <div className="item-card-img">
                      <Link
                        href={`/components/apps/blog/blog-details`}
                      >
                        <img
                          className="card-img-left h-130 w-100 op-9"
                          src={blog3}
                          alt="blog3"
                        />
                      </Link>
                    </div>
                  </Card.Body>
                </Col>
                <Col xl={7} lg={12} md={12}>
                  <Card.Body className="p-2">
                    <Link to={`/components/apps/blog/blog-details`}>
                      <h5 className="font-weight-semibold mt-3">
                        Circumstances Certain claims
                      </h5>
                    </Link>
                    <p>
                      I of human happiness. sint occaecat ccaecat cupidatat non
                      proident, sunt in culpa qui officia cupidatat non proident,
                      sunt in culpa qui officia deserunt No one rejects, dislikes,
                      or avoids pleasure itself, because it is pleasure.
                    </p>
                    <div className="media py-2 mt-0 border-top"></div>
                    <div className="item-card-desc d-flex">
                      <div className="main-avatar avatar online">
                        <img
                          alt="avatar"
                          className="rounded-circle"
                          src={user5}
                        />
                      </div>
                      <div className="main-contact-body">
                        <h6>Christian Lerio</h6>
                        <span className="phone">3 days ago</span>
                      </div>
                      <div className="ms-auto mb-2">
                        <Link to="#!" className="me-0 d-flex" >
                          <span className="fe fe-message-square text-muted me-2 tx-18"></span>
                          <div className="mt-0 mt-0 text-dark">2 Comments</div>
                        </Link>
                      </div>
                    </div>
                  </Card.Body>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className=" row-sm">
        <Col xl={3} md={6}>
          <Card className=" custom-card">
            <Link to={`/components/apps/blog/blog-details`}>
              <img
                className="card-img-top w-100 blog-img"
                src={blog11}
                alt=""
              />
            </Link>
            <Card.Body>
              <h5 className="main-content-label mb-3 tx-16">
                Excepteur occaecat cupidatat
              </h5>
              <p className="card-text">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.
              </p>
              <Link to="#!" className="btn btn-sm ripple btn-primary d-inline-flex align-items-center">
                Read More<i className="fe fe-arrow-right ms-1"></i>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} xl={3}>
          <Card className=" custom-card">
            <Link to={`/components/apps/blog/blog-details`}>
              <img
                className="card-img-top w-100 blog-img"
                src={blog6}
                alt="blog6"
              />
            </Link>
            <Card.Body>
              <h5 className="main-content-label mb-3 tx-16">
                Teri Dactyl Certain
              </h5>
              <p className="card-text">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.
              </p>
              <Link to="#!" className="btn btn-sm ripple btn-primary d-inline-flex align-items-center">
                Read More<i className="fe fe-arrow-right ms-1"></i>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} xl={3}>
          <Card className=" custom-card">
            <Link to={`/components/apps/blog/blog-details`}>
              <img
                className="card-img-top w-100 blog-img op-9"
                src={blog1}
                alt=""
              />
            </Link>
            <Card.Body>
              <h5 className="main-content-label mb-3 tx-16">
                Circumstances Certain claims
              </h5>
              <p className="card-text">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.
              </p>
              <Link to="#!" className="btn btn-sm ripple btn-primary d-inline-flex align-items-center">
                Read More<i className="fe fe-arrow-right ms-1"></i>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} xl={3}>
          <Card className=" custom-card">
            <Link to={`/components/apps/blog/blog-details`}>
              <img className="card-img-top w-100 blog-img op-9" src={blog10} alt="blog10" />
            </Link>
            <Card.Body>
              <h5 className="main-content-label mb-3 tx-16">
                The standard chunk of Lorem
              </h5>
              <p className="card-text">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.
              </p>
              <Link to="#!" className="btn btn-sm ripple btn-primary d-inline-flex align-items-center">
                Read More<i className="fe fe-arrow-right ms-1"></i>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className=" row-sm">
        <Col lg={6}>
          <Card className=" card-aside custom-card">
            <Card.Body>
              <Link to={`/components/apps/blog/blog-details`}>
                <label className="main-content-label tx-16 mb-3">Blog Title</label>
              </Link>
              <div>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum.
              </div>
              <div className="d-flex align-items-center pt-3 mt-auto">
                <div className="main-img-user avatar-sm me-3">
                  <Link to={`/components/apps/blog/blog-details`}
                  >
                    <img src={user1} className="w-10 rounded-circle" alt="user1" />
                  </Link>
                </div>
                <div>
                  <Link to={`/components/apps/blog/blog-details`} className="text-default">
                    Alica Nestle
                  </Link>
                  <a><small className="d-block text-muted">15 mintues ago</small></a>
                </div>
                <div className="ms-auto text-muted">
                  <Link to="#!" className="icon d-none d-md-inline-block ms-3">
                    <i className="far fa-heart me-1"></i>
                  </Link>
                  <Link to="#!" className="icon d-none d-md-inline-block ms-3">
                    <i className="far fa-thumbs-up"></i>
                  </Link>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} className="col-lg-6">
          <Card className="card card-aside custom-card">
            <Card.Body>
              <Link to={`/components/apps/blog/blog-details`}>
                <label className="main-content-label tx-16 mb-3">Blog Title</label>
              </Link>
              <div>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum.
              </div>
              <div className="d-flex align-items-center pt-3 mt-auto">
                <div className="main-img-user avatar-sm me-3">
                  <Link to={`/components/apps/blog/blog-details`}>
                    <img src={user2} className="w-10 rounded-circle" alt="avatar-img" />
                  </Link>
                </div>
                <div>
                  <Link to={`/components/apps/blog/blog-details`} className="text-default">Alica Nestle</Link>
                  <small className="d-block text-muted">15 mintues ago</small>
                </div>
                <div className="ms-auto text-muted">
                  <Link to="#!" className="icon d-none d-md-inline-block ms-3">
                    <i className="far fa-heart me-1"></i>
                  </Link>
                  <Link to="#!" className="icon d-none d-md-inline-block ms-3">
                    <i className="far fa-thumbs-up"></i>
                  </Link>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  )
}

BlogPage.layout = "Contentlayout"


export default BlogPage