import React from 'react';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';

import { isUserAuthenticated, getLoggedInUser } from '../helpers/authUtils';

// lazy load all the views

// auth
const Login = React.lazy(() => import('../pages/auth/Login'));
const Logout = React.lazy(() => import('../pages/auth/Logout'));
const Register = React.lazy(() => import('../pages/auth/Register'));
const ForgetPassword = React.lazy(() => import('../pages/auth/ForgetPassword'));
const Confirm = React.lazy(() => import('../pages/auth/Confirm'));
// dashboard
const EcommerceDashboard = React.lazy(() => import('../pages/dashboards/Ecommerce'));
const CRMDashboard = React.lazy(() => import('../pages/dashboards/CRM'));
const AnalyticsDashboard = React.lazy(() => import('../pages/dashboards/Analytics'));
const ProjectDashboard = React.lazy(() => import('../pages/dashboards/Project'));
// apps
const CalendarApp = React.lazy(() => import('../pages/apps/Calendar'));
const Projects = React.lazy(() => import('../pages/apps/Projects/'));
const ProjectDetail = React.lazy(() => import('../pages/apps/Projects/Detail/'));
const ProjectGannt = React.lazy(() => import('../pages/apps/Projects/Gantt/'));
const ProjectForm = React.lazy(() => import('../pages/apps/Projects/ProjectForm'));
// - ecommece pages
const EcommerceProducts = React.lazy(() => import('../pages/apps/Ecommerce/Products'));
const ProductDetails = React.lazy(() => import('../pages/apps/Ecommerce/ProductDetails'));
const Orders = React.lazy(() => import('../pages/apps/Ecommerce/Orders'));
const OrderDetails = React.lazy(() => import('../pages/apps/Ecommerce/OrderDetails'));
const Customers = React.lazy(() => import('../pages/apps/Ecommerce/Customers'));
const Cart = React.lazy(() => import('../pages/apps/Ecommerce/Cart'));
const Checkout = React.lazy(() => import('../pages/apps/Ecommerce/Checkout/'));
const Sellers = React.lazy(() => import('../pages/apps/Ecommerce/Sellers'));
// chat
const ChatApp = React.lazy(() => import('../pages/apps/Chat/'));
// social
const SocialFeed = React.lazy(() => import('../pages/apps/SocialFeed/'));
// tasks
const TaskList = React.lazy(() => import('../pages/apps/Tasks/List/'));
const Kanban = React.lazy(() => import('../pages/apps/Tasks/Board/'));

// PPIS_PROJECT [공통관리]
const PartnerCompany = React.lazy(() => import('../pages/partnerCompany/index'));
const AddPartner     = React.lazy(() => import('../pages/partner/index'));
const MainCode1       = React.lazy(() => import('../pages/code1/codeMaster/index'));
const ProductMain       = React.lazy(() => import('../pages/code1/product/main'));
const ReduxFormat       = React.lazy(() => import('../pages/reduxFormat/index'));
const ProductCode       = React.lazy(() => import('../pages/code1/productForm/index'));
const ProductCodeDetail       = React.lazy(() => import('../pages/code1/productDetail/index'));



// - email
const Inbox = React.lazy(() => import('../pages/apps/Email/Inbox'));
const EmailDetail = React.lazy(() => import('../pages/apps/Email/Detail'));

// pages
const Starter = React.lazy(() => import('../pages/Starter'));
const Profile = React.lazy(() => import('../pages/profile'));
const ErrorPageNotFound = React.lazy(() => import('../pages/error/PageNotFound'));
const ServerError = React.lazy(() => import('../pages/error/ServerError'));

// - other
const Invoice = React.lazy(() => import('../pages/other/Invoice'));
const FAQ = React.lazy(() => import('../pages/other/FAQ'));
const Pricing = React.lazy(() => import('../pages/other/Pricing'));
const Timeline = React.lazy(() => import('../pages/other/Timeline'));

