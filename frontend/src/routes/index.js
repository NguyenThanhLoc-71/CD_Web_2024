import NavBarComponent from "../components/NavbarComponent/NavbarComponent";
import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import OrderPage from "../pages/OrderPage/OrderPage";
import ProductDetailPage from "../pages/ProductDetailPage/ProductDetailPage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import SignInPage from "../pages/SignInPage/SignInPage";
import SignUnPage from "../pages/SignUpPage/SignUpPage";
import TypeProductPage from "../pages/TypeProductPage/TypeProductPage";
import RegisterPage from "../pages/RegisterPage/Register.js";
import LoginPage from '../pages/LoginPage/Login.js'


export const routes = [
    {
        path: '/',
        page: HomePage,
        isShowHeader:true 
    },
    {
        path: '/order',
        page: OrderPage,
        isShowHeader:true 
    },
    {
        path: '/products',
        page: ProductsPage,
        isShowHeader:true 
    },
    {
        path: '/category/:categoryId',
        page: TypeProductPage,
        isShowHeader:true 
    },
    {
        path: '/sign-in',
        page: SignInPage,
        isShowHeader:true 
    },
    {
        path: '/sign-up',
        page: SignUnPage,
        isShowHeader:true 
    },
    {
        path: '/product/:productId',
        page: ProductDetailPage,
        isShowHeader:true 
    },
    {
        path: '*',
        page: NotFoundPage
    },
    {
        path: '/login',
        page: LoginPage,
        isShowHeader:true
    },
    {
        path: '/register',
        page: RegisterPage,
        isShowHeader:true
    }
    // ,
    // {
    //     path: '/system/admin',
    //     page: AdminPage,
    //     isShowHeader: false,
    //     isPrivated: true
    // },



]