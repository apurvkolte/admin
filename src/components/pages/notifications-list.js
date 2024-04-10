import React from "react";
import PageHeader from "../../shared/layout-components/page-header/page-header";
import { Breadcrumb, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';;
import Seo from "../../shared/layout-components/seo/seo";


//Images
const user1 = "/assets/img/users/1.jpg";
const user2 = "/assets/img/users/2.jpg";
const user3 = "/assets/img/users/3.jpg";
const user4 = "/assets/img/users/4.jpg";
const user5 = "/assets/img/users/5.jpg";
const user6 = "/assets/img/users/6.jpg";
const user7 = "/assets/img/users/7.jpg";
const user8 = "/assets/img/users/8.jpg";
const user9 = "/assets/img/users/9.jpg";

const NotificationsList = () => {
  return (
    <div>
      <Seo title="Notifications List" />

      <PageHeader
        title="Notification List"
        item="Pages"
        active_item="Notification List"
      />

      <div className="container">
        <ul className="notification">
          <li>
            <div className="notification-time">
              <span className="date">Today</span>
              <span className="time"> 02:31</span>
            </div>
            <div className="notification-icon">
              <Link to="#!">
              </Link>
            </div>
            <div className="notification-time-date mb-2 d-block d-md-none">
              <span className="date">Today</span>
              <span className="time ms-2"> 02:31</span>
            </div>
            <div className="notification-body">
              <div className="media mt-0">
                <div className="main-avatar avatar-md online">
                  <img alt="avatar" className="rounded-6" src={user1} />
                </div>
                <div className="media-body ms-3 d-flex">
                  <div className="">
                    <p className="tx-14 text-dark mb-0 tx-semibold">
                      Dennis Trexy
                    </p>
                    <p className="mb-0 tx-13 text-muted">
                      2 Members Accepted your Request.
                    </p>
                  </div>
                  <div className="notify-time">
                    <p className="mb-0 text-muted tx-11">2 Hrs ago</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="notification-time">
              <span className="date">Yesterday</span>
              <span className="time"> 18:47</span>
            </div>
            <div className="notification-icon">
              <Link to="#!">
              </Link>
            </div>
            <div className="notification-time-date mb-2 d-block d-md-none">
              <span className="date">Yesterday</span>
              <span className="time ms-2"> 18:47</span>
            </div>
            <div className="notification-body">
              <div className="media mt-0">
                <div className="main-avatar avatar-md offline">
                  <img alt="avatar" className="rounded-6" src={user2} />
                </div>
                <div className="media-body ms-3 d-flex">
                  <div className="">
                    <p className="tx-14 text-dark mb-0 tx-semibold">
                      Robbie Ruder
                    </p>
                    <p className="mb-0 tx-13 text-muted">
                      Created New Template for Designing Department.
                    </p>
                  </div>
                  <div className="notify-time">
                    <p className="mb-0 text-muted tx-11">18:47</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="notification-time">
              <span className="date">Yesterday</span>
              <span className="time"> 06:43</span>
            </div>
            <div className="notification-icon">
              <Link to="#!">
              </Link>
            </div>
            <div className="notification-time-date mb-2 d-block d-md-none">
              <span className="date">Yesterday</span>
              <span className="time ms-2"> 06:43</span>
            </div>
            <div className="notification-body">
              <div className="media mt-0">
                <div className="main-avatar avatar-md online">
                  <img alt="avatar" className="rounded-6" src={user3} />
                </div>
                <div className="media-body ms-3 d-flex">
                  <div className="">
                    <p className="tx-14 text-dark mb-0 tx-semibold">
                      Elida Distefa
                    </p>
                    <p className="mb-0 tx-13 text-muted">
                      Shipment is Out for Delivery.
                    </p>
                  </div>
                  <div className="notify-time">
                    <p className="mb-0 text-muted tx-11">06:43</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="notification-time">
              <span className="date">23 Oct</span>
              <span className="time"> 03:15</span>
            </div>
            <div className="notification-icon">
              <Link to="#!">
              </Link>
            </div>
            <div className="notification-time-date mb-2 d-block d-md-none">
              <span className="date">23 Oct</span>
              <span className="time ms-2"> 03:15</span>
            </div>
            <div className="notification-body">
              <div className="media mt-0">
                <div className="main-avatar avatar-md online">
                  <img alt="avatar" className="rounded-6" src={user4} />
                </div>
                <div className="media-body ms-3 d-flex">
                  <div className="">
                    <p className="tx-14 text-dark mb-0 tx-semibold">
                      Harvey Mattos
                    </p>
                    <p className="mb-0 tx-13 text-muted">
                      Mentioned you in a post.
                    </p>
                  </div>
                  <div className="notify-time">
                    <p className="mb-0 text-muted tx-11">03:15</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="notification-time">
              <span className="date">15 Oct</span>
              <span className="time"> 12:14</span>
            </div>
            <div className="notification-icon">
              <Link to="#!">
              </Link>
            </div>
            <div className="notification-time-date mb-2 d-block d-md-none">
              <span className="date">15 Oct</span>
              <span className="time ms-2"> 12:14</span>
            </div>
            <div className="notification-body">
              <div className="media mt-0">
                <div className="main-avatar avatar-md offline">
                  <img alt="avatar" className="rounded-6" src={user5} />
                </div>
                <div className="media-body ms-3 d-flex">
                  <div className="">
                    <p className="tx-14 text-dark mb-0 tx-semibold">
                      Catrice Doshier
                    </p>
                    <p className="mb-0 tx-13 text-muted">
                      2 Members Accepted your Request.
                    </p>
                  </div>
                  <div className="notify-time">
                    <p className="mb-0 text-muted tx-11">12:14</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="notification-time">
              <span className="date">30 Sep</span>
              <span className="time"> 14:04</span>
            </div>
            <div className="notification-icon">
              <Link to="#!">
              </Link>
            </div>
            <div className="notification-time-date mb-2 d-block d-md-none">
              <span className="date">30 Sep</span>
              <span className="time ms-2"> 14:04</span>
            </div>
            <div className="notification-body">
              <div className="media mt-0">
                <div className="main-avatar avatar-md offline">
                  <img alt="avatar" className="rounded-6" src={user6} />
                </div>
                <div className="media-body ms-3 d-flex">
                  <div className="">
                    <p className="tx-14 text-dark mb-0 tx-semibold">
                      Mercy Ritia
                    </p>
                    <p className="mb-0 tx-13 text-muted">
                      Created New Template for Designing Department.
                    </p>
                  </div>
                  <div className="notify-time">
                    <p className="mb-0 text-muted tx-11">14:04</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="notification-time">
              <span className="date">18 Sep</span>
              <span className="time"> 12:26</span>
            </div>
            <div className="notification-icon">
              <Link to="#!">
              </Link>
            </div>
            <div className="notification-time-date mb-2 d-block d-md-none">
              <span className="date">18 Sep</span>
              <span className="time ms-2"> 12:26</span>
            </div>
            <div className="notification-body">
              <div className="media mt-0">
                <div className="main-avatar avatar-md online">
                  <img alt="avatar" className="rounded-6" src={user7} />
                </div>
                <div className="media-body ms-3 d-flex">
                  <div className="">
                    <p className="tx-14 text-dark mb-0 tx-semibold">
                      Mark Jhon
                    </p>
                    <p className="mb-0 tx-13 text-muted">
                      Shipment is Out for Delivery.
                    </p>
                  </div>
                  <div className="notify-time">
                    <p className="mb-0 text-muted tx-11">12:26</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="notification-time">
              <span className="date">03 Sep</span>
              <span className="time"> 05:37</span>
            </div>
            <div className="notification-icon">
              <Link to="#!">
              </Link>
            </div>
            <div className="notification-time-date mb-2 d-block d-md-none">
              <span className="date">03 Sep</span>
              <span className="time ms-2"> 05:37</span>
            </div>
            <div className="notification-body">
              <div className="media mt-0">
                <div className="main-avatar avatar-md offline">
                  <img alt="avatar" className="rounded-6" src={user8} />
                </div>
                <div className="media-body ms-3 d-flex">
                  <div className="">
                    <p className="tx-14 text-dark mb-0 tx-semibold">
                      Benedict Vallone
                    </p>
                    <p className="mb-0 tx-13 text-muted">
                      Thanking you for Accepting Request.
                    </p>
                  </div>
                  <div className="notify-time">
                    <p className="mb-0 text-muted tx-11">05:37</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="notification-time">
              <span className="date">28 Aug</span>
              <span className="time"> 15:24</span>
            </div>
            <div className="notification-icon">
              <Link to="#!">
              </Link>
            </div>
            <div className="notification-time-date mb-2 d-block d-md-none">
              <span className="date">28 Aug</span>
              <span className="time ms-2"> 15:24</span>
            </div>
            <div className="notification-body">
              <div className="media mt-0">
                <div className="main-avatar avatar-md online">
                  <img alt="avatar" className="rounded-6" src={user9} />
                </div>
                <div className="media-body ms-3 d-flex">
                  <div className="">
                    <p className="tx-14 text-dark mb-0 tx-semibold">
                      Paul Johny
                    </p>
                    <p className="mb-0 tx-13 text-muted">
                      Invited you to a Group.
                    </p>
                  </div>
                  <div className="notify-time">
                    <p className="mb-0 text-muted tx-11">15:24</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div className="text-center mb-4">
          <Link to="#!" role="button" className="btn ripple btn-primary w-md">
            Load more
          </Link>
        </div>
      </div>
    </div>
  );
};
NotificationsList.layout = "Contentlayout";

export default NotificationsList;