// uikit
const Accordions = React.lazy(() => import('../pages/uikit/Accordions'));
const Alerts = React.lazy(() => import('../pages/uikit/Alerts'));
const Badges = React.lazy(() => import('../pages/uikit/Badges'));
const Buttons = React.lazy(() => import('../pages/uikit/Buttons'));
const Cards = React.lazy(() => import('../pages/uikit/Cards'));
const Carousel = React.lazy(() => import('../pages/uikit/Carousel'));
const Dropdowns = React.lazy(() => import('../pages/uikit/Dropdowns'));
const ListGroups = React.lazy(() => import('../pages/uikit/ListGroups'));
const Modals = React.lazy(() => import('../pages/uikit/Modals'));
const Tabs = React.lazy(() => import('../pages/uikit/Tabs'));
const Toasts = React.lazy(() => import('../pages/uikit/Toasts'));
const Grid = React.lazy(() => import('../pages/uikit/Grid'));
const Popovers = React.lazy(() => import('../pages/uikit/Popovers'));
const Progress = React.lazy(() => import('../pages/uikit/Progress'));
const Ribbons = React.lazy(() => import('../pages/uikit/Ribbons'));
const Tooltips = React.lazy(() => import('../pages/uikit/Tooltips'));
const Typography = React.lazy(() => import('../pages/uikit/Typography'));
const Spinners = React.lazy(() => import('../pages/uikit/Spinners'));
const Widgets = React.lazy(() => import('../pages/uikit/Widgets'));
const DragDrop = React.lazy(() => import('../pages/uikit/DragDrop'));
const RangeSliders = React.lazy(() => import('../pages/uikit/RangeSliders'));
const Ratings = React.lazy(() => import('../pages/uikit/Ratings'));

const MDIIcons = React.lazy(() => import('../pages/uikit/MDIIcons'));
const Dripicons = React.lazy(() => import('../pages/uikit/Dripicons'));
const Unicons = React.lazy(() => import('../pages/uikit/Unicons'));
// forms
const BasicForms = React.lazy(() => import('../pages/forms/Basic'));
const FormValidation = React.lazy(() => import('../pages/forms/Validation'));
const FormAdvanced = React.lazy(() => import('../pages/forms/Advanced'));
const FormWizard = React.lazy(() => import('../pages/forms/Wizard'));
const FileUpload = React.lazy(() => import('../pages/forms/FileUpload'));
const Editors = React.lazy(() => import('../pages/forms/Editors'));
// charts
const ApexChart = React.lazy(() => import('../pages/charts/Apex'));
const BriteChart = React.lazy(() => import('../pages/charts/Brite'));
const ChartJs = React.lazy(() => import('../pages/charts/ChartJs'));
// tables
const BasicTables = React.lazy(() => import('../pages/tables/Basic'));
const AdvancedTables = React.lazy(() => import('../pages/tables/Advanced'));
// maps
const GoogleMaps = React.lazy(() => import('../pages/GoogleMaps'));

// handle auth and authorization

const PrivateRoute = ({ component: Component, roles, ...rest }) => (
    <Route
        {...rest}
        render={props => {
            if (!isUserAuthenticated()) {
                // not logged in so redirect to login page with the return url
                return <Redirect to={{ pathname: '/account/login', state: { from: props.location } }} />;
            }

            const loggedInUser = getLoggedInUser();
            // check if route is restricted by role
            if (roles && roles.indexOf(loggedInUser.role) === -1) {
                // role not authorised so redirect to home page
                return <Redirect to={{ pathname: '/' }} />;
            }

            // authorised so return component
            return <Component {...props} />;
        }}
    />
);

// root routes
const rootRoute = {
    path: '/',
    exact: true,
    component: () => <Redirect to="/dashboard/ecommerce" />,
    route: PrivateRoute,
};


// 공통정보
const authorityRoutes = {
    path: '/commonInfo',
    name: '공통정보',
    icon: 'dripicons-arrow-down',
    header: '세미산업',
    children: [
        {
            path: '/commonInfo/auth',
            name: '권한관리',
            component: AnalyticsDashboard,
            route: PrivateRoute,
        },
        {
            path: '/commonInfo/reduxFormat',
            name: '리덕스포맷',
            component: ReduxFormat,
            route: PrivateRoute,
        },
        {
            path: '/commonInfo/company',
            name: '업체관리',
            children: [
                {
                    path: '/commonInfo/company/partnerCompany',
                    name: '업체등록',
                    component: PartnerCompany,
                    route: PrivateRoute,
                },
                {
                    path: '/commonInfo/company/partnerCompany2',
                    name: '업체등록(2)',
                    component: AddPartner,
                    route: PrivateRoute,
                },
            ],
        },
        {
            path: '/commonInfo/code',
            name: '코드관리',
            children: [
                {
                    path: '/commonInfo/code/mainCode1',
                    name: '기초코드',
                    component: MainCode1,
                    route: PrivateRoute,
                },
                {
                    path: '/commonInfo/code/product/main',
                    name: '제품코드(기초)',
                    component: ProductMain,
                    route: PrivateRoute,
                },
                {
                    path: '/commonInfo/code1/product',   //완제품 코드
                    name: '제품코드(제품)',
                    component: ProductCode,
                    route: PrivateRoute,
                },
                {
                    path: '/commonInfo/code/product/productCodeDetail',   // 제조사양서
                    name: '제조사양서',
                    component: ProductCodeDetail,
                    route: PrivateRoute,
                },
            ],
        },
    ],
};

