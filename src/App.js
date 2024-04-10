import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import './styles/globals.scss';
import Contentlayout from './shared/layout-components/layout/content-layout';
import Landingpagelayout from './shared/layout-components/layout/landingpage-layout';
import Switcherlayout from './shared/layout-components/layout/switcher-layout';
import Authenticationlayout from './shared/layout-components/layout/authentication-layout';
import Login from './login';
import Dashboard from './components/dashboard/dashboard';

// advancedui
import Calendar from './components/advancedui/calendar';
import Card from './components/advancedui/card';
import Carousel from './components/advancedui/carousel';
import Chat from './components/advancedui/chat';
import Collapse from './components/advancedui/collapse';
import Contacts from './components/advancedui/contacts';
import Modals from './components/advancedui/modals';
import Notification from './components/advancedui/notification';
import Ratings from './components/advancedui/ratings';
import Search from './components/advancedui/search';
import SweetAlert from './components/advancedui/sweet-alert';
import ThreeView from './components/advancedui/three-view';
import Timeline from './components/advancedui/timeline';
import Userlist from './components/advancedui/userlist';

// apps
// blog
import BlogDetails from './components/apps/blog/blog-details';
import BlogPage from './components/apps/blog/blog-page';
import BlogPost from './components/apps/blog/blog-post';

// file-manager
import FileAttachments from './components/apps/file-manager/file-attachments';
import FileDetails from './components/apps/file-manager/file-details';
import FileManagerList from './components/apps/file-manager/file-manager-list';
import FileManager from './components/apps/file-manager/file-manager';

// icon
import BootstrapIcons from './components/apps/icons/bootstrap-icons';
import FeatherIcons from './components/apps/icons/feather-icons';
import FlagIcons from './components/apps/icons/flag-icons';
import FontAwesome from './components/apps/icons/font-awesome';
import IonicIcons from './components/apps/icons/ionic-icons';
import MaterialDesignIcons from './components/apps/icons/material-design-icons';
import MaterialIcons from './components/apps/icons/material-icons';
import Pe7Icons from './components/apps/icons/pe7-icons';
import SimpleLineIcons from './components/apps/icons/simple-line-icons';
import ThemifyIcons from './components/apps/icons/themify-icons';
import TypiconsIcons from './components/apps/icons/typicons-icons';
import WeatherIcons from './components/apps/icons/weather-icons';

//mail
import MailCompose from './components/apps/mail/mail-compose';
import MailInbox from './components/apps/mail/mail-inbox';
import ViewMail from './components/apps/mail/view-mail';

// map,table
import Leafletsmaps from './components/apps/maps/leafletsmaps';
import BasicTables from './components/apps/tables/basic-tables';
import DataTables from './components/apps/tables/data-tables';
import Widgets from './components/apps/widgets';

// authentication
import Error404 from './components/authentication/error404';
import Error505 from './components/authentication/error505';
import ForgotPassword from './components/authentication/forgot-password';
import Lockscreen from './components/authentication/lockscreen';
import ResetPassword from './components/authentication/reset-password';
import Signin from './components/authentication/signin';
import Signup from './components/authentication/signup';
import UnderConstruction from './components/authentication/under-construction';

// charts
import Chartjs from './components/charts/chartjs';
import Echart from './components/charts/echart';
import Nvd3charts from './components/charts/nvd3charts';
import Piacharts from './components/charts/piacharts';


// crypto-currencies
import BuySell from './components/crypto-currencies/buy-sell';
import CurrencyExchange from './components/crypto-currencies/currency-exchange';
import DashboardC from './components/crypto-currencies/dashboard';
import Marketcap from './components/crypto-currencies/marketcap';
import Transcations from './components/crypto-currencies/transcations';
import Wallet from './components/crypto-currencies/wallet';

// ecommerce
import Account from './components/ecommerce/account';
import AddProduct from './components/ecommerce/add-product';
import Cart from './components/ecommerce/cart';
import Checkout from './components/ecommerce/checkout';
import DashboardE from './components/ecommerce/dashboard';
import Orders from './components/ecommerce/orders';
import ProductDetails from './components/ecommerce/product-details';
import Products from './components/ecommerce/products';
import Wishlist from './components/ecommerce/wishlist';

