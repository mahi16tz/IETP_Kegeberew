import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "bootstrap/dist/css/bootstrap.min.css";
import splash from "../resource/splashpic.jpg";
import pic1 from "../resource/beza1.jpg";
import pic2 from "../resource/beza2.jpg";
import pic3 from "../resource/tomato2.jpg";
import pic4 from "../resource/tomato6.jpg";
import pic5 from "../resource/tomato7.jpg";
import "../style/splash.css";
import { Link } from "react-router-dom";
export const Splash = () => {
  //   state = {};

  return (
    <div className="splash-whole">
      <img className="top" src={splash} alt="" />
      <div className="list">
        <label htmlFor="language"></label>

        <select id="language">
          <option>Amharic</option>
          <option>English</option>
          <option>Afann Oromo</option>
        </select>
        <button>Go</button>
      </div>
      <h3>Comming Soon tomatoes from places</h3>
      <div className="cards">
        <div className="container py-4 px-4 justify-content-center ">
          <Swiper
            Freemode={true}
            grabCursor={true}
            modules={[FreeMode]}
            className="myswiper"
            onAutoplayStart={true}
            slidesPerView={7}
            spaceBetween={20}
          >
            <SwiperSlide>
              <div>
                <img src={pic1} alt="" />
                <b>
                  <p>Asela</p>
                </b>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={pic2} alt="" />
                <b>
                  <p>Debrezeit</p>
                </b>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={pic3} alt="" />
                <b>
                  <p>Nazreth</p>
                </b>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={pic5} alt="" />
                <b>
                  <p>Wenchi</p>
                </b>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={pic4} alt="" />
                <b>
                  <p>Ambo</p>
                </b>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={pic3} alt="" />
                <b>
                  <p>Sululta</p>
                </b>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={pic5} alt="" />
                <b>
                  <p>Nazreth</p>
                </b>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="cards">
        <div className="container py-4 px-4 justify-content-center ">
          <Swiper
            freemode={true}
            grabCursor={true}
            modules={[FreeMode]}
            className="myswiper"
            slidesPerView={3}
            spaceBetween={40}
          >
            <SwiperSlide>
              <div>
                <button className="signup">
                  <Link to="/details">
                    <b>Farmer</b>
                  </Link>
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <button className="signup">
                  <Link to="/details">
                    <b>Admin</b>
                  </Link>
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <button className="signup">
                  <Link to="/login">
                    <b>Customer</b>
                  </Link>
                </button>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Splash;
