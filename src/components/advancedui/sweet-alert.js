import React from 'react'
import PageHeader from '../../shared/layout-components/page-header/page-header'
import { Breadcrumb, Button, Row, Card, Col } from "react-bootstrap";
import Swal from "sweetalert2";
import Seo from '../../shared/layout-components/seo/seo';

const media17 = "/assets/img/brand/logo.png"

const SweetAlert = () => {
  return (
    <>
      <Seo title="Sweet Alert" />

      <PageHeader title="Sweet Alert" item="Advanced UI" active_item="Sweet Alert" />

      {/* <!-- Row --> */}
      <div className="sidemenu-height">
        <Row className="row-sm ">
          <Col sm={6} md={6} lg={3}>
            <Card className="custom-card text-center">
              <Card.Body>
                <div>
                  <h6 className="main-content-label mb-1">Basic Alert</h6>
                  <p className="text-muted card-sub-title">A Basic Message</p>
                </div>
                <Button
                  variant="primary"
                  onClick={() => {
                    Swal.fire({
                      title: "Here is a title! ,All are available in the template",
                      allowOutsideClick: false,
                    });
                  }}
                  className="btn ripple"
                >
                  Click me !
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} md={6} lg={3}>
            <Card className="custom-card text-center">
              <Card.Body>
                <div>
                  <h6 className="main-content-label mb-1">Title alert</h6>
                  <p className="text-muted card-sub-title">
                    A title with a text under
                  </p>
                </div>
                <Button
                  variant="primary"
                  onClick={() => {
                    Swal.fire({
                      title: "Here is a title! ,All are available in the template",
                      allowOutsideClick: false,
                    });
                  }}
                  className="btn ripple"
                >
                  Click me !
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} md={6} lg={3}>
            <Card className="custom-card text-center">
              <Card.Body>
                <div>
                  <h6 className="main-content-label mb-1">Success alert</h6>
                  <p className="text-muted card-sub-title">A Success Message</p>
                </div>
                <Button
                  variant="primary"
                  onClick={() => {
                    Swal.fire({
                      icon: "success",
                      title: "Well done!",
                      text: "You Clicked Button",
                      allowOutsideClick: false,
                    });
                  }}
                  className="btn ripple"
                >
                  Click me !
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} md={6} lg={3}>
            <Card className="custom-card text-center">
              <Card.Body>
                <div>
                  <h6 className="main-content-label mb-1">Warning alert</h6>
                  <p className="text-muted card-sub-title">A warning message</p>
                </div>
                <Button
                  variant="primary"
                  onClick={() => {
                    Swal.fire({
                      title: "Are you sure?",
                      text: "Your will not be able to recover this imaginary file!",
                      icon: "warning",
                      showCancelButton: true,
                      confirmButtonColor: "#6259ca",
                      cancelButtonColor: "#6259ca",
                      confirmButtonText: "Yes, delete it!",
                      allowOutsideClick: false,
                    }).then((result) => {
                      if (result.isConfirmed) {
                        Swal.fire("Deleted!", "Your imaginary file has been deleted.", "success");
                      }
                    });
                  }}
                  className="btn ripple btn-primary"
                >
                  Click me !
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* <!-- End Row --> */}

        {/* <!-- Row --> */}
        <Row className="row-sm ">
          <Col sm={6} md={6} lg={3}>
            <Card className="custom-card text-center">
              <Card.Body>
                <div>
                  <h6 className="main-content-label mb-1">
                    Passing a parameter alert
                  </h6>
                  <p className="text-muted card-sub-title">
                    By passing a parameter
                  </p>
                </div>
                <Button
                  variant="primary"
                  onClick={() => {
                    const swalWithBootstrapButtons = Swal.mixin({
                      customClass: {
                        confirmButton: "btn btn-primary me-2",
                        cancelButton: "btn btn-primary me-2",
                        allowOutsideClick: false,
                      },
                      buttonsStyling: false,
                    });

                    swalWithBootstrapButtons
                      .fire({
                        title: "Are you sure?",
                        text: " You won't be able to revert this!",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonText: "Yes, delete it!",
                        cancelButtonText: "No, cancel!",
                        reverseButtons: true,
                        allowOutsideClick: false,
                      })
                      .then((result) => {
                        if (result.isConfirmed) {
                          swalWithBootstrapButtons.fire(
                            "Deleted!",
                            "Your file has been deleted.",
                            "success"
                          );
                        } else if (
                          /* Read more about handling dismissals below */
                          result.dismiss === Swal.DismissReason.cancel
                        ) {
                          swalWithBootstrapButtons.fire(
                            "Cancelled",
                            "Your imaginary file is safe :)",
                            "error"
                          );
                        }
                      });
                  }}
                  className="btn ripple"
                >
                  Click me !
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} md={6} lg={3}>
            <Card className="custom-card text-center">
              <Card.Body>
                <div>
                  <h6 className="main-content-label mb-1">Image alert</h6>
                  <p className="text-muted card-sub-title">
                    A message with custom Image
                  </p>
                </div>
                <Button
                  variant="primary"
                  onClick={() => {
                    Swal.fire({
                      title: "Sweet!",
                      text: "Modal with a custom image.",
                      imageUrl: media17 ,
                      imageWidth: 400,
                      imageHeight: 200,
                      imageAlt: "Custom image",
                      allowOutsideClick: false,
                    });
                  }}
                  className="btn ripple"
                >
                  Click me !
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} md={6} lg={3}>
            <Card className="custom-card text-center">
              <Card.Body>
                <div>
                  <h6 className="main-content-label mb-1">Timer alert</h6>
                  <p className="text-muted card-sub-title">
                    A message with auto close timer
                  </p>
                </div>
                <Button
                  variant="primary"
                  onClick={() => {
                    let timerInterval;
                    Swal.fire({
                      title: "Auto close alert!",
                      html: "I will close in <b></b> milliseconds.",
                      timer: 2000,
                      timerProgressBar: false,
                      allowOutsideClick: false,
                      didOpen: () => {
                        Swal.showLoading();
                        const b = Swal.getHtmlContainer().querySelector("b");
                        timerInterval = setInterval(() => {
                          b.textContent = Swal.getTimerLeft();
                        }, 100);
                      },
                      willClose: () => {
                        clearInterval(timerInterval);
                      },
                    }).then((result) => {
                      /* Read more about handling dismissals below */
                      if (result.dismiss === Swal.DismissReason.timer) {
                        console.log("I was closed by the timer");
                      }
                    });
                  }}
                  className="btn ripple"
                >
                  Click me !
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} md={6} lg={3}>
            <Card className="custom-card text-center">
              <Card.Body>
                <div>
                  <h6 className="main-content-label mb-1">File Alert</h6>
                  <p className="text-muted card-sub-title">
                    With a Fileupload (for Input Types)
                  </p>
                </div>
                <Button
                  variant="primary"
                  onClick={() => {
                    (async () => {
                      const { value: file } = await Swal.fire({
                        title: "Select image",
                        input: "file",
                        allowOutsideClick: false,
                        inputAttributes: {
                          accept: "image",
                          "aria-label": "Upload your profile picture",
                        },
                      });

                      if (file) {
                        const reader = new FileReader();
                        reader.onload = (e) => {
                          Swal.fire({
                            title: "Your uploaded picture",
                            imageUrl: e.target.result,
                            imageAlt: "The uploaded picture",
                          });
                        };
                        reader.readAsDataURL(file);
                      }
                    })()
                  }}
                  className="btn ripple"
                >
                  Click me !
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
      {/* <!-- End Row --> */}
    </>
  )
}
SweetAlert.layout = "Contentlayout"

export default SweetAlert