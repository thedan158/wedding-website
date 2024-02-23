import { createContext, useContext, useEffect, useRef, useState } from "react";
import { Bounce } from "react-toastify";

import headerImage from "./assets/images/header2.jpg";
import hy from "./assets/images/double-happiness (4).png";
import std from "./assets/images/save-the-date.png";
import invitation from "./assets/images/invitation.gif";
import envelope from "./assets/images/red-envelope.png";
import qr1 from "./assets/images/hieuqr.jpg";
import qr2 from "./assets/images/phuongqr.jpg";
import backgroundMusic from "./assets/musics/music1.mp3";
import date from "./assets/images/date.jpg";
import bride from "./assets/images/bride.png";
import groom from "./assets/images/groom.png";
import { firestore } from "../firebase";
import Slider from "react-slick";
import anh1 from "./assets/images/426379342_1057517258798115_8318658997169544941_n.jpg";
import anh2 from "./assets/images/426478434_585509197127357_5064421746752746657_n.jpg";
import anh3 from "./assets/images/426720657_910949100496633_5466878989380382825_n.jpg";
import anh4 from "./assets/images/427866520_744558137618451_353491224585213510_n.jpg";
import anh5 from "./assets/images/428047756_382960147710081_8260747553863743478_n.jpg";
import anh6 from "./assets/images/anh.jpg";
import anh7 from "./assets/images/chi.jpg";
import anh8 from "./assets/images/anh8.jpg";
import anh9 from "./assets/images/anh9.jpg";
import anh10 from "./assets/images/anh10.jpg";
import anh11 from "./assets/images/anh11.jpg";
import anh12 from "./assets/images/anh12.jpg";
import anh13 from "./assets/images/anh13.jpg";
import anh14 from "./assets/images/anh14.jpg";
import CountdownClock from "./Countdown";
import { toast } from "react-toastify";
import { useMediaQuery } from "react-responsive";

function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    autoplay: true,

    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img
            src={anh1}
            alt="Example"
            style={{ maxWidth: "100%", height: "auto", padding: 10 }}
          />{" "}
        </div>
        <div>
          <img
            src={anh2}
            alt="Example"
            style={{ maxWidth: "100%", height: "auto", padding: 10 }}
          />{" "}
        </div>
        <div>
          <img
            src={anh3}
            alt="Example"
            style={{ maxWidth: "100%", height: "auto", padding: 10 }}
          />{" "}
        </div>{" "}
        <div>
          <img
            src={anh4}
            alt="Example"
            style={{ maxWidth: "100%", height: "auto", padding: 10 }}
          />{" "}
        </div>{" "}
        <div>
          <img
            src={anh5}
            alt="Example"
            style={{ maxWidth: "100%", height: "auto", padding: 10 }}
          />{" "}
        </div>{" "}
        <div>
          <img
            src={anh6}
            alt="Example"
            style={{ maxWidth: "100%", height: "auto", padding: 10 }}
          />{" "}
        </div>
        <div>
          <img
            src={anh7}
            alt="Example"
            style={{ maxWidth: "100%", height: "auto", padding: 10 }}
          />{" "}
        </div>
        <div>
          <img
            src={anh8}
            alt="Example"
            style={{ maxWidth: "100%", height: "auto", padding: 10 }}
          />{" "}
        </div>
        <div>
          <img
            src={anh9}
            alt="Example"
            style={{ maxWidth: "100%", height: "auto", padding: 10 }}
          />{" "}
        </div>
        <div>
          <img
            src={anh10}
            alt="Example"
            style={{ maxWidth: "100%", height: "auto", padding: 10 }}
          />{" "}
        </div>
        <div>
          <img
            src={anh11}
            alt="Example"
            style={{ maxWidth: "100%", height: "auto", padding: 10 }}
          />{" "}
        </div>
        <div>
          <img
            src={anh12}
            alt="Example"
            style={{ maxWidth: "100%", height: "auto", padding: 10 }}
          />{" "}
        </div>
        <div>
          <img
            src={anh13}
            alt="Example"
            style={{ maxWidth: "100%", height: "auto", padding: 10 }}
          />{" "}
        </div>
        <div>
          <img
            src={anh14}
            alt="Example"
            style={{ maxWidth: "100%", height: "auto", padding: 10 }}
          />{" "}
        </div>
      </Slider>
    </div>
  );
}