// 경영관리
const managementRoutes = {
    path: '',
    name: '경영관리',
    icon: 'dripicons-arrow-left',
    children: [
        {
            path: '',
            name: '인사관리',
            children: [
                {
                    path: '',
                    name: '인원정보',
                    component: AdvancedTables,
                    route: PrivateRoute,
                },
                {
                    path: '',
                    name: '근태관리',
                    component: AdvancedTables,
                    route: PrivateRoute,
                },
                {
                    path: '',
                    name: '52시간 관리',
                    component: AdvancedTables,
                    route: PrivateRoute,
                },
            ], 
        },
        {
            path: '',
            name: '원가관리',
            children: [
                {
                    path: '',
                    name: '월별실적',
                    component: BasicTables,
                    route: PrivateRoute,
                },
                {
                    path: '',
                    name: 'KPI현황',
                    component: AdvancedTables,
                    route: PrivateRoute,
                },
                
            ], 
        },
        {
            path: '',
            name: '평가관리',
            children: [
                {
                    path: '',
                    name: '정성평가',
                    component: AdvancedTables,
                    route: PrivateRoute,
                },
                {
                    path: '',
                    name: '업체평가',
                    component: AdvancedTables,
                    route: PrivateRoute,
                },
                {
                    path: '',
                    name: '생산비고사항',
                    component: AdvancedTables,
                    route: PrivateRoute,
                },
            ], 
        },
        {
            path: '',
            name: '생산관리',
            children: [
                {
                    path: '',
                    name: '동판사용 현황',
                    component: BasicTables,
                    route: PrivateRoute,
                },
                {
                    path: '',
                    name: '나이프사용 현황',
                    component: AdvancedTables,
                    route: PrivateRoute,
                },
                
            ], 
        },
        {
            path: '',
            name: '노경비 관리',
            children: [
                {
                    path: '',
                    name: '노무비 입력',
                    component: BasicTables,
                    route: PrivateRoute,
                },
                {
                    path: '',
                    name: '경비 입력',
                    component: AdvancedTables,
                    route: PrivateRoute,
                },
                
            ], 
        },
        {
            path: '',
            name: '마감',
            children: [
                {
                    path: '',
                    name: '원가마감생성',
                    component: BasicTables,
                    route: PrivateRoute,
                },
                {
                    path: '',
                    name: '마감현황',
                    component: AdvancedTables,
                    route: PrivateRoute,
                },
                
            ], 
        },
       
    ],
};
// 영업관리
const salesRoutes = {
    path: '',
    name: '영업관리',
    icon: 'dripicons-arrow-left',
    children: [
        {
            path: '',
            name: '기본정보',
            children: [
                {
                    path: '',
                    name: '제품기초정보',
                    component: AdvancedTables,
                    route: PrivateRoute,
                },
                {
                    path: '',
                    name: '제품정보입력',
                    component: AdvancedTables,
                    route: PrivateRoute,
                },
                {
                    path: '',
                    name: '신제품정보조회',
                    component: AdvancedTables,
                    route: PrivateRoute,
                },
            ], 
        },
        {
            path: '',
            name: '제품정보',
            children: [
                {
                    path: '',
                    name: '재고현황',
                    component: BasicTables,
                    route: PrivateRoute,
                },
                {
                    path: '',
                    name: '제품진행사항',
                    component: AdvancedTables,
                    route: PrivateRoute,
                },
                
            ], 
        },
        {
            path: '',
            name: '발주관리',
            children: [
                {
                    path: '',
                    name: '배송계획(업체)',
                    component: AdvancedTables,
                    route: PrivateRoute,
                },
                {
                    path: '',
                    name: '배송계획(자체)',
                    component: AdvancedTables,
                    route: PrivateRoute,
                },
                
            ], 
        },
        {
            path: '',
            name: '판매관리',
            children: [
                {
                    path: '',
                    name: '판매입력',
                    component: BasicTables,
                    route: PrivateRoute,
                },
                {
                    path: '',
                    name: '반품입력',
                    component: AdvancedTables,
                    route: PrivateRoute,
                },
                {
                    path: '',
                    name: '거래처별판매조회',
                    component: AdvancedTables,
                    route: PrivateRoute,
                },
                {
                    path: '',
                    name: '제품별 판매조회',
                    component: AdvancedTables,
                    route: PrivateRoute,
                },
                {
                    path: '',
                    name: '미수금 현황',
                    component: AdvancedTables,
                    route: PrivateRoute,
                },
                
            ], 
        },
        {
            path: '',
            name: '업체관리',
            children: [
                {
                    path: '',
                    name: '클레임현황',
                    component: BasicTables,
                    route: PrivateRoute,
                },
                {
                    path: '',
                    name: '표준단가',
                    component: AdvancedTables,
                    route: PrivateRoute,
                },
                
            ], 
        },
              
    ],
};
// 구매관리
const purchaseRoutes = {
    path: '',
    name: '구매관리',
    icon: 'dripicons-arrow-left',
    children: [
        {
            path: '',
            name: '기본정보',
            children: [
                {
                    path: '',
                    name: '원부재료매입정보',
                    component: AdvancedTables,
                    route: PrivateRoute,
                },
                {
                    path: '',
                    name: '자재입력',
                    component: AdvancedTables,
                    route: PrivateRoute,
                },
                {
                    path: '',
                    name: '자재별BOM 확인',
                    component: AdvancedTables,
                    route: PrivateRoute,
                },
                {
                path: '',
                name: '자재단가 입력',
                component: AdvancedTables,
                route: PrivateRoute,
                },
            
            ], 
        },
        {
            path: '',
            name: '발주관리',
            children: [
                {
                    path: '',
                    name: '원재료일자별분배',
                    component: BasicTables,
                    route: PrivateRoute,
                },
                {
                    path: '',
                    name: '부재료일자분배',
                    component: AdvancedTables,
                    route: PrivateRoute,
                },
                {
                    path: '',
                    name: '지관박스일자분배',
                    component: AdvancedTables,
                    route: PrivateRoute,
                },
                {
                    path: '',
                    name: '발주서전송',
                    component: AdvancedTables,
                    route: PrivateRoute,
                },
                
            ], 
        },
        {
            path: '',
            name: '생산공통구매관리',
            children: [
                {
                    path: '',
                    name: '동판관리',
                    component: AdvancedTables,
                    route: PrivateRoute,
                },
                {
                    path: '',
                    name: '철실린더 관리',
                    component: AdvancedTables,
                    route: PrivateRoute,
                },
                {
                    path: '',
                    name: '압동관리',
                    component: AdvancedTables,
                    route: PrivateRoute,
                },
                
            ], 
        },
        {
            path: '',
            name: '입고관리',
            children: [
                {
                    path: '',
                    name: '자재입고입력',
                    component: BasicTables,
                    route: PrivateRoute,
                },
                {
                    path: '',
                    name: '자재입고조회',
                    component: AdvancedTables,
                    route: PrivateRoute,
                },
                {
                    path: '',
                    name: '자재건별입고조회',
                    component: AdvancedTables,
                    route: PrivateRoute,
                },
                
            ], 
        },
        {
            path: '',
            name: '재고관리',
            children: [
                {
                    path: '',
                    name: '자재수불월보',
                    component: BasicTables,
                    route: PrivateRoute,
                },
                {
                    path: '',
                    name: '재고실사',
                    component: AdvancedTables,
                    route: PrivateRoute,
                },
                {
                    path: '',
                    name: '재고실사조정',
                    component: AdvancedTables,
                    route: PrivateRoute,
                },
                {
                    path: '',
                    name: '조정재고 조회',
                    component: AdvancedTables,
                    route: PrivateRoute,
                },
                
            ], 
        },
        {
            path: '',
            name: '업체관리',
            children: [
                {
                    path: '',
                    name: '시정조치요구서',
                    component: AdvancedTables,
                    route: PrivateRoute,
                },
                {
                    path: '',
                    name: '반품입력',
                    component: AdvancedTables,
                    route: PrivateRoute,
                },
            ], 
        },
              
    ],
};
// 생산관리
const productRoutes = {
    path: '',
    name: '생산관리',
    icon: 'dripicons-arrow-left',
    children: [
        {
            path: '',
            name: '기본정보',
            children: [
                {
                    path: '',
                    name: '작업조견표관리',
                    component: AdvancedTables,
                    route: PrivateRoute,
                },
                {
                    path: '',
                    name: '제조사양서관리',
                    component: AdvancedTables,
                    route: PrivateRoute,
                },
                {
                    path: '',
                    name: '제품별 CAPA 입력',
                    component: AdvancedTables,
                    route: PrivateRoute,
                },
            ], 
        },
        {
            path: '',
            name: '생산계획',
            children: [
                {
                    path: '',
                    name: '작업 근무시간 입력',
                    component: BasicTables,
                    route: PrivateRoute,
                },
                {
                    path: '',
                    name: '생산계획(인쇄,가공)',
                    component: AdvancedTables,
                    route: PrivateRoute,
                },
                {
                    path: '',
                    name: '생산계획(분단,제대)',
                    component: AdvancedTables,
                    route: PrivateRoute,
                },
                {
                    path: '',
                    name: '라인별생산계획',
                    component: AdvancedTables,
                    route: PrivateRoute,
                },
                
            ], 
        },
        {
            path: '',
            name: '생산실적',
            children: [
                {
                    path: '',
                    name: '생산실적조회',
                    component: AdvancedTables,
                    route: PrivateRoute,
                },
                {
                    path: '',
                    name: '부적합내역',
                    component: AdvancedTables,
                    route: PrivateRoute,
                },
                {
                    path: '',
                    name: '제품건별실적조회',
                    component: AdvancedTables,
                    route: PrivateRoute,
                },
                
            ], 
        },
        {
            path: '',
            name: '생산명세',
            children: [
                {
                    path: '',
                    name: '생산실적현황',
                    component: BasicTables,
                    route: PrivateRoute,
                },
                {
                    path: '',
                    name: '일일생산계획대실적',
                    component: AdvancedTables,
                    route: PrivateRoute,
                },
            ], 
        },
        {
            path: '',
            name: '재고관리',
            children: [
                {
                    path: '',
                    name: '재고수불(완제품)',
                    component: BasicTables,
                    route: PrivateRoute,
                },
                {
                    path: '',
                    name: '재고수불(반제품)',
                    component: AdvancedTables,
                    route: PrivateRoute,
                },
                {
                    path: '',
                    name: '실사조정제품',
                    component: AdvancedTables,
                    route: PrivateRoute,
                },
            ], 
        },
        {
            path: '',
            name: 'Loss 관리',
            children: [
                {
                    path: '',
                    name: 'Loss 현황',
                    component: AdvancedTables,
                    route: PrivateRoute,
                },
                {
                    path: '',
                    name: 'Loss발생내역',
                    component: AdvancedTables,
                    route: PrivateRoute,
                },
            ], 
        },
        {
            path: '',
            name: '생산관리',
            children: [
                {
                    path: '',
                    name: '동판위치관리',
                    component: AdvancedTables,
                    route: PrivateRoute,
                },
            ], 
        },
        {
            path: '',
            name: '현장관리',
            children: [
                {
                    path: '',
                    name: '인쇄1호기',
                    component: AnalyticsDashboard,
                    route: PrivateRoute,
                },
                {
                    path: '',
                    name: '인쇄2호기',
                    component: AnalyticsDashboard,
                    route: PrivateRoute,
                },
                {
                    path: '',
                    name: '인쇄3호기',
                    component: AnalyticsDashboard,
                    route: PrivateRoute,
                },
                {
                    path: '',
                    name: '드라이1호기',
                    component: AnalyticsDashboard,
                    route: PrivateRoute,
                },
                {
                    path: '',
                    name: '드라이2호기',
                    component: AnalyticsDashboard,
                    route: PrivateRoute,
                },
                {
                    path: '',
                    name: '압출1호기',
                    component: AnalyticsDashboard,
                    route: PrivateRoute,
                },
                {
                    path: '',
                    name: '압출2호기',
                    component: AnalyticsDashboard,
                    route: PrivateRoute,
                },
                {
                    path: '',
                    name: '경화실',
                    component: AnalyticsDashboard,
                    route: PrivateRoute,
                },
                {
                    path: '',
                    name: '슬리터1호기',
                    component: AnalyticsDashboard,
                    route: PrivateRoute,
                },
                {
                    path: '',
                    name: '슬리터2호기',
                    component: AnalyticsDashboard,
                    route: PrivateRoute,
                },
                {
                    path: '',
                    name: '슬리터3호기',
                    component: AnalyticsDashboard,
                    route: PrivateRoute,
                },
                {
                    path: '',
                    name: '슬리터4호기',
                    component: AnalyticsDashboard,
                    route: PrivateRoute,
                },
                
            ], 
        },
        
              
    ],
};

