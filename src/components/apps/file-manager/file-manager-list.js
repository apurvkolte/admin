import React from 'react'
import PageHeader from '../../../shared/layout-components/page-header/page-header'
import { Breadcrumb, Card, Col, Pagination, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


//images
const folder = "/assets/img/files/folder.png"
const word = "/assets/img/files/word.png"
const doc = "/assets/img/files/doc.png"
const file = "/assets/img/files/file.png"
const file2 = "/assets/img/files/file2.png"
const imge1 = "/assets/img/files/img-1.jpg"
const imge2 = "/assets/img/files/img-2.jpg"
const imge3 = "/assets/img/files/img-3.jpg"
const imge4 = "/assets/img/files/img-4.jpg"
const imge5 = "/assets/img/files/img-5.jpg"
const imge6 = "/assets/img/files/img-6.jpg"
const imge7 = "/assets/img/files/img-7.jpg"
const imge8 = "/assets/img/files/img-8.jpg"
const imge9 = "/assets/img/files/img-9.jpg"
import Seo from '../../../shared/layout-components/seo/seo';

const FileManagerList = () => {
	return (
		<>
			<Seo title="File Manager List" />

			<PageHeader title="File-manager-list" item="Apps" active_item="File-manager-list" />

			{/* <!-- Row --> */}
			<Row>
				<Col xl={2} md={3} lg={6}
				>
					<Card className=" custom-card border shadow-none">
						<Card.Body className="text-center">
							<div className="file-manger-icon">
								<Link href={`/components/apps/file-manager/file-details`} >
									<div className="br-7">
										<img src={folder} alt="img" />
									</div>
								</Link>
							</div>
							<h6 className="mb-1 font-weight-semibold mt-0">videos</h6>
							<span className="text-muted">4.23gb</span>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={2} md={3} lg={6}
				>
					<Card className="custom-card border p-0 shadow-none">
						<Card.Body className="text-center">
							<div className="file-manger-icon">
								<Link href={`/components/apps/file-manager/file-details`} >
									<img src={folder} alt="img" className="br-7" />
								</Link>
							</div>
							<h6 className="mb-1 font-weight-semibold mt-0">images</h6>
							<span className="text-muted">4.23gb</span>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={2} md={3} lg={6}
				>
					<Card className="custom-card border p-0 shadow-none">
						<Card.Body className="text-center">
							<div className="file-manger-icon">
								<Link href={`/components/apps/file-manager/file-details`} ><img src={word} alt="img" className="br-7" /></Link>
							</div>
							<h6 className="mb-1 font-weight-semibold mt-0">Documents</h6>
							<span className="text-muted">4.23gb</span>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={2} md={3} lg={6}
				>
					<Card className="custom-card border p-0 shadow-none">
						<Card.Body className="text-center">
							<div className="file-manger-icon">
								<Link href={`/components/apps/file-manager/file-details`} ><img src={word} alt="img" className="br-7" /></Link>
							</div>
							<h6 className="mb-1 font-weight-semibold mt-0">Documents</h6>
							<span className="text-muted">4.23gb</span>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={2} md={3} lg={6}
				>
					<Card className="custom-card border p-0 shadow-none">
						<Card.Body className="text-center">
							<div className="file-manger-icon">
								<Link href={`/components/apps/file-manager/file-details`}><img src={word} alt="img" className="br-7" /></Link>
							</div>
							<h6 className="mb-1 font-weight-semibold mt-0">Documents</h6>
							<span className="text-muted">4.23gb</span>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={2} md={3} lg={6}
				>
					<Card className="custom-card border p-0 shadow-none">
						<Card.Body className="text-center">
							<div className="file-manger-icon">
								<Link href={`/components/apps/file-manager/file-details`}><img src={doc} alt="img" className="br-7" /></Link>
							</div>
							<h6 className="mb-1 font-weight-semibold mt-0">Documents</h6>
							<span className="text-muted">4.23gb</span>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={2} md={3} lg={6}
				>
					<Card className="custom-card border p-0 shadow-none">
						<Card.Body className="text-center">
							<div className="file-manger-icon">
								<Link href={`/components/apps/file-manager/file-details`}><img src={doc} alt="img" className="br-7" /></Link>
							</div>
							<h6 className="mb-1 font-weight-semibold mt-0">Documents</h6>
							<span className="text-muted">4.23gb</span>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={2} md={3} lg={6}
				>
					<Card className="custom-card border p-0 shadow-none">
						<Card.Body className="text-center">
							<div className="file-manger-icon">
								<Link href={`/components/apps/file-manager/file-details`}><img src={doc} alt="img" className="br-7" /></Link>
							</div>
							<h6 className="mb-1 font-weight-semibold mt-0">Documents</h6>
							<span className="text-muted">4.23gb</span>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={2} md={3} lg={6}
				>
					<Card className="custom-card border p-0 shadow-none">
						<Card.Body className="text-center">
							<div className="file-manger-icon">
								<Link href={`/components/apps/file-manager/file-details`}><img src={file} alt="img" className="br-7" /></Link>

							</div>
							<h6 className="mb-1 font-weight-semibold mt-0">Documents</h6>
							<span className="text-muted">4.23gb</span>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={2} md={3} lg={6}
				>
					<Card className="custom-card border p-0 shadow-none">
						<Card.Body className="text-center">
							<div className="file-manger-icon">
								<Link href={`/components/apps/file-manager/file-details`}><img src={file} alt="img" className="br-7" /></Link>
							</div>
							<h6 className="mb-1 font-weight-semibold mt-0">Documents</h6>
							<span className="text-muted">4.23gb</span>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={2} md={3} lg={6}
				>
					<Card className="custom-card border p-0 shadow-none">
						<Card.Body className="text-center">
							<div className="file-manger-icon">
								<Link href={`/components/apps/file-manager/file-details`}><img src={file2} alt="img" className="br-7" /></Link>
							</div>
							<h6 className="mb-1 font-weight-semibold mt-0">Documents</h6>
							<span className="text-muted">4.23gb</span>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={2} md={3} lg={6}
				>
					<Card className="custom-card border p-0 shadow-none">
						<Card.Body className="text-center">
							<div className="file-manger-icon">
								<Link href={`/components/apps/file-manager/file-details`}><img src={file2} alt="img" className="br-7" /></Link>
							</div>
							<h6 className="mb-1 font-weight-semibold mt-0">Documents</h6>
							<span className="text-muted">4.23gb</span>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={2} md={3} lg={6}
				>
					<Card className="custom-card overflow-hidden">
						<Link href={`/components/apps/file-manager/file-details`}><img src={imge1} alt="img" /></Link>
						<div className="card-footer bd-t-0 py-3">
							<div className="d-flex">
								<div>
									<h6 className="mb-0">221.jpg</h6>
								</div>
								<div className="ms-auto">
									<h6 className="text-muted mb-0">120 KB</h6>
								</div>
							</div>
						</div>
					</Card>
				</Col>
				<Col xl={2} md={3} lg={6}
				>
					<Card className="custom-card overflow-hidden">
						<Link href={`/components/apps/file-manager/file-details`}><img src={imge2} alt="img" /></Link>
						<div className="card-footer bd-t-0 py-3">
							<div className="d-flex">
								<div>
									<h6 className="mb-0">567.jpg</h6>
								</div>
								<div className="ms-auto">
									<h6 className="text-muted mb-0">120 KB</h6>
								</div>
							</div>
						</div>
					</Card>
				</Col>
				<Col xl={2} md={3} lg={6}
				>
					<Card className="custom-card overflow-hidden">
						<Link href={`/components/apps/file-manager/file-details`}>
							<img src={imge3} alt="img" /></Link>
						<div className="card-footer bd-t-0 py-3">
							<div className="d-flex">
								<div>
									<h6 className="mb-0">367.jpg</h6>
								</div>
								<div className="ms-auto">
									<h6 className="text-muted mb-0">120 KB</h6>
								</div>
							</div>
						</div>
					</Card>
				</Col>
				<Col xl={2} md={3} lg={6}
				>
					<Card className="custom-card overflow-hidden">
						<Link href={`/components/apps/file-manager/file-details`}><img src={imge4} alt="img" /></Link>
						<div className="card-footer bd-t-0 py-3">
							<div className="d-flex">
								<div>
									<h6 className="mb-0">211.jpg</h6>
								</div>
								<div className="ms-auto">
									<h6 className="text-muted mb-0">120 KB</h6>
								</div>
							</div>
						</div>
					</Card>
				</Col>
				<Col xl={2} md={3} lg={6}
				>
					<Card className="custom-card overflow-hidden">
						<Link href={`/components/apps/file-manager/file-details`}><img src={imge5} alt="img" /></Link>
						<div className="card-footer bd-t-0 py-3">
							<div className="d-flex">
								<div>
									<h6 className="mb-0">541.jpg</h6>
								</div>
								<div className="ms-auto">
									<h6 className="text-muted mb-0">120 KB</h6>
								</div>
							</div>
						</div>
					</Card>
				</Col>
				<Col xl={2} md={3} lg={6}
				>
					<Card className="custom-card overflow-hidden">
						<Link href={`/components/apps/file-manager/file-details`}><img src={imge6} alt="img" /></Link>
						<div className="card-footer bd-t-0 py-3">
							<div className="d-flex">
								<div>
									<h6 className="mb-0">345.jpg</h6>
								</div>
								<div className="ms-auto">
									<h6 className="text-muted mb-0">120 KB</h6>
								</div>
							</div>
						</div>
					</Card>
				</Col>
				<Col xl={2} md={3} lg={6}
				>
					<Card className="custom-card overflow-hidden">
						<Link href={`/components/apps/file-manager/file-details`}><img src={imge7} alt="img" /></Link>
						<div className="card-footer bd-t-0 py-3">
							<div className="d-flex">
								<div>
									<h6 className="mb-0">213.jpg</h6>
								</div>
								<div className="ms-auto">
									<h6 className="text-muted mb-0">120 KB</h6>
								</div>
							</div>
						</div>
					</Card>
				</Col>
				<div className="col-xl-2  col-md-3  col-lg-6">
					<Card className="custom-card overflow-hidden">
						<Link href={`/components/apps/file-manager/file-details`}><img src={imge8} alt="img" /></Link>
						<div className="card-footer bd-t-0 py-3">
							<div className="d-flex">
								<div>
									<h6 className="mb-0">1324.jpg</h6>
								</div>
								<div className="ms-auto">
									<h6 className="text-muted mb-0">120 KB</h6>
								</div>
							</div>
						</div>
					</Card>
				</div>
				<div className="col-xl-2  col-md-3 col-lg-6">
					<Card className="custom-card overflow-hidden">
						<Link href={`/components/apps/file-manager/file-details`}><img src={imge9} alt="img" /></Link>
						<div className="card-footer bd-t-0 py-3">
							<div className="d-flex">
								<div>
									<h6 className="mb-0">123.jpg</h6>
								</div>
								<div className="ms-auto">
									<h6 className="text-muted mb-0">120 KB</h6>
								</div>
							</div>
						</div>
					</Card>
				</div>
				<nav>

					<Pagination className="pagination justify-content-end">

						<Pagination.Item >Prev</Pagination.Item>
						<Pagination.Item active >{1}</Pagination.Item>
						<Pagination.Item >{2}</Pagination.Item>
						<Pagination.Item >{3}</Pagination.Item>
						<Pagination.Item >{4}</Pagination.Item>
						<Pagination.Item  >{5}</Pagination.Item>
						<Pagination.Item >Next</Pagination.Item>

					</Pagination>
				</nav>
			</Row>
			{/* <!-- End Row --> */}
		</>
	)
}
FileManagerList.layout = "Contentlayout"

export default FileManagerList