// elements
import Accordion from './components/elements/accordion';
import Alerts from './components/elements/alerts';
import Avatar from './components/elements/avatar';
import Badge from './components/elements/badge';
import Breadcrumbs from './components/elements/breadcrumbs';
import Buttons from './components/elements/buttons';
import Dropdown from './components/elements/dropdown';
import ListGroup from './components/elements/list-group';
import MediaObject from './components/elements/media-object';
import Navigation from './components/elements/navigation';
import Pagination from './components/elements/pagination';
import Popover from './components/elements/popover';
import Progress from './components/elements/progress';
import Spinners from './components/elements/spinners';
import Tabs from './components/elements/tabs';
import Tags from './components/elements/tags';
import Thumbnails from './components/elements/thumbnails';
import Toast from './components/elements/toast';
import Tooltip from './components/elements/tooltip';
import Typography from './components/elements/typography';

// forms
import AdvancedForms from './components/forms/advanced-forms';
import FormElements from './components/forms/form-elements';
import FormElementSizes from './components/forms/form-element-sizes';
import FormLayouts from './components/forms/form-layouts';
import FormValidation from './components/forms/form-validation';
import FormWizards from './components/forms/form-wizards';
import WysiwygEditor from './components/forms/wysiwyg-editer';

// landingpage
import Landingpage from './components/landingpage/landingpage';

// pages
import AboutUs from './components/pages/about-us';
import DangerMessage from './components/pages/danger-message';
import Empty from './components/pages/empty-page';
import FAQs from './components/pages/faqs';
import Gallery from './components/pages/gallery';
import Invoice from './components/pages/invoice';
import NotificationsList from './components/pages/notifications-list';
import Pricing from './components/pages/pricing';
import Profile from './components/pages/profile';
import Settings from './components/pages/settings';
import SuccessMessage from './components/pages/success-message';
import Switcher from './components/pages/switcher-page';
import WarningMessage from './components/pages/warning-message';


// utilities
import Background from './components/utilities/background';
import Border from './components/utilities/border';
import Display from './components/utilities/display';
import Extras from './components/utilities/extras';
import Flex from './components/utilities/flex';
import Height from './components/utilities/height';
import Margin from './components/utilities/margin';
import Padding from './components/utilities/padding';
import Position from './components/utilities/position';
import Width from './components/utilities/width';