// 지원부서
const supportRoutes = {
    path: '',
    name: '지원부서',
    icon: 'dripicons-arrow-left',
    children: [
        {
            path: '',
            name: '외주관리',
            children: [
                {
                    path: '',
                    name: '외주 진행 현황',
                    component: AdvancedTables,
                    route: PrivateRoute,
                },
                {
                    path: '',
                    name: '외주 단가 이력',
                    component: AdvancedTables,
                    route: PrivateRoute,
                },
                {
                    path: '',
                    name: '외주거래내역',
                    component: AdvancedTables,
                    route: PrivateRoute,
                },
                {
                    path: '',
                    name: '임가공출고(바코드)',
                    component: AdvancedTables,
                    route: PrivateRoute,
                },
                {
                    path: '',
                    name: '임가공출고관리',
                    component: AdvancedTables,
                    route: PrivateRoute,
                },
                {
                    path: '',
                    name: '임가공입고',
                    component: AdvancedTables,
                    route: PrivateRoute,
                },
                {
                    path: '',
                    name: '임가공입고관리',
                    component: AdvancedTables,
                    route: PrivateRoute,
                },
            ], 
        },
        {
            path: '',
            name: '발주관리',
            children: [
                {
                    path: '',
                    name: '외주요청발주서',
                    component: BasicTables,
                    route: PrivateRoute,
                },
            ], 
        },
        {
            path: '',
            name: '업체관리',
            children: [
                {
                    path: '',
                    name: '임가공정산',
                    component: AdvancedTables,
                    route: PrivateRoute,
                },
                {
                    path: '',
                    name: '업체별 정산 조회',
                    component: AdvancedTables,
                    route: PrivateRoute,
                },
            ], 
        }, 
    ],
};
// 품질관리
const qualityRoutes = {
    path: '',
    name: '품질관리',
    icon: 'dripicons-arrow-left',
    children: [
        {
            path: '',
            name: '성적서관리',
            children: [
                {
                    path: '',
                    name: '제품검사성적서',
                    component: AdvancedTables,
                    route: PrivateRoute,
                },
            ], 
        },
        {
            path: '',
            name: '반품관리',
            children: [
                {
                    path: '',
                    name: '반품내역입력',
                    component: BasicTables,
                    route: PrivateRoute,
                },
            ], 
        },
    ],
};
// WMS
const wmsRoutes = {
    path: '',
    name: 'WMS',
    icon: 'dripicons-arrow-left',
    children: [
        {
            path: '',
            name: '기본정보',
            children: [
                {
                    path: '',
                    name: '셀CAPA관리',
                    component: AdvancedTables,
                    route: PrivateRoute,
                },
                {
                    path: '',
                    name: '라벨출력',
                    component: AdvancedTables,
                    route: PrivateRoute,
                },
            ], 
        },
        {
            path: '',
            name: '바코드관리',
            children: [
                {
                    path: '',
                    name: '라벨매칭',
                    component: BasicTables,
                    route: PrivateRoute,
                },
                {
                    path: '',
                    name: '자재입고',
                    component: BasicTables,
                    route: PrivateRoute,
                },
                {
                    path: '',
                    name: '셀입고',
                    component: BasicTables,
                    route: PrivateRoute,
                },
                {
                    path: '',
                    name: '이동',
                    component: BasicTables,
                    route: PrivateRoute,
                },
                {
                    path: '',
                    name: '출고',
                    component: BasicTables,
                    route: PrivateRoute,
                },
            ], 
        },
        {
            path: '',
            name: '수불관리',
            children: [
                {
                    path: '',
                    name: '셀재고조회',
                    component: AdvancedTables,
                    route: PrivateRoute,
                },
                {
                    path: '',
                    name: '자재수불부',
                    component: AdvancedTables,
                    route: PrivateRoute,
                },
            ], 
        }, 
    ],
};


