import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Software Developer ", "Content Writer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <TrackVisibility>
            {({ isVisible }) => (
              <div
                className={isVisible ? "animate__animated animate__fadeIn" : ""}
              >
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>
                  {`Hi! I'm Emmanuel, `}
                  <br />{" "}
                  <span
                    className="txt-rotate"
                    dataPeriod="1000"
                    data-rotate='[ "Software Engineer", "Content Creator"]'
                  >
                    <span className="wrap">{text}</span>
                  </span>
                </h1>
                <p
                  style={{
                    background: "rgba(100,100,100,0.4)",
                    padding: "10px",
                    color: "white",
                    borderRadius: "5px",
                  }}
                >
                  Welcome to my portfolio! I am Olajumoke Emmanuel, a software
                  engineer passionate about solving real-world problems through
                  innovative technology. With experience in designing and
                  developing scalable applications, I have contributed to
                  impactful projects in various sectors. I specialize in backend
                  development using Node.js, Express, and MongoDB, and have
                  worked on applications ranging from food ordering systems to
                  house marketplaces. My background in engineering equips me
                  with strong problem-solving skills, and I am constantly
                  seeking opportunities to create solutions that address the
                  needs of local communities and beyond. Let’s build something
                  great together!
                </p>
                <button onClick={() => console.log("connect")}>
                  Let’s Connect <ArrowRightCircle size={25} />
                </button>
              </div>
            )}
          </TrackVisibility>
        </Row>
      </Container>
    </section>
  );
};
