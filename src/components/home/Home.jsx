import styles from "./home.module.css";
import { t } from "i18next";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div className={`home ${styles.home}`}>
      <img src="https://i.postimg.cc/G2rvjwCz/home.jpg" alt="home" />

      <h1>
        <Typewriter
          onInit={(typewriter) => {
            typewriter.pauseFor(2500).deleteAll().start();
          }}
          options={{
            strings: ["Web Developer", "Front-end", "Full Stack Developer"],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>

      <ul>
        <li>
          <span>{t("address")}:</span> {t("addressA")}
        </li>

        <li>
          <span>{t("email")}:</span> {t("emailA")}
        </li>
      </ul>
    </div>
  );
};

export default Home;