// dashboards
const dashboardRoutes = {
    path: '/dashboard',
    name: 'Dashboards',
    icon: 'uil-home-alt',
    header: 'Navigation',
    children: [
        {
            path: '/dashboard/analytics',
            name: 'Analytics',
            component: AnalyticsDashboard,
            route: PrivateRoute,
        },
        {
            path: '/dashboard/crm',
            name: 'CRM',
            component: CRMDashboard,
            route: PrivateRoute,
        },
        {
            path: '/dashboard/ecommerce',
            name: 'Ecommerce',
            badge: {
                variant: 'success',
                text: '3',
            },
            component: EcommerceDashboard,
            route: PrivateRoute,
        },
        {
            path: '/dashboard/project',
            name: 'Project',
            component: ProjectDashboard,
            route: PrivateRoute,
        },
    ],
};

const calendarAppRoutes = {
    path: '/apps/calendar',
    name: 'Calendar',
    route: PrivateRoute,
    roles: ['Admin'],
    icon: 'uil-calender',
    component: CalendarApp,
    header: 'Apps',
};

const chatAppRoutes = {
    path: '/apps/chat',
    name: 'Chat',
    route: PrivateRoute,
    roles: ['Admin'],
    icon: 'uil-comments-alt',
    component: ChatApp,
};

