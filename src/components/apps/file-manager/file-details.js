import React from 'react'
import PageHeader from '../../../shared/layout-components/page-header/page-header'
import { Breadcrumb, Card, Col, Row, Table } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import Seo from '../../../shared/layout-components/seo/seo';


//images

const img3 = "/assets/img/files/img-3.jpg"
const img9 = "/assets/img/files/img-9.jpg"
const img8 = "/assets/img/files/img-8.jpg"
const img7 = "/assets/img/files/img-7.jpg"
const img6 = "/assets/img/files/img-6.jpg"
const img5 = "/assets/img/files/img-5.jpg"
const img4 = "/assets/img/files/img-4.jpg"
const img2 = "/assets/img/files/img-2.jpg"
const img1 = "/assets/img/files/img-1.jpg"
const blogdetails = "/assets/img/media/blog-details.jpg"




function SampleNextArrow1(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",

        fontSize: "1.3rem",
        borderRadius: "50%",
        width: "3rem",
        height: "3rem",
        textAlign: "center",
        background: "rgb(255 255 255)",
        border: "1px solid #e8ebf3 !important",
        zIndex: "99",
        boxShadow: "0 4px 15px rgb(67 67 67 / 15%)",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow1(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "rgb(255 255 255)",
        // height: "20px",
        fontSize: "1.3rem",
        borderRadius: "50%",
        width: "3rem",
        height: "3rem",
        textAlign: "center",

        border: "1px solid #e8ebf3 !important",
        zIndex: "99",
        boxShadow: "0 4px 15px rgb(67 67 67 / 15%)",
      }}
      onClick={onClick}
    />
  );
}

