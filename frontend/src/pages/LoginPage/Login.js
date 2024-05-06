import React from "react";
import Header from "../../components/HeaderComponent/HeaderComponent";
import "./login.css";
import Footer from "../../components/FooterComponent/Footer";
import { Link } from "react-router-dom";

import Login from "../../assets/images/logo_login.jpg";
export default function LoginPage() {
    return (
        <div>

            <div className="container-fuid bg-gray">
                <section className="container">
                    <div className="d-flex row">
                        <div className="block-left col-6">
                            <img src={Login}></img>
                        </div>
                        <div className="block-right col-6">
                            <div className="bg-white w-80">
                                <h1>Đăng nhập</h1>
                                <div class="mb-3 mt-3 text-just">
                                    <label for="email" class="form-label">
                                        Nhập email:
                                    </label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="email"
                                        placeholder="Email"
                                        name="phone"
                                    />
                                </div>
                                <div class="mb-3 text-just">
                                    <label for="pwd" class="form-label">
                                        Mật khẩu:
                                    </label>
                                    <input
                                        type="password"
                                        class="form-control"
                                        id="pwd"
                                        placeholder="Nhập mật khẩu"
                                        name="pswd"
                                    />
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div class="form-check">
                                        <input
                                            class="form-check-input"
                                            type="checkbox"
                                            id="check1"
                                            name="option1"
                                            value="something"
                                        />
                                        <label class="form-check-label">Ghi nhớ tài khoản</label>
                                    </div>
                                    <div>
                                        <a href="frontend/src/pages/LoginPage/Login" className="forget-pass">
                                            Quên mật khẩu?
                                        </a>
                                    </div>
                                </div>
                                <div className="wrap-btn-login">
                                    <button className="btn btn-primary btn-login">
                                        Đăng nhập
                                    </button>
                                </div>

                                <div className="mt-4">
                                    Chưa có tài khoản ?{" "}
                                    <Link className="forget-pass" to="/register">
                                        Đăng kí ngay
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer></Footer>
        </div>
    );
}