const ecommerceAppRoutes = {
    path: '/apps/ecommerce',
    name: 'eCommerce',
    route: PrivateRoute,
    roles: ['Admin'],
    icon: 'uil-store',
    children: [
        {
            path: '/apps/ecommerce/products',
            name: 'Products',
            component: EcommerceProducts,
            route: PrivateRoute,
        },
        {
            path: '/apps/ecommerce/details',
            name: 'Product Details',
            component: ProductDetails,
            route: PrivateRoute,
        },
        {
            path: '/apps/ecommerce/orders',
            name: 'Orders',
            component: Orders,
            route: PrivateRoute,
        },
        {
            path: '/apps/ecommerce/order/details',
            name: 'Order Details',
            component: OrderDetails,
            route: PrivateRoute,
        },
        {
            path: '/apps/ecommerce/customers',
            name: 'Customers',
            component: Customers,
            route: PrivateRoute,
        },
        {
            path: '/apps/ecommerce/shopping-cart',
            name: 'Shopping Cart',
            component: Cart,
            route: PrivateRoute,
        },
        {
            path: '/apps/ecommerce/checkout',
            name: 'Checkout',
            component: Checkout,
            route: PrivateRoute,
        },
        {
            path: '/apps/ecommerce/sellers',
            name: 'Sellers',
            component: Sellers,
            route: PrivateRoute,
        },
    ],
};