const FileDetails = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: true,
    ltr: true,
    nextArrow: <SampleNextArrow1 />,
    prevArrow: <SamplePrevArrow1 />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Seo title="File Details" />

      <PageHeader title="File-Details" item="Elements" active_item="File-Details" />

      <Row className=" row-sm">
        <Col xl={8} lg={12} md={12}>
          <Card className=" custom-card overflow-hidden">
            <Card.Body className=" px-4 pt-4">
              <Link to="#!">
                <img src={blogdetails} alt="img" className="rounded-5 w-100" />
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={4} lg={12} md={12}>
          <Card className=" custom-card">
            <Card.Body className=" card-body ">
              <h5 className="mb-3">File details :</h5>
              <div className="table">
                <Row>
                  <Col xl={12}>
                    <div className="table-responsive">
                      <Table className="table mb-0 border-top table-bordered text-nowrap">
                        <tbody>
                          <tr>
                            <th scope="row">File-name</th>
                            <td>image.jpg</td>
                          </tr>
                          <tr>
                            <th scope="row">File-size</th>
                            <td>12.45mb</td>
                          </tr>
                          <tr>
                            <th scope="row">uploaded-date</th>
                            <td>01-12-2020</td>
                          </tr>
                          <tr>
                            <th scope="row">uploaded-by</th>
                            <td>prityy abodh</td>
                          </tr>
                          <tr>
                            <th scope="row">image-width</th>
                            <td>1000</td>
                          </tr>
                          <tr>
                            <th scope="row">image-height</th>
                            <td>600</td>
                          </tr>
                          <tr>
                            <th scope="row">File-formate</th>
                            <td>jpg</td>
                          </tr>
                          <tr>
                            <th scope="row">File-location</th>
                            <td>storage/photos/image.jpg</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </Col>
                </Row>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={8} lg={12} md={12}>
          <div className=" multiside filedetails-slide mb-4">
            <Slider {...settings}>

              <div className="item">
                <div className="card">
                  <Card className=" custom-card overflow-hidden mb-0 ">
                    <Link to="#!">
                      <img src={img3} alt="img" /></Link>
                    <Card.Footer className="bd-t-0 py-3">
                      <div className="d-flex">
                        <div>
                          <h6 className="mb-0">221.jpg</h6>
                        </div>
                        <div className="ms-auto">
                          <h6 className="text-muted mb-0">120 KB</h6>
                        </div>
                      </div>
                    </Card.Footer>
                  </Card>
                </div>
              </div>
              <div className="item">
                <div className="card">
                  <Card className=" custom-card overflow-hidden mb-0 ">
                    <Link to="#!"><img src={img9} alt="img" /></Link>
                    <Card.Footer className="bd-t-0 py-3">
                      <div className="d-flex">
                        <div>
                          <h6 className="mb-0">221.jpg</h6>
                        </div>
                        <div className="ms-auto">
                          <h6 className="text-muted mb-0">120 KB</h6>
                        </div>
                      </div>
                    </Card.Footer>
                  </Card>
                </div>
              </div>
              <div className="item">
                <div className="card">
                  <Card className="card custom-card overflow-hidden mb-0 ">
                    <Link to="#!"><img src={img8} alt="img" /></Link>
                    <Card.Footer className="bd-t-0 py-3">
                      <div className="d-flex">
                        <div>
                          <h6 className="mb-0">221.jpg</h6>
                        </div>
                        <div className="ms-auto">
                          <h6 className="text-muted mb-0">120 KB</h6>
                        </div>
                      </div>
                    </Card.Footer>
                  </Card>
                </div>
              </div>
              <div className="item">
                <div className="card">
                  <Card className="card custom-card overflow-hidden mb-0">
                    <Link to="#!"><img src={img7} alt="img" /></Link>
                    <Card.Footer className="bd-t-0 py-3">
                      <div className="d-flex">
                        <div>
                          <h6 className="mb-0">221.jpg</h6>
                        </div>
                        <div className="ms-auto">
                          <h6 className="text-muted mb-0">120 KB</h6>
                        </div>
                      </div>
                    </Card.Footer>
                  </Card>
                </div>
              </div>
              <div className="item">
                <div className="card">
                  <Card className="card custom-card overflow-hidden mb-0 ">
                    <Link to="#!"><img src={img6} alt="img" /></Link>
                    <Card.Footer className="bd-t-0 py-3">
                      <div className="d-flex">
                        <div>
                          <h6 className="mb-0">221.jpg</h6>
                        </div>
                        <div className="ms-auto">
                          <h6 className="text-muted mb-0">120 KB</h6>
                        </div>
                      </div>
                    </Card.Footer>
                  </Card>
                </div>
              </div>
              <div className="item">
                <div className="card">
                  <Card className="card custom-card overflow-hidden mb-0 ">
                    <Link to="#!"><img src={img5} alt="img" /></Link>
                    <Card.Footer className="bd-t-0 py-3">
                      <div className="d-flex">
                        <div>
                          <h6 className="mb-0">221.jpg</h6>
                        </div>
                        <div className="ms-auto">
                          <h6 className="text-muted mb-0">120 KB</h6>
                        </div>
                      </div>
                    </Card.Footer>
                  </Card>
                </div>
              </div>
              <div className="item">
                <div className="card">
                  <Card className="card custom-card overflow-hidden mb-0 ">
                    <Link to="#!"><img src={img4} alt="img" /></Link>
                    <Card.Footer className="bd-t-0 py-3">
                      <div className="d-flex">
                        <div>
                          <h6 className="mb-0">221.jpg</h6>
                        </div>
                        <div className="ms-auto">
                          <h6 className="text-muted mb-0">120 KB</h6>
                        </div>
                      </div>
                    </Card.Footer>
                  </Card>
                </div>
              </div>
              <div className="item">
                <div className="card">
                  <Card className="card custom-card overflow-hidden mb-0 ">
                    <Link to="#!"><img src={img2} alt="img" /></Link>
                    <Card.Footer className="bd-t-0 py-3">
                      <div className="d-flex">
                        <div>
                          <h6 className="mb-0">221.jpg</h6>
                        </div>
                        <div className="ms-auto">
                          <h6 className="text-muted mb-0">120 KB</h6>
                        </div>
                      </div>
                    </Card.Footer>
                  </Card>
                </div>
              </div>
              <div className="item">
                <div className="card">
                  <Card className="card custom-card overflow-hidden mb-0 ">
                    <Link to="#!"><img src={img1} alt="img" /></Link>
                    <Card.Footer className="bd-t-0 py-3">
                      <div className="d-flex">
                        <div>
                          <h6 className="mb-0">221.jpg</h6>
                        </div>
                        <div className="ms-auto">
                          <h6 className="text-muted mb-0">120 KB</h6>
                        </div>
                      </div>
                    </Card.Footer>
                  </Card>
                </div>
              </div>

            </Slider>
          </div>
        </Col>
        <Col xl={4} lg={12} md={12}>
          <Card className=" custom-card">
            <Card.Body>
              <h5 className="mb-3">Recent Files</h5>
              <Row className="row row-sm">
                <Col xl={3} >
                  <div className="card custom-card">
                    <img src={img8} alt="img" height="100%" width="100%" className="rounded-5" />
                  </div>
                </Col>
                <Col xl={3} >
                  <div className="card custom-card">
                    <img src={img6} alt="img" height="100%" width="100%" className="rounded-5" />
                  </div>
                </Col>
                <Col xl={3} >
                  <div className="card custom-card">
                    <img src={img7} alt="img" height="100%" width="100%" className="rounded-5" />
                  </div>
                </Col>
                <Col xl={3} >
                  <div className="card custom-card">
                    <img src={img2} alt="img" height="100%" width="100%" className="rounded-5" />
                  </div>
                </Col>
                <Col xl={3} >
                  <div className="card custom-card">
                    <img src={img5} alt="img" height="100%" width="100%" className="rounded-5" />
                  </div>
                </Col>
                <Col xl={3} >
                  <div className="card custom-card">
                    <img src={img4} alt="img" height="100%" width="100%" className="rounded-5" />
                  </div>
                </Col>
                <Col xl={3} >
                  <div className="card custom-card">
                    <img src={img3} alt="img" height="100%" width="100%" className="rounded-5" />
                  </div>
                </Col>
                <Col xl={3} >
                  <div className="card custom-card">
                    <img src={img9} alt="img" height="100%" width="100%" className="rounded-5" />
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  )
}
FileDetails.layout = "Contentlayout"

export default FileDetails