function App() {
    return (
        <Fragment>
            <Contentlayout>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/components/dashboard/dashboard" element={<Dashboard />} />

                    {/* advancedui */}
                    <Route path="/components/advancedui/calendar" element={<Calendar />} />
                    <Route path="/components/advancedui/card" element={<Card />} />
                    <Route path="/components/advancedui/carousel" element={<Carousel />} />
                    <Route path="/components/advancedui/chat" element={<Chat />} />
                    <Route path="/components/advancedui/collapse" element={<Collapse />} />
                    <Route path="/components/advancedui/contacts" element={<Contacts />} />
                    <Route path="/components/advancedui/modals" element={<Modals />} />
                    <Route path="/components/advancedui/notification" element={<Notification />} />
                    <Route path="/components/advancedui/ratings" element={<Ratings />} />
                    <Route path="/components/advancedui/search" element={<Search />} />
                    <Route path="/components/advancedui/sweet-alert" element={<SweetAlert />} />
                    <Route path="/components/advancedui/three-view" element={<ThreeView />} />
                    <Route path="/components/advancedui/timeline" element={<Timeline />} />
                    <Route path="/components/advancedui/userlist" element={<Userlist />} />

                    {/* // apps */}
                    {/* Blogs */}
                    <Route path="/components/apps/blog/blog-details" element={<BlogDetails />} />
                    <Route path="/components/apps/blog/blog-page" element={<BlogPage />} />
                    <Route path="/components/apps/blog/blog-post" element={<BlogPost />} />

                    {/* file-manager */}
                    <Route path="/components/apps/file-manager/file-attachments" element={<FileAttachments />} />
                    <Route path="/components/apps/file-manager/file-details" element={<FileDetails />} />
                    <Route path="/components/apps/file-manager/file-manager-list" element={<FileManagerList />} />
                    <Route path="/components/apps/file-manager/file-manager" element={<FileManager />} />

                    {/* icon */}
                    <Route path="/components/apps/icons/bootstrap-icons" element={<BootstrapIcons />} />
                    <Route path="/components/apps/icons/feather-icons" element={<FeatherIcons />} />
                    <Route path="/components/apps/icons/flag-icons" element={<FlagIcons />} />
                    <Route path="/components/apps/icons/font-awesome" element={<FontAwesome />} />
                    <Route path="/components/apps/icons/ionic-icons" element={<IonicIcons />} />
                    <Route path="/components/apps/icons/material-design-icons" element={<MaterialDesignIcons />} />
                    <Route path="/components/apps/icons/material-icons" element={<MaterialIcons />} />
                    <Route path="/components/apps/icons/pe7-icons" element={<Pe7Icons />} />
                    <Route path="/components/apps/icons/simple-line-icons" element={<SimpleLineIcons />} />
                    <Route path="/components/apps/icons/themify-icons" element={<ThemifyIcons />} />
                    <Route path="/components/apps/icons/typicons-icons" element={<TypiconsIcons />} />
                    <Route path="/components/apps/icons/weather-icons" element={<WeatherIcons />} />

                    {/* mail */}
                    <Route path="/components/apps/mail/mail-compose" element={<MailCompose />} />
                    <Route path="/components/apps/mail/mail-inbox'" element={<MailInbox />} />
                    <Route path="/components/apps/mail/view-mail" element={<ViewMail />} />


                    {/* maps */}
                    <Route path="/components/apps/map/leafletsmaps" element={<Leafletsmaps />} />
                    <Route path="/components/apps/tables/basic-tables" element={< BasicTables />} />
                    <Route path="/components/apps/tables/basic-tables" element={< DataTables />} />
                    <Route path="/components/apps/widgets" element={<Widgets />} />

                    {/* authentication */}
                    <Route path="/components/authentication/error404" element={<Error404 />} />
                    <Route path="/components/authentication/error505" element={<Error505 />} />
                    <Route path="/components/authentication/forgot-password" element={<ForgotPassword />} />
                    <Route path="/components/authentication/lockscreen" element={<Lockscreen />} />
                    <Route path="/components/authentication/reset-password" element={<ResetPassword />} />
                    <Route path="/components/authentication/signin" element={<Signin />} />
                    <Route path="/components/authentication/signup" element={<Signup />} />
                    <Route path="/components/authentication/under-construction" element={<UnderConstruction />} />

                    {/* chart */}
                    <Route path="/components/charts/chartjs" element={<Chartjs />} />
                    <Route path="/components/charts/echart" element={<Echart />} />
                    <Route path="/components/charts/nvd3charts" element={<Nvd3charts />} />
                    <Route path="/components/charts/piacharts" element={<Piacharts />} />

                    {/*  crypto-currencies */}
                    <Route path="/components/crypto-currencies/buy-sell" element={<BuySell />} />
                    <Route path="/components/crypto-currencies/currency-exchange" element={<CurrencyExchange />} />
                    <Route path="/components/crypto-currencies/dashboard" element={<DashboardC />} />
                    <Route path="/components/crypto-currencies/marketcap" element={<Marketcap />} />
                    <Route path="/components/crypto-currencies/transcations" element={<Transcations />} />
                    <Route path="/components/crypto-currencies/wallet" element={<Wallet />} />


                    {/* ecommerce */}
                    <Route path="/components/ecommerce/account" element={<Account />} />
                    <Route path="/components/ecommerce/add-product" element={<AddProduct />} />
                    <Route path="/components/ecommerce/cart" element={<Cart />} />
                    <Route path="/components/ecommerce/checkout" element={<Checkout />} />
                    <Route path="/components/ecommerce/dashboard" element={<DashboardE />} />
                    <Route path="/components/ecommerce/orders" element={<Orders />} />
                    <Route path="/components/ecommerce/product-details" element={<ProductDetails />} />
                    <Route path="/components/ecommerce/products" element={<Products />} />
                    <Route path="/components/ecommerce/wishlist" element={<Wishlist />} />

                    {/* elements */}
                    <Route path="/components/elements/accordion" element={<Accordion />} />
                    <Route path="/components/elements/alerts" element={<Alerts />} />
                    <Route path="/components/elements/avatar" element={<Avatar />} />
                    <Route path="/components/elements/badge" element={<Badge />} />
                    <Route path="/components/elements/breadcrumbs" element={<Breadcrumbs />} />
                    <Route path="/components/elements/buttons" element={<Buttons />} />
                    <Route path="/components/elements/dropdown" element={<Dropdown />} />
                    <Route path="/components/elements/list-group" element={<ListGroup />} />
                    <Route path="/components/elements/media-object" element={<MediaObject />} />
                    <Route path="/components/elements/navigation" element={<Navigation />} />
                    <Route path="/components/elements/pagination" element={<Pagination />} />
                    <Route path="/components/elements/popover" element={<Popover />} />
                    <Route path="/components/elements/progress" element={<Progress />} />
                    <Route path="/components/elements/spinners" element={<Spinners />} />
                    <Route path="/components/elements/tabs" element={<Tabs />} />
                    <Route path="/components/elements/tags" element={<Tags />} />
                    <Route path="/components/elements/thumbnails" element={<Thumbnails />} />
                    <Route path="/components/elements/toast" element={<Toast />} />
                    <Route path="/components/elements/tooltip" element={<Tooltip />} />
                    <Route path="/components/elements/typography" element={<Typography />} />


                    {/* forms */}
                    <Route path="/components/forms/advanced-forms" element={<AdvancedForms />} />
                    <Route path="/components/forms/form-elements" element={<FormElements />} />
                    <Route path="/components/forms/form-element-sizes" element={<FormElementSizes />} />
                    <Route path="/components/forms/form-layouts" element={<FormLayouts />} />
                    <Route path="/components/forms/form-validation" element={<FormValidation />} />
                    <Route path="/components/forms/form-wizards" element={<FormWizards />} />
                    <Route path="/components/forms/wysiwyg-editer" element={<WysiwygEditor />} />

                    <Route path="/components/landingpage/landingpage" element={<Landingpage />} />

                    {/* pages */}
                    <Route path="/components/pages/about-us" element={<AboutUs />} />
                    <Route path="/components/pages/danger-message" element={<DangerMessage />} />
                    <Route path="/components/pages/empty-page" element={<Empty />} />
                    <Route path="/components/pages/faqs" element={<FAQs />} />
                    <Route path="/components/pages/gallery" element={<Gallery />} />
                    <Route path="/components/pages/invoice" element={<Invoice />} />
                    <Route path="/components/pages/notifications-list" element={<NotificationsList />} />
                    <Route path="/components/pages/pricing" element={<Pricing />} />
                    <Route path="/components/pages/profile" element={<Profile />} />
                    <Route path="/components/pages/settings" element={<Settings />} />
                    <Route path="/components/pages/success-message" element={<SuccessMessage />} />
                    <Route path="/components/pages/switcher-page" element={<Switcher />} />
                    <Route path="/components/pages/warning-message" element={<WarningMessage />} />

                    {/* utilities */}
                    <Route path="/components/utilities/background" element={<Background />} />
                    <Route path="/components/utilities/border" element={<Border />} />
                    <Route path="/components/utilities/display" element={<Display />} />
                    <Route path="/components/utilities/extras" element={<Extras />} />
                    <Route path="/components/utilities/flex" element={<Flex />} />
                    <Route path="/components/utilities/height" element={<Height />} />
                    <Route path="/components/utilities/margin" element={<Margin />} />
                    <Route path="/components/utilities/padding" element={<Padding />} />
                    <Route path="/components/utilities/position" element={<Position />} />
                    <Route path="/components/utilities/width" element={<Width />} />

                </Routes>
            </Contentlayout>
        </Fragment >
    );
}

export default App;