const emailAppRoutes = {
    path: '/apps/email',
    name: 'Email',
    route: PrivateRoute,
    roles: ['Admin'],
    icon: 'uil-envelope',
    children: [
        {
            path: '/apps/email/inbox',
            name: 'Inbox',
            component: Inbox,
            route: PrivateRoute,
        },
        {
            path: '/apps/email/details',
            name: 'Email Details',
            component: EmailDetail,
            route: PrivateRoute,
        },
    ],
};

const projectAppRoutes = {
    path: '/apps/projects',
    name: 'Projects',
    route: PrivateRoute,
    roles: ['Admin'],
    icon: 'uil-briefcase',

    children: [
        {
            path: '/apps/projects/list',
            name: 'List',
            component: Projects,
            route: PrivateRoute,
        },
        {
            path: '/apps/projects/:id/details',
            name: 'Detail',
            component: ProjectDetail,
            route: PrivateRoute,
        },
        {
            path: '/apps/projects/gantt',
            name: 'Gantt',
            component: ProjectGannt,
            route: PrivateRoute,
        },
        {
            path: '/apps/projects/new',
            name: 'Create Project',
            component: ProjectForm,
            route: PrivateRoute,
        },
    ],
};

const socialAppRoutes = {
    path: '/apps/social',
    name: 'Social Feed',
    route: PrivateRoute,
    roles: ['Admin'],
    icon: 'uil-rss',
    component: SocialFeed,
};

const taskAppRoutes = {
    path: '/apps/tasks',
    name: 'Tasks',
    route: PrivateRoute,
    roles: ['Admin'],
    icon: 'uil-clipboard-alt',
    children: [
        {
            path: '/apps/tasks/list',
            name: 'Task List',
            component: TaskList,
            route: PrivateRoute,
        },
        {
            path: '/apps/tasks/kanban',
            name: 'Kanban',
            component: Kanban,
            route: PrivateRoute,
        },
    ],
};




const appRoutes = [
    calendarAppRoutes,
    chatAppRoutes,
    ecommerceAppRoutes,
    emailAppRoutes,
    projectAppRoutes,
    socialAppRoutes,
    taskAppRoutes,
    
];

// pages
const pageRoutes = {
    path: '/pages',
    name: 'Pages',
    icon: 'uil-copy-alt',
    header: 'Custom',
    children: [
        {
            path: '/pages/starter',
            name: 'Starter',
            component: Starter,
            route: PrivateRoute,
        },
        {
            path: '/pages/profile',
            name: 'Profile',
            component: Profile,
            route: PrivateRoute,
        },
        {
            path: '/pages/invoice',
            name: 'Invoice',
            component: Invoice,
            route: PrivateRoute,
        },
        {
            path: '/pages/faq',
            name: 'FAQ',
            component: FAQ,
            route: PrivateRoute,
        },
        {
            path: '/pages/pricing',
            name: 'Pricing',
            component: Pricing,
            route: PrivateRoute,
        },
        {
            path: '/pages/error-404',
            name: 'Error - 404',
            component: ErrorPageNotFound,
            route: PrivateRoute,
        },
        {
            path: '/pages/error-500',
            name: 'Error - 500',
            component: ServerError,
            route: PrivateRoute,
        },
        {
            path: '/pages/timeline',
            name: 'Timeline',
            component: Timeline,
            route: PrivateRoute,
        },
    ],
};

// auth
const authRoutes = {
    path: '/account',
    name: 'Auth',
    children: [
        {
            path: '/account/login',
            name: 'Login',
            component: Login,
            route: Route,
        },
        {
            path: '/account/logout',
            name: 'Logout',
            component: Logout,
            route: Route,
        },
        {
            path: '/account/register',
            name: 'Register',
            component: Register,
            route: Route,
        },
        {
            path: '/account/confirm',
            name: 'Confirm',
            component: Confirm,
            route: Route,
        },
        {
            path: '/account/forget-password',
            name: 'Forget Password',
            component: ForgetPassword,
            route: Route,
        },
    ],
};

// ui
const uiRoutes = {
    path: '/ui',
    name: 'Components',
    icon: 'uil-package',
    header: 'UI Elements',
    children: [
        {
            path: '/ui/base',
            name: 'Base UI',
            children: [
                {
                    path: '/ui/accordions',
                    name: 'Accordions',
                    component: Accordions,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/alerts',
                    name: 'Alerts',
                    component: Alerts,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/badges',
                    name: 'Badges',
                    component: Badges,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/buttons',
                    name: 'Buttons',
                    component: Buttons,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/cards',
                    name: 'Cards',
                    component: Cards,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/carousel',
                    name: 'Carousel',
                    component: Carousel,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/dropdowns',
                    name: 'Dropdowns',
                    component: Dropdowns,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/grid',
                    name: 'Grid',
                    component: Grid,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/listgroups',
                    name: 'List Groups',
                    component: ListGroups,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/modals',
                    name: 'Modals',
                    component: Modals,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/popovers',
                    name: 'Popovers',
                    component: Popovers,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/progress',
                    name: 'Progress',
                    component: Progress,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/ribbons',
                    name: 'Ribbons',
                    component: Ribbons,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/spinners',
                    name: 'Spinners',
                    component: Spinners,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/tabs',
                    name: 'Tabs',
                    component: Tabs,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/toasts',
                    name: 'Toasts',
                    component: Toasts,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/tooltips',
                    name: 'Tooltips',
                    component: Tooltips,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/typography',
                    name: 'Typography',
                    component: Typography,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/widgets',
                    name: 'Widgets',
                    component: Widgets,
                    route: PrivateRoute,
                },
            ],
        },
        {
            path: '/ui/extended',
            name: 'Extended UI',
            children: [
                {
                    path: '/ui/dragdrop',
                    name: 'Drag and Drop',
                    component: DragDrop,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/rangesliders',
                    name: 'Range Sliders',
                    component: RangeSliders,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/ratings',
                    name: 'Ratings',
                    component: Ratings,
                    route: PrivateRoute,
                },
            ],
        },
        {
            path: '/ui/icons',
            name: 'Icons',
            children: [
                {
                    path: '/ui/icons/dripicons',
                    name: 'Dripicons',
                    component: Dripicons,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/icons/mdi',
                    name: 'Material Design',
                    component: MDIIcons,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/icons/unicons',
                    name: 'Unicons',
                    component: Unicons,
                    route: Unicons,
                },
            ],
        },
        {
            path: '/ui/forms',
            name: 'Forms',
            children: [
                {
                    path: '/ui/forms/basic',
                    name: 'Basic Elements',
                    component: BasicForms,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/forms/advanced',
                    name: 'Form Advanced',
                    component: FormAdvanced,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/forms/validation',
                    name: 'Form Validation',
                    component: FormValidation,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/forms/wizard',
                    name: 'Form Wizard',
                    component: FormWizard,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/forms/upload',
                    name: 'File Upload',
                    component: FileUpload,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/forms/editors',
                    name: 'Editors',
                    component: Editors,
                    route: PrivateRoute,
                },
            ],
        },
        {
            path: '/ui/charts',
            name: 'Charts',
            children: [
                {
                    path: '/ui/charts/apex',
                    name: 'Apex',
                    component: ApexChart,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/charts/brite',
                    name: 'Brite',
                    component: BriteChart,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/charts/chartjs',
                    name: 'Chartjs',
                    component: ChartJs,
                    route: PrivateRoute,
                },
            ],
        },
        {
            path: '/ui/tables',
            name: 'Tables',
            children: [
                {
                    path: '/ui/tables/basic',
                    name: 'Basic',
                    component: BasicTables,
                    route: PrivateRoute,
                },
                {
                    path: '/ui/tables/advanced',
                    name: 'Advanced',
                    component: AdvancedTables,
                    route: PrivateRoute,
                },
            ],
        },
        {
            path: '/ui/googlemaps',
            name: 'Google Maps',
            component: GoogleMaps,
            route: PrivateRoute,
        },
    ],
};

// flatten the list of all nested routes
const flattenRoutes = routes => {
    let flatRoutes = [];

    routes = routes || [];
    routes.forEach(item => {
        flatRoutes.push(item);

        if (typeof item.children !== 'undefined') {
            flatRoutes = [...flatRoutes, ...flattenRoutes(item.children)];
        }
    });
    return flatRoutes;
};

// All routes
const allRoutes = [rootRoute, dashboardRoutes, ...appRoutes, authRoutes, pageRoutes, uiRoutes, authorityRoutes,managementRoutes,
    salesRoutes,purchaseRoutes,productRoutes,supportRoutes,qualityRoutes,wmsRoutes];

const authProtectedRoutes = [dashboardRoutes, ...appRoutes, pageRoutes, uiRoutes,authorityRoutes,managementRoutes,
    salesRoutes,purchaseRoutes,productRoutes,supportRoutes,qualityRoutes,wmsRoutes];

const allFlattenRoutes = flattenRoutes(allRoutes);

export { allRoutes, authProtectedRoutes, allFlattenRoutes };
