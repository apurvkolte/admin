import React from 'react'
import PageHeader from '../../shared/layout-components/page-header/page-header'
import { Link } from 'react-router-dom'


//images
const png1 = "/assets/img/pngs/1.png";
const png2 = "/assets/img/pngs/2.png";
const png3 = "/assets/img/pngs/3.png";
const png4 = "/assets/img/pngs/4.png";
const png5 = "/assets/img/pngs/5.png";
const png6 = "/assets/img/pngs/6.png";
const png7 = "/assets/img/pngs/7.png";
const png8 = "/assets/img/pngs/8.png";
import Seo from '../../shared/layout-components/seo/seo';


let WishlistData = [
	{
		id: 1,
		ProductId: "Women's Red Dress",
		Product1: png1,
		Productpriceold: "$49.00",
		Productdiscountnew: "$39.00",
		Addtocart: "Add to cart ",
		Favorite: "heart",
	},
	{
		id: 2,
		ProductId: "Red Dress",
		Product1: png2,
		Productpriceold: "$30.00",
		Productdiscountnew: "$21.00",
		Addtocart: "Add to cart ",
		Favorite: "heart",
	},
	{
		id: 3,
		ProductId: "Black Dress",
		Product1: png3,
		Productpriceold: "$29.00",
		Productdiscountnew: "$15.00",
		Addtocart: "Add to cart ",
		Favorite: "heart",
	},
	{
		id: 4,

		ProductId: "Long Frock",
		Product1: png4,
		Productpriceold: "$32.00",
		Productdiscountnew: "$22.00",
		Addtocart: "Add to cart ",
		Favorite: "heart",
	},
	{
		id: 5,

		ProductId: "Girls Sandals",
		Product1: png5,
		Productpriceold: "$30.00",
		Productdiscountnew: "$21.00",
		Addtocart: "Add to cart ",
		Favorite: "heart",
	},

	{
		id: 6,
		ProductId: "Pink Dress",
		Product1: png6,
		Productpriceold: "$25.00",
		Productdiscountnew: "$20.00",
		Addtocart: "Add to cart ",
		Favorite: "heart",
	},
	{
		id: 7,

		ProductId: "Gold Dress",
		Product1: png7,
		Productpriceold: "$25.00",
		Productdiscountnew: "$20.00",
		Addtocart: "Add to cart ",
		Favorite: "heart",
	},
	{
		id: 8,
		ProductId: "Orange Dress",
		Product1: png8,
		Productpriceold: "$25.00",
		Productdiscountnew: "$20.00",
		Addtocart: "Add to cart ",
		Favorite: "heart",
	},



];
const Wishlist = () => {
	return (
		<>
			<Seo title="Wishlist" />
			<PageHeader title="Wishlist" item="Ecommerce" active_item="Wishlist" />

			<div>

				{/* <!--Row--> */}
				<div className="row row-sm" id="wishlist">
					<div className="col-md-12 col-lg-12 col-xl-12">
						<div className="row row-sm">
							{WishlistData.map((ele) => {
								return (
									<div key={Math.random()} className="col-md-6 col-lg-6 col-xl-3 col-sm-6 alert mb-0">
										<div className="card custom-card">
											<div className="p-0">
												<div className="product-grid">
													<div className="product-image">
														<Link to={`/components/ecommerce/product-details`} className="image">
															<img className="pic-1" alt="product-image-1" src={ele.Product1} />
														</Link>
														<a className="wishlist-icon" href="#!" data-bs-dismiss="alert" aria-label="Close"><i className="far fa-heart"></i></a>
													</div>
													<div className="product-content">
														<div className="d-flex">
															<div>
																<h3 className="title"><a href="#!">{ele.ProductId}</a></h3>
															</div>
															<div className="price text-end ms-auto">
																<span className="old-price">{ele.Productpriceold}</span>
																<span className="fs-18">{ele.Productdiscountnew}</span>
															</div>
														</div>
														<div>
															<a href="#!"><i className="fa fa-star text-warning"></i></a>
															<a href="#!"><i className="fa fa-star text-warning"></i></a>
															<a href="#!"><i className="fa fa-star text-warning"></i></a>
															<a href="#!"><i className="far fa-star text-warning"></i></a>
															<a href="#!"><i className="far fa-star text-warning"></i></a>
															<a href="#!" className="me-4 text-muted"> (25)</a>
														</div>
														<div className="mt-3">
															<Link href={"/components/ecommerce/cart/"} className="btn btn-block btn-primary">
																<i className="fe fe-shopping-cart me-2"></i>Add to Cart
															</Link>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								)
							})}

						</div>
						<nav>
							<ul className="pagination justify-content-end">
								<li className="page-item disabled"><a className="page-link" href="#!">Prev</a></li>
								<li className="page-item active"><a className="page-link" href="#!">1</a></li>
								<li className="page-item"><a className="page-link" href="#!">2</a></li>
								<li className="page-item"><a className="page-link" href="#!">3</a></li>
								<li className="page-item"><a className="page-link" href="#!">4</a></li>
								<li className="page-item"><a className="page-link" href="#!">5</a></li>
								<li className="page-item"><a className="page-link" href="#!">Next</a></li>
							</ul>
						</nav>
					</div>
				</div>
				{/* <!-- row closed  --> */}
			</div>
		</>
	)
}

Wishlist.layout = "Contentlayout"


export default Wishlist