const ModernButton = () => {
  return (
    <button className="animated-button">
      <svg
        viewBox="0 0 24 24"
        className="arr-2"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
      </svg>
      <span className="text">Gửi lời chúc</span>
      <span className="circle"></span>
      <svg
        viewBox="0 0 24 24"
        className="arr-1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
      </svg>
    </button>
  );
};
const ChatDiv = () => {
  const { handleSuccess } = useContext(AppContext);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loichucData, setLoichucData] = useState([]);

  useEffect(() => {
    const unsubscribe = firestore
      .collection("loichuc")
      .onSnapshot((snapshot) => {
        const loichucList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setLoichucData(loichucList);
      });

    return () => unsubscribe();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (name.trim() !== "" && message.trim() !== "") {
        await firestore.collection("loichuc").add({
          name: name, // Replace with the name you want to add
          description: message, // Replace with the description you want to add
        });
        setName("");
        setMessage("");
        handleSuccess();
      }
    } catch (error) {
      console.error("Error sending document: ", error);
    }
  };

  return (
    <div id="loichuc" className="chat-container">
      <img src={invitation} width={100} height={100} />
      <h2 style={{ fontFamily: "HelloHoney", fontSize: 50 }}>Sổ Lưu Bút</h2>
      <div className="card-wrapper">
        <div className="card">
          <div>
            <div className="form__group">
              <input
                type="text"
                className="form__input"
                id="name"
                placeholder="Tên của bạn"
                required=""
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="name" className="form__label">
                Tên của bạn
              </label>
            </div>
          </div>
          <div>
            <div className="form__group">
              <textarea
                type="text"
                className="form__input"
                id="description"
                placeholder="Lời chúc"
                required=""
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <label htmlFor="description" className="form__label">
                Lời chúc
              </label>
            </div>
          </div>
          <div onClick={handleSubmit} className="button-wrapper">
            <ModernButton />{" "}
          </div>
        </div>
        <div className="card">
          {loichucData.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: index % 2 === 0 ? "#e0ddaa" : "transparent",
                padding: 10,
              }}
            >
              <h3 style={{ textAlign: "left" }}>{item.name}</h3>
              <h4 style={{ textAlign: "left" }}>{item.description}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
const BankDiv = () => {
  return (
    <div id="mungcuoi" className="chat-container">
      <img src={envelope} width={100} height={100} />
      <h2 style={{ fontFamily: "HelloHoney", fontSize: 50 }}>Gửi Quà Cưới</h2>
      <div className="card-wrapper">
        <div className="card">
          <img src={qr1} width={250} height={250} />
        </div>
        <div className="card">
          <img src={qr2} width={250} height={250} />
        </div>
      </div>
    </div>
  );
};
function Countdown() {
  const calculateTimeLeft = () => {
    const eventDate = new Date("2024-03-09");
    const currentDate = new Date();

    const difference = eventDate.getTime() - currentDate.getTime();

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <h3 className="countdown-text">
      {" "}
      {days} ngày {hours} giờ {minutes} phút {seconds} giây còn lại
    </h3>
  );
}
export const AppContext = createContext();

