import React from 'react'
import PageHeader from '../../shared/layout-components/page-header/page-header'
import PerfectScrollbar from "react-perfect-scrollbar";
import { Tabs, OverlayTrigger, Tooltip, Tab, Row, Col, Card, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';;
import Seo from '../../shared/layout-components/seo/seo';


//Images 

const users2 = "/assets/img/users/2.jpg"
const users3 = "/assets/img/users/3.jpg"
const users4 = "/assets/img/users/4.jpg"
const users5 = "/assets/img/users/5.jpg"
const users6 = "/assets/img/users/6.jpg"
const users7 = "/assets/img/users/7.jpg"
const users8 = "/assets/img/users/8.jpg"
const users9 = "/assets/img/users/9.jpg"
const users10 = "/assets/img/users/10.jpg"
const users1 = "/assets/img/users/1.jpg"
const users11 = "/assets/img/users/11.jpg"
const users12 = "/assets/img/users/12.jpg"

const Contacts = () => {
  return (
    <>
      <Seo title="Contacts" />

      <PageHeader title="Contacts" item="Advanced UI" active_item="Contacts" />

      {/* <!-- Row --> */}
      <Row className="row-sm">
        <Col sm={12} md={5} xl={4}>
          <Card className="custom-card overflow-hidden">
            <div>
              <div className="main-content-app main-content-contacts pt-0">
                <Card className="main-content-left main-content-left-contacts">
                  <div className="tab-menu-heading">
                    <div className="tabs-menu1 ">
                      <Tabs
                        defaultActiveKey="All Contacts"
                        transition={false}
                        className="nav panel-tabs main-nav-line main-nav-line-chat d-flex ps-3 border-bottom"
                      >
                        <Tab
                          eventKey="All Contacts"
                          title="All Contacts"
                        >
                          <PerfectScrollbar>
                            <div
                              className="main-contacts-list"
                              id="mainContactList"
                            >
                              <div className="main-contact-label">A</div>
                              <div className="main-contact-item selected">
                                <div className="main-img-user online">
                                  <img alt="avatar" src={users2} />
                                </div>
                                <div className="main-contact-body">
                                  <h6>Abigail Johnson</h6>
                                  <span className="phone">+1-234-567-890</span>
                                </div>
                                <Link className="main-contact-star" href="#!">
                                  <i className="fe fe-star me-1 text-warning"></i>
                                  <i className="fe fe-edit-2 me-1"></i>
                                  <i className="fe fe-more-vertical"></i>
                                </Link>
                              </div>
                              <div className="main-contact-item">
                                <div className="main-img-user">
                                  <img alt="avatar" src={users3} />
                                </div>
                                <div className="main-contact-body">
                                  <h6>Archie Cantones</h6>
                                  <span>archie@cantones.com</span>
                                </div>
                                <Link className="main-contact-star" href="#!">
                                  <i className="fe fe-star me-1"></i>
                                  <i className="fe fe-edit-2 me-1"></i>
                                  <i className="fe fe-more-vertical"></i>
                                </Link>
                              </div>
                              <div className="main-contact-item">
                                <div className="main-avatar online">A</div>
                                <div className="main-contact-body">
                                  <h6>Allan Rey Palban</h6>
                                  <span>allanr@palban.com</span>
                                </div>
                                <Link className="main-contact-star" href="#!">
                                  <i className="fe fe-star me-1"></i>
                                  <i className="fe fe-edit-2 me-1"></i>
                                  <i className="fe fe-more-vertical"></i>
                                </Link>
                              </div>
                              <div className="main-contact-item">
                                <div className="main-avatar bg-secondary">A</div>
                                <div className="main-contact-body">
                                  <h6>Aileen Mante</h6>
                                  <span>+1-234-567-890</span>
                                </div>
                                <Link className="main-contact-star" href="#!">
                                  <i className="fe fe-star me-1"></i>
                                  <i className="fe fe-edit-2 me-1"></i>
                                  <i className="fe fe-more-vertical"></i>
                                </Link>
                              </div>
                              <div className="main-contact-label">B</div>
                              <div className="main-contact-item">
                                <div className="main-img-user">
                                  <img alt="avatar" src={users4} />
                                </div>
                                <div className="main-contact-body">
                                  <h6>Brandon Dilao</h6>
                                  <span>+1-234-567-890</span>
                                </div>
                                <Link className="main-contact-star" href="#!">
                                  <i className="fe fe-star me-1"></i>
                                  <i className="fe fe-edit-2 me-1"></i>
                                  <i className="fe fe-more-vertical"></i>
                                </Link>
                              </div>
                              <div className="main-contact-item">
                                <div className="main-img-user online">
                                  <img alt="avatar" src={users5} />
                                </div>
                                <div className="main-contact-body">
                                  <h6>Britney Labares</h6>
                                  <span>+1-234-567-890</span>
                                </div>
                                <Link className="main-contact-star" href="#!">
                                  <i className="fe fe-star me-1"></i>
                                  <i className="fe fe-edit-2 me-1"></i>
                                  <i className="fe fe-more-vertical"></i>
                                </Link>
                              </div>
                              <div className="main-contact-item">
                                <div className="main-avatar bg-danger">B</div>
                                <div className="main-contact-body">
                                  <h6>Brateyley Cruz</h6>
                                  <span>+1-234-567-890</span>
                                </div>
                                <Link className="main-contact-star" href="#!">
                                  <i className="fe fe-star me-1"></i>
                                  <i className="fe fe-edit-2 me-1"></i>
                                  <i className="fe fe-more-vertical"></i>
                                </Link>
                              </div>
                              <div className="main-contact-label">C</div>
                              <div className="main-contact-item">
                                <div className="main-img-user">
                                  <img alt="avatar" src={users6} />
                                </div>
                                <div className="main-contact-body">
                                  <h6>Camille Audrey</h6>
                                  <span>+1-234-567-890</span>
                                </div>
                                <Link className="main-contact-star" href="#!">
                                  <i className="fe fe-star me-1"></i>
                                  <i className="fe fe-edit-2 me-1"></i>
                                  <i className="fe fe-more-vertical"></i>
                                </Link>
                              </div>
                              <div className="main-contact-item">
                                <div className="main-img-user online">
                                  <img alt="avatar" src={users7} />
                                </div>
                                <div className="main-contact-body">
                                  <h6>Christian Lerio</h6>
                                  <span>+1-234-567-890</span>
                                </div>
                                <Link className="main-contact-star" href="#!">
                                  <i className="fe fe-star me-1"></i>
                                  <i className="fe fe-edit-2 me-1"></i>
                                  <i className="fe fe-more-vertical"></i>
                                </Link>
                              </div>
                              <div className="main-contact-item">
                                <div className="main-img-user online">
                                  <img alt="avatar" src={users8} />
                                </div>
                                <div className="main-contact-body">
                                  <h6>Christopher Segovia</h6>
                                  <span>+1-234-567-890</span>
                                </div>
                                <Link className="main-contact-star" href="#!">
                                  <i className="fe fe-star me-1"></i>
                                  <i className="fe fe-edit-2 me-1"></i>
                                  <i className="fe fe-more-vertical"></i>
                                </Link>
                              </div>
                              <div className="main-contact-label">D</div>
                              <div className="main-contact-item">
                                <div className="main-img-user online">
                                  <img alt="avatar" src={users9} />
                                </div>
                                <div className="main-contact-body">
                                  <h6>Darius Clayton</h6>
                                  <span>+1-234-567-890</span>
                                </div>
                                <Link className="main-contact-star" href="#!">
                                  <i className="fe fe-star me-1"></i>
                                  <i className="fe fe-edit-2 me-1"></i>
                                  <i className="fe fe-more-vertical"></i>
                                </Link>
                              </div>
                              <div className="main-contact-item">
                                <div className="main-img-user">
                                  <img alt="user10" src={users10} />
                                </div>
                                <div className="main-contact-body">
                                  <h6>Dyanne Aceron</h6>
                                  <span>+1-234-567-890</span>
                                </div>
                                <Link className="main-contact-star" href="#!">
                                  <i className="fe fe-star me-1"></i>
                                  <i className="fe fe-edit-2 me-1"></i>
                                  <i className="fe fe-more-vertical"></i>
                                </Link>
                              </div>
                              <div className="main-contact-item">
                                <div className="main-img-user online">
                                  <img alt="user1" src={users1} />
                                </div>
                                <div className="main-contact-body">
                                  <h6>Divina Gracia</h6>
                                  <span>+1-234-567-890</span>
                                </div>
                                <Link className="main-contact-star" href="#!">
                                  <i className="fe fe-star me-1"></i>
                                  <i className="fe fe-edit-2 me-1"></i>
                                  <i className="fe fe-more-vertical"></i>
                                </Link>
                              </div>
                            </div>
                          </PerfectScrollbar>
                        </Tab>
                        <Tab eventKey="Favorites" title=" Favorites">
                          <PerfectScrollbar>
                            <div
                              className="main-contacts-list"
                              id="mainContactList1"
                            >
                              <div className="main-contact-label">A</div>
                              <div className="main-contact-item selected">
                                <div className="main-img-user online">
                                  <img alt="user11" src={users11} />
                                </div>
                                <div className="main-contact-body">
                                  <h6>Anna Sthesia</h6>
                                  <span className="phone">+1-534-567-456</span>
                                </div>
                                <Link className="main-contact-star" href="#!">
                                  <i className="fe fe-star me-1 text-warning"></i>
                                  <i className="fe fe-edit-2 me-1"></i>
                                  <i className="fe fe-more-vertical"></i>
                                </Link>
                              </div>
                              <div className="main-contact-item">
                                <div className="main-img-user">
                                  <img alt="user11" src={users8} />
                                </div>
                                <div className="main-contact-body">
                                  <h6>Anna Mull</h6>
                                  <span>annamul@gmail.com</span>
                                </div>
                                <Link className="main-contact-star" href="#!">
                                  <i className="fe fe-star me-1 text-warning"></i>
                                  <i className="fe fe-edit-2 me-1"></i>
                                  <i className="fe fe-more-vertical"></i>
                                </Link>
                              </div>
                              <div className="main-contact-item">
                                <div className="main-img-user">
                                  <img alt="user4" src={users4} />
                                </div>
                                <div className="main-contact-body">
                                  <h6>AlFredo</h6>
                                  <span>alfredo@gmail.com</span>
                                </div>
                                <Link className="main-contact-star" href="#!">
                                  <i className="fe fe-star me-1 text-warning"></i>
                                  <i className="fe fe-edit-2 me-1"></i>
                                  <i className="fe fe-more-vertical"></i>
                                </Link>
                              </div>
                              <div className="main-contact-item">
                                <div className="main-img-user">
                                  <img alt="user11" src={users11} />
                                </div>
                                <div className="main-contact-body">
                                  <h6>Aileen Mante</h6>
                                  <span>+1-234-567-890</span>
                                </div>
                                <Link className="main-contact-star" href="#!">
                                  <i className="fe fe-star me-1 text-warning"></i>
                                  <i className="fe fe-edit-2 me-1"></i>
                                  <i className="fe fe-more-vertical"></i>
                                </Link>
                              </div>
                              <div className="main-contact-label">B</div>
                              <div className="main-contact-item">
                                <div className="main-img-user">
                                  <img alt="avatar" src={users5} />
                                </div>
                                <div className="main-contact-body">
                                  <h6>Bernadette</h6>
                                  <span>+1-234-567-890</span>
                                </div>
                                <Link className="main-contact-star" href="#!">
                                  <i className="fe fe-star me-1 text-warning"></i>
                                  <i className="fe fe-edit-2 me-1"></i>
                                  <i className="fe fe-more-vertical"></i>
                                </Link>
                              </div>
                              <div className="main-contact-item">
                                <div className="main-img-user online">
                                  <img alt="avatar" src={users9} />
                                </div>
                                <div className="main-contact-body">
                                  <h6>Barry Mundy</h6>
                                  <span>+1-234-567-890</span>
                                </div>
                                <Link className="main-contact-star" href="#!">
                                  <i className="fe fe-star me-1 text-warning"></i>
                                  <i className="fe fe-edit-2 me-1"></i>
                                  <i className="fe fe-more-vertical"></i>
                                </Link>
                              </div>
                              <div className="main-contact-item">
                                <div className="main-avatar bg-danger">B</div>
                                <div className="main-contact-body">
                                  <h6>Barb Akew</h6>
                                  <span>+1-234-567-890</span>
                                </div>
                                <Link className="main-contact-star" href="#!">
                                  <i className="fe fe-star me-1 text-warning"></i>
                                  <i className="fe fe-edit-2 me-1"></i>
                                  <i className="fe fe-more-vertical"></i>
                                </Link>
                              </div>
                              <div className="main-contact-label">C</div>
                              <div className="main-contact-item">
                                <div className="main-img-user">
                                  <img alt="user11" src={users12} />
                                </div>
                                <div className="main-contact-body">
                                  <h6>Charles</h6>
                                  <span>+1-234-567-890</span>
                                </div>
                                <Link className="main-contact-star" href="#!">
                                  <i className="fe fe-star me-1 text-warning"></i>
                                  <i className="fe fe-edit-2 me-1"></i>
                                  <i className="fe fe-more-vertical"></i>
                                </Link>
                              </div>
                              <div className="main-contact-item">
                                <div className="main-img-user online">
                                  <img alt="user8" src={users8} />
                                </div>
                                <div className="main-contact-body">
                                  <h6>Christopher</h6>
                                  <span>+1-234-567-890</span>
                                </div>
                                <Link className="main-contact-star" href="#!">
                                  <i className="fe fe-star me-1 text-warning"></i>
                                  <i className="fe fe-edit-2 me-1"></i>
                                  <i className="fe fe-more-vertical"></i>
                                </Link>
                              </div>
                              <div className="main-contact-item">
                                <div className="main-img-user online">
                                  <img alt="user3" src={users3} />
                                </div>
                                <div className="main-contact-body">
                                  <h6>Connor</h6>
                                  <span>+1-234-567-890</span>
                                </div>
                                <Link className="main-contact-star" href="#!">
                                  <i className="fe fe-star me-1 text-warning"></i>
                                  <i className="fe fe-edit-2 me-1"></i>
                                  <i className="fe fe-more-vertical"></i>
                                </Link>
                              </div>
                              <div className="main-contact-label">D</div>
                              <div className="main-contact-item">
                                <div className="main-img-user online">
                                  <img alt="user1" src={users1} />
                                </div>
                                <div className="main-contact-body">
                                  <h6>Deirdre</h6>
                                  <span>+1-234-567-890</span>
                                </div>
                                <Link href="#!" className="main-contact-star">
                                  <i className="fe fe-star me-1 text-warning"></i>
                                  <i className="fe fe-edit-2 me-1"></i>
                                  <i className="fe fe-more-vertical"></i>
                                </Link>
                              </div>
                              <div className="main-contact-item">
                                <div className="main-img-user">
                                  <img
                                    alt="avatar"
                                    src={users8}
                                  />
                                </div>
                                <div className="main-contact-body">
                                  <h6>Dorothy</h6>
                                  <span>+1-234-567-890</span>
                                </div>
                                <Link href="#!" className="main-contact-star">
                                  <i className="fe fe-star me-1 text-warning"></i>
                                  <i className="fe fe-edit-2 me-1"></i>
                                  <i className="fe fe-more-vertical"></i>
                                </Link>
                              </div>
                              <div className="main-contact-item">
                                <div className="main-img-user online">
                                  <img alt="avatar" src={users7} />
                                </div>
                                <div className="main-contact-body">
                                  <h6>Divina Gracia</h6>
                                  <span>+1-234-567-890</span>
                                </div>
                                <Link href="#!" className="main-contact-star">
                                  <i className="fe fe-star me-1 text-warning"></i>
                                  <i className="fe fe-edit-2 me-1"></i>
                                  <i className="fe fe-more-vertical"></i>
                                </Link>
                              </div>
                            </div>
                          </PerfectScrollbar>
                        </Tab>
                      </Tabs>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </Card>
        </Col>
        <Col sm={12} md={7} xl={8}>
          <Card className="custom-card">
            <div>
              <div className="main-content-body main-content-body-contacts">
                <div className="main-contact-info-header pt-3">
                  <div className="media">
                    <div className="main-img-user">
                      <img alt="avatar" src={users1} />
                      <Link to="#!">
                        <i className="fe fe-camera"></i>
                      </Link>
                    </div>
                    <div className="media-body">
                      <h4>Sonia Taylor</h4>
                      <p>Web Designer</p>
                      <Nav className="contact-info">
                        <OverlayTrigger placement="top" overlay={<Tooltip>Call</Tooltip>}>
                          <Nav.Link className="contact-icon border tx-inverse me-1 ms-0">
                            <i className="fe fe-phone me-0"></i>
                          </Nav.Link>
                        </OverlayTrigger>

                        <OverlayTrigger placement="top" overlay={<Tooltip>Message</Tooltip>}>
                          <Nav.Link className="contact-icon border tx-inverse me-1 ms-0">
                            <i className="fe fe-message-square me-0"></i>
                          </Nav.Link>
                        </OverlayTrigger>

                        <OverlayTrigger placement="top" overlay={<Tooltip>Add to Group</Tooltip>}>
                          <Nav.Link className="contact-icon border tx-inverse me-1 ms-0">
                            <i className="fe fe-user-plus me-0"></i>
                          </Nav.Link>
                        </OverlayTrigger>
                        <OverlayTrigger placement="top" overlay={<Tooltip>Video</Tooltip>}>
                          <Nav.Link className="contact-icon border tx-inverse me-1 ms-0">
                            <i className="fe  fe-video me-0"></i>
                          </Nav.Link>
                        </OverlayTrigger>
                        <OverlayTrigger placement="top" overlay={<Tooltip>Block</Tooltip>}>
                          <Nav.Link className="contact-icon border tx-inverse me-1 ms-0">
                            <i className="fe fe-slash me-0"></i>
                          </Nav.Link>
                        </OverlayTrigger>
                      </Nav>
                    </div>
                  </div>
                  <div className="main-contact-action btn-list pt-3 pe-3">


                    <OverlayTrigger
                      placement="top" overlay={<Tooltip>Edit Profile</Tooltip>}>
                      <Nav.Link className="p-0 me-2">
                        <i className="fe fe-edit btn ripple btn-primary text-white btn-icon"></i>
                      </Nav.Link>
                    </OverlayTrigger>

                    <OverlayTrigger
                      placement="top" overlay={<Tooltip> Delete Profile</Tooltip>}>
                      <Nav.Link className="p-0">
                        <i className="fe fe-trash-2 btn ripple btn-secondary text-white btn-icon"></i>
                      </Nav.Link>
                    </OverlayTrigger>
                  </div>
                </div>
                <div className="main-contact-info-body">
                  <div>
                    <h6>Biography</h6>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                      aut fugit, sed quia consequuntur magni dolores eos qui
                      ratione voluptatem sequi nesciunt.
                    </p>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                      aut fugit, sed quia consequuntur magni dolores eos qui
                      ratione voluptatem sequi nesciunt.
                    </p>
                  </div>
                  <div className="media-list">
                    <div className="media">
                      <div className="media-body">
                        <div>
                          <label>Work</label>
                          <span className="tx-medium">+1 (234) 567 8901</span>
                        </div>
                        <div>
                          <label>Personal</label>
                          <span className="tx-medium">+1 (498) 021 0090</span>
                        </div>
                      </div>
                    </div>
                    <div className="media">
                      <div className="media-body">
                        <div>
                          <label>Gmail Account</label>
                          <span className="tx-medium">
                            sonia.taylor@gmail.com
                          </span>
                        </div>
                        <div>
                          <label>Other Account</label>
                          <span className="tx-medium">me@bootstrapdash.me</span>
                        </div>
                      </div>
                    </div>
                    <div className="media">
                      <div className="media-body">
                        <div>
                          <label>Current Address</label>
                          <span className="tx-medium">
                            012 Dashboard Apartments, San Francisco, California
                            13245
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="media mb-0">
                      <div className="media-body">
                        <div>
                          <label>Call History</label>
                          <span className="tx-medium">
                            Duration of last call: 2m 32sec
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
      {/* <!-- End Row --> */}
    </>
  )
}
Contacts.layout = "Contentlayout"

export default Contacts