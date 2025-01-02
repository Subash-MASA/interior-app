import React from "react";
import Html from "../../assets/skills/html.png";
import Css from "../../assets/skills/css.png";
import Js from "../../assets/skills/javascript.webp";
import Boots from "../../assets/skills/bootstrap.png";
import ReactJs from "../../assets/skills/react.png";
import C from "../../assets/skills/c.png";
import Vscode from "../../assets/skills/vscode.png";
import Vs from "../../assets/skills/vs.png";

function Carousel() {
    return (
        <section class="clients py-5">
            <div class="container">
                <div
                    id="carouselExampleIndicators"
                    class="carousel slide circle"
                    data-bs-ride="carousel"
                >
                    <div class="carousel-indicators">
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="0"
                            class="active"
                            aria-current="true"
                            aria-label="Slide 1"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="1"
                            aria-label="Slide 2"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="2"
                            aria-label="Slide 3"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="3"
                            aria-label="Slide 4"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="4"
                            aria-label="Slide 5"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="5"
                            aria-label="Slide 6"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="6"
                            aria-label="Slide 7"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="7"
                            aria-label="Slide 8"
                        ></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div
                                class="row  align-items-center"
                                data-aos="zoom-in"
                                data-aos-duration="1500"
                                data-aos-once="true"
                            >
                                <div class="col-lg-2 px-5 col-md-3 col-sm-3 col-6 clients-img">
                                    <img src={Html} alt="html"/>
                                </div>
                                <div class="col-lg-2 px-5 col-md-3 col-sm-3 col-6 clients-img">
                                <img src={Css} alt="css"/>
                                </div>
                                <div class="col-lg-2 px-5 col-md-3 col-sm-3 d-none d-sm-block d-md-block d-lg-block clients-img">
                                <img src={Js} alt="js"/>
                                </div>
                                <div class="col-lg-2 px-5 col-md-3 col-sm-3 d-none d-sm-block d-md-block d-lg-block clients-img">
                                <img src={Boots} alt="boots"/>
                                </div>
                                <div class="col-lg-2 px-5 d-none d-lg-block clients-img">
                                <img src={ReactJs} alt="reactjs"/>
                                </div>
                                <div class="col-lg-2 px-5 d-none d-lg-block clients-img">
                                <img src={C} alt="c"/>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div
                                class="row  align-items-center"
                                data-aos="zoom-in"
                                data-aos-duration="1500"
                                data-aos-once="true"
                            >
                                <div class="col-lg-2 px-5 col-md-3 col-sm-3 col-6 clients-img">
                                <img src={Vscode} alt="vscode"/>
                                </div>
                                <div class="col-lg-2 px-5 col-md-3 col-sm-3 col-6 clients-img">
                                <img src={Vs} alt="vs"/>
                                </div>
                                <div class="col-lg-2 px-5 col-md-3 col-sm-3 d-none d-sm-block d-md-block d-lg-block clients-img">
                                <img src={Html} alt="html"/>
                                </div>
                                <div class="col-lg-2 px-5 col-md-3 col-sm-3 d-none d-sm-block d-md-block d-lg-block clients-img">
                                <img src={Css} alt="css"/>
                                </div>
                                <div class="col-lg-2 px-5 d-none d-lg-block clients-img">
                                <img src={Js} alt="js"/>
                                </div>
                                <div class="col-lg-2 px-5 d-none d-lg-block clients-img">
                                <img src={Boots} alt="boots"/>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div
                                class="row  align-items-center"
                                data-aos="zoom-in"
                                data-aos-duration="1500"
                                data-aos-once="true"
                            >
                                <div class="col-lg-2 px-5 col-md-3 col-sm-3 col-6 clients-img">
                                <img src={ReactJs} alt="react"/>
                                </div>
                                <div class="col-lg-2 px-5 col-md-3 col-sm-3 col-6 clients-img">
                                <img src={C} alt="c"/>
                                </div>
                                <div class="col-lg-2 px-5 col-md-3 col-sm-3 d-none d-sm-block d-md-block d-lg-block clients-img">
                                <img src={Vscode} alt="vscode"/>
                                </div>
                                <div class="col-lg-2 px-5 col-md-3 col-sm-3 d-none d-sm-block d-md-block d-lg-block clients-img">
                                <img src={Vs} alt="vs"/>
                                </div>
                                <div class="col-lg-2 px-5 d-none d-lg-block clients-img">
                                <img src={Html} alt="html"/>
                                </div>
                                <div class="col-lg-2 px-5 d-none d-lg-block clients-img">
                                <img src={Css} alt="css"/>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div
                                class="row  align-items-center"
                                data-aos="zoom-in"
                                data-aos-duration="1500"
                                data-aos-once="true"
                            >
                                <div class="col-lg-2 px-5 col-md-3 col-sm-3 col-6 clients-img">
                                <img src={Js} alt="js"/>
                                </div>
                                <div class="col-lg-2 px-5 col-md-3 col-sm-3 col-6 clients-img">
                                <img src={Boots} alt="boots"/>
                                </div>
                                <div class="col-lg-2 px-5 col-md-3 col-sm-3 d-none d-sm-block d-md-block d-lg-block clients-img">
                                <img src={ReactJs} alt="react"/>
                                </div>
                                <div class="col-lg-2 px-5 col-md-3 col-sm-3 d-none d-sm-block d-md-block d-lg-block clients-img">
                                <img src={C} alt="c"/>
                                </div>
                                <div class="col-lg-2 px-5 d-none d-lg-block clients-img">
                                <img src={Vscode} alt="vscode"/>
                                </div>
                                <div class="col-lg-2 px-5 d-none d-lg-block clients-img">
                                <img src={Vs} alt="vs"/>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div
                                class="row  align-items-center"
                                data-aos="zoom-in"
                                data-aos-duration="1500"
                                data-aos-once="true"
                            >
                                <div class="col-lg-2 px-5 col-md-3 col-sm-3 col-6 clients-img">
                                <img src={Html} alt="html"/>
                                </div>
                                <div class="col-lg-2 px-5 col-md-3 col-sm-3 col-6 clients-img">
                                <img src={Css} alt="css"/>
                                </div>
                                <div class="col-lg-2 px-5 col-md-3 col-sm-3 d-none d-sm-block d-md-block d-lg-block clients-img">
                                <img src={Js} alt="js"/>
                                </div>
                                <div class="col-lg-2 px-5 col-md-3 col-sm-3 d-none d-sm-block d-md-block d-lg-block clients-img">
                                <img src={Boots} alt="boots"/>
                                </div>
                                <div class="col-lg-2 px-5 d-none d-lg-block clients-img">
                                <img src={ReactJs} alt="react"/>
                                </div>
                                <div class="col-lg-2 px-5 d-none d-lg-block clients-img">
                                <img src={Css} alt="css"/>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div
                                class="row  align-items-center"
                                data-aos="zoom-in"
                                data-aos-duration="1500"
                                data-aos-once="true"
                            >
                                <div class="col-lg-2 px-5 col-md-3 col-sm-3 col-6 clients-img">
                                <img src={Vscode} alt="vscode"/>
                                </div>
                                <div class="col-lg-2 px-5 col-md-3 col-sm-3 col-6 clients-img">
                                <img src={Vs} alt="vs"/>
                                </div>
                                <div class="col-lg-2 px-5 col-md-3 col-sm-3 d-none d-sm-block d-md-block d-lg-block clients-img">
                                <img src={Html} alt="html"/>
                                </div>
                                <div class="col-lg-2 px-5 col-md-3 col-sm-3 d-none d-sm-block d-md-block d-lg-block clients-img">
                                <img src={Css} alt="css"/>
                                </div>
                                <div class="col-lg-2 px-5 d-none d-lg-block clients-img">
                                <img src={Js} alt="js"/>
                                </div>
                                <div class="col-lg-2 px-5 d-none d-lg-block clients-img">
                                <img src={Boots} alt="boots"/>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div
                                class="row  align-items-center"
                                data-aos="zoom-in"
                                data-aos-duration="1500"
                                data-aos-once="true"
                            >
                                <div class="col-lg-2 px-5 col-md-3 col-sm-3 col-6 clients-img">
                                <img src={ReactJs} alt="react"/>
                                </div>
                                <div class="col-lg-2 px-5 col-md-3 col-sm-3 col-6 clients-img">
                                <img src={C} alt="c"/>
                                </div>
                                <div class="col-lg-2 px-5 col-md-3 col-sm-3 d-none d-sm-block d-md-block d-lg-block clients-img">
                                <img src={Vscode} alt="vscode"/>
                                </div>
                                <div class="col-lg-2 px-5 col-md-3 col-sm-3 d-none d-sm-block d-md-block d-lg-block clients-img">
                                <img src={Vs} alt="vs"/>
                                </div>
                                <div class="col-lg-2 px-5 d-none d-lg-block clients-img">
                                <img src={Html} alt="html"/>
                                </div>
                                <div class="col-lg-2 px-5 d-none d-lg-block clients-img">
                                <img src={Css} alt="css"/>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div
                                class="row  align-items-center"
                                data-aos="zoom-in"
                                data-aos-duration="1500"
                                data-aos-once="true"
                            >
                                <div class="col-lg-2 px-5 col-md-3 col-sm-3 col-6 clients-img">
                                <img src={Js} alt="js"/>
                                </div>
                                <div class="col-lg-2 px-5 col-md-3 col-sm-3 col-6 clients-img">
                                <img src={Boots} alt="boots"/>
                                </div>
                                <div class="col-lg-2 px-5 col-md-3 col-sm-3 d-none d-sm-block d-md-block d-lg-block clients-img">
                                <img src={ReactJs} alt="react"/>
                                </div>
                                <div class="col-lg-2 px-5 col-md-3 col-sm-3 d-none d-sm-block d-md-block d-lg-block clients-img">
                                <img src={C} alt="c"/>
                                </div>
                                <div class="col-lg-2 px-5 d-none d-lg-block clients-img">
                                <img src={Vscode} alt="vscode"/>
                                </div>
                                <div class="col-lg-2 px-5 d-none d-lg-block clients-img">
                                <img src={Vs} alt="vs"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Carousel;