function App() {
  const toastId = useRef(null);

  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const toastPosition = isMobile ? "top-center" : "top-right";
  const [audioError, setAudioError] = useState(false);
  const [audioPlayed, setAudioPlayed] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(true); // Track whether the audio is enabled or disabled

  const audioRef = useRef(null);

  const handleAudioError = () => {
    setAudioError(true);
  };

  const handleAudioPlay = () => {
    setAudioPlayed(true);
  };
  const handleSuccess = () => {
    toast.dismiss();
    toastId.current = toast("🦄 Bạn đã gửi lời chúc thành công !", {
      position: toastPosition,
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      style: {
        marginTop: 50,
        justifyContent: "center",
        padding: 30,
        fontSize: 20,
      },
    });
    console.log("sent");
  };
  const toggleAudio = () => {
    if (audioEnabled) {
      audioRef.current.pause(); // Pause the audio
    } else {
      audioRef.current.play(); // Play the audio
    }
    setAudioEnabled(!audioEnabled); // Toggle the audio enabled state
  };
  useEffect(() => {
    if (!audioPlayed && audioError) {
      setAudioError(false); // Reset the error state
    }
  }, [audioPlayed, audioError]);
  useEffect(() => {
    const parallax = document.getElementById("home-img-lg");
    const parallax1 = document.getElementById("parallax1");
    const parallax2 = document.getElementById("parallax2");

    const handleScroll = () => {
      let offset = window.pageYOffset;
      parallax.style.backgroundPositionX = offset * -0.3 - 100 + "px";

      let offset1 = window.pageYOffset - 3100;
      parallax1.style.backgroundPositionY = offset1 * 0.1 + "px";

      let offset2 = window.pageYOffset - 4800;
      parallax2.style.backgroundPositionY = offset2 * -0.1 + "px";
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const reveal = () => {
      const reveals = document.querySelectorAll(".reveal");
      const windowHeight = window.innerHeight;

      for (let i = 0; i < reveals.length; i++) {
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    };

    window.addEventListener("scroll", reveal);
    return () => window.removeEventListener("scroll", reveal);
  }, []);

  function myFunction() {
    // document.getElementById("check").checked = false;
  }
  return (
    <AppContext.Provider value={{ handleSuccess }}>
      <div className="header">
        <img src={headerImage} alt="Your Image" className="header-image" />
        <nav>
          <input type="checkbox" id="check" />
          <label htmlFor="check" className="checkbtn">
            <i className="fas fa-bars"></i>
          </label>
          <ul className="text">
            <li>
              <a href="#story" onClick={myFunction()}>
                CẶP ĐÔI
              </a>
            </li>
            <li>
              <a href="#stay" onClick={myFunction()}>
                SỰ KIỆN
              </a>
            </li>
            <li>
              <a href="#loichuc" onClick={myFunction()}>
                LỜI CHÚC
              </a>
            </li>
            <li>
              <a href="#mungcuoi" onClick={myFunction()}>
                MỪNG CƯỚI
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="home hz-margin">
        <h3 style={{ margin: 20 }}>CHÚNG MÌNH SẮP CƯỚI NHAU</h3>
        <h1>Hiếu & Phượng</h1>
        <div className="container-out">
          <div className="container-in">
            <img src={hy} alt="Your Image" width={100} height={100} />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: 20,
              }}
            >
              <h3
                style={{
                  width: 120,
                  margin: "0 10px",
                  borderTop: "1px solid black",
                  borderBottom: "1px solid black",
                }}
              >
                THỨ 7
              </h3>

              <div
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <h2>09</h2>
                <h3>2024</h3>
              </div>
              <h3
                style={{
                  width: 120,
                  margin: "0 10px",
                  borderTop: "1px solid black",
                  borderBottom: "1px solid black",
                }}
              >
                THÁNG 3
              </h3>
            </div>
            <Countdown />
            <h3>Khách sạn</h3>
            <h2 style={{ fontFamily: "HelloHoney", fontSize: 55, margin: 20 }}>
              Ngoại Thương
            </h2>
            <h3>TX. Kỳ Anh, Hà Tĩnh</h3>
          </div>
          <div className="home-img" id="home-img-lg"></div>
        </div>
      </div>

      <div className="home-img home-img-sm"></div>
      <div className="timeline hz-margin reveal">
        <div className="timeline-container">
          <div className="timeline-img"></div>
          <div className="timings">
            <img src={std} width={200} height={200} />
            <h2> Tiệc trà nhà gái</h2>
            <div className="text">
              19h, thứ 5, ngày 7 tháng 3 năm 2024 <br />
              Thôn Đông Sơn, Kỳ Phong, H. Kỳ Anh, Hà TĨnh
            </div>
            <h2> Lễ Đính Hôn</h2>
            <div className="text">8h, thứ 6, ngày 8 tháng 3 năm 2024</div>
            <h2> Tiệc trà nhà trai</h2>
            <div className="text">
              19h, thứ 6, ngày 8 tháng 3 năm 2024 <br />
              Số 2, Ngõ 12 Xuân Diệu, P. Hưng Trí, Tx. Kỳ Anh
            </div>
            <h2>Lễ Thành Hôn</h2>
            <div className="text">
              11h, thứ 7, ngày 9 tháng 3 năm 2024 <br />
              Khách sạn Ngoại Thương, P. Hưng Trí, Tx. Kỳ Anh
            </div>
          </div>
        </div>
      </div>

      <div className="v-reposition-container">
        <div className="h-reposition-container">
          <div>
            <div className="reveal">
              <div className="timeline-container">
                <div className="timeline-img1"></div>
                <div className="timings">
                  <div className="image-container">
                    <img src={bride} width={100} height={100} />
                  </div>
                  <h2>Phan Phượng</h2>
                  <div className="text">11/12/1995</div>
                  <h2>Nghề nghiệp</h2>
                  <div className="text">
                    Giáo viên âm nhạc
                    <br />
                    Trường Hội nhập quốc tế iSchool Hà Tĩnh
                    <br />
                    MC - Ca sĩ tự do
                  </div>
                </div>
              </div>

              <div className="timeline-container">
                <div className="timings">
                  <img src={groom} width={100} height={100} />
                  <h2>Đức Hiếu</h2>
                  <div className="text">30/04/1994</div>
                  <h2>Nghề nghiệp</h2>
                  <div className="text">
                    Bác sĩ ngoại tiết niệu
                    <br /> Khoa Ngoại tổng hợp
                    <br />
                    Bệnh viện Đa khoa Hà Tĩnh
                  </div>
                </div>
                <div className="timeline-img2"></div>
              </div>
            </div>
          </div>

          <div className="gallery hz-margin reveal">
            <div className="gallery-img"></div>
            <div className="gallery-img"></div>
            <div className="gallery-img"></div>
          </div>

          <div className="quote reveal">
            <h1>“Chỉ có một thứ hạnh phúc trên đời, yêu và được yêu.”.</h1>
            <div className="author text">George Sand</div>
          </div>

          <div className="hands" id="parallax1"></div>

          <div id="stay">
            <h2 className="reveal">LỊCH TRÌNH</h2>
            <div className="stay-container reveal">
              <div className="stay-item">
                <h3>
                  01. <br />
                  TỚI TRUNG TÂM TIỆC CƯỚI
                </h3>
                <div className="text">
                  ĐI THEO HƯỚNG DẪN <br /> Ở MAP BÊN DƯỚI NHA
                </div>
                <div
                  onClick={() =>
                    window.open(
                      "https://www.google.com/maps/place/Kh%C3%A1ch+s%E1%BA%A1n+Ngo%E1%BA%A1i+Th%C6%B0%C6%A1ng/@18.0772729,106.2868121,17z/data=!3m1!4b1!4m9!3m8!1s0x313889b7a46e7d63:0xff459b9b877b614f!5m2!4m1!1i2!8m2!3d18.0772678!4d106.289387!16s%2Fg%2F1tgm0bbj?hl=vi-VN&entry=ttu"
                    )
                  }
                  className="text links"
                >
                  GOOGLE MAPS
                </div>
              </div>
              <div className="stay-item">
                <h3>
                  02. <br />
                  KHI BẠN ĐÃ ĐẾN
                </h3>
                <div className="text">
                  ĐI VÀO TRONG TRUNG TÂM <br />
                </div>
                <div
                  onClick={() => (window.location.href = "tel:+84838515115")}
                  className="text links"
                >
                  HOẶC GỌI CHO BỌN MÌNH
                </div>
              </div>
              <div className="stay-item">
                <h3>
                  03. <br />
                  QUẨY HẾT MÌNH - VUI HẾT SỨC
                </h3>
                <div className="text">
                  Không say không về :D <br />
                </div>
                {/* <div className="text links">HIHIHI</div> */}
              </div>
            </div>
          </div>

          <div id="registry">
            <div className="registry-container reveal">
              <img className="date-image" src={date} />
            </div>
            <div className="registry-img registry-img-lg" id="parallax2"></div>
          </div>
          <div className="registry-img registry-img-sm"></div>

          <ChatDiv />
          <BankDiv />
          <SimpleSlider />
          <div className="parting-message reveal">
            <h1>Hope to See You!</h1>
          </div>
          <>
            {!audioError && (
              <audio
                ref={audioRef}
                src={backgroundMusic}
                autoPlay={audioEnabled}
                loop
                onError={handleAudioError}
                onPlay={handleAudioPlay}
              />
            )}
            {audioError && (
              <p>There was an error playing the audio. Please try again.</p>
            )}

            {/* Floating button to toggle audio */}
            <button
              className="btn"
              onClick={toggleAudio}
              style={{ position: "fixed", bottom: "20px", right: "20px" }}
            >
              <i
                className={
                  audioEnabled
                    ? "fa-solid fa-volume-high"
                    : "fa-solid fa-volume-xmark"
                }
              ></i>
            </button>
          </>
          <CountdownClock />
          <footer>
            <h2>Hãy gọi cho chúng mình</h2>
            <h2>Lê Đào Đức Hiếu: 0838515115</h2>
            <h2>Phan Thị Phượng: 0986856870</h2>
            <div className="text">
              © 2024 for Hiếu and Phượng. Made by{" "}
              <a
                href="https://www.facebook.com/people/Nguyen-The-Dan/pfbid0QhAmLYf4bL1RuovLcz4p8Y7rywbK9EGAxLPATiXWprVgWZ3SLG4b7VsqoLDXtmqul/"
                className="text"
              >
                @NTDAN
              </a>
            </div>
          </footer>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
