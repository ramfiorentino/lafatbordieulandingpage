import styles from "./herosection.module.css";
import img1 from "./assets/Hero Section/herosectionimg1.png";
import img2 from "./assets/Hero Section/herosectionimg2.png";
import img3 from "./assets/Hero Section/herosectionimg3.png";
import img4 from "./assets/Hero Section/herosectionimg4.png";
import img5 from "./assets/Hero Section/herosectionimg5.png";
import img6 from "./assets/Hero Section/herosectionimg6.png";
import img7 from "./assets/Hero Section/herosectionimg7.png";
import img8 from "./assets/Hero Section/herosectionimg8.png";
import img9 from "./assets/Hero Section/herosectionimg9.png";
import img10 from "./assets/Hero Section/herosectionimg10.png";
import img11 from "./assets/Hero Section/herosectionimg11.png";
import video from "./assets/Hero Section/herosectionvideo.gif";
import button1 from "./assets/Navbar/button-lafat4.png";
import button2 from "./assets/Navbar/button-lafat3.png";
import button3 from "./assets/Navbar/button-lafat5.png";

function HeroSection() {
  return (
    <div id={styles.herosectiondiv}>
      <div id={styles.mobilebuttons}>
        <div id={styles.instagrambuttonmobile}>
          {" "}
          <a className={styles.customLink} href="https://www.instagram.com/lafatbordieu/" target="_blank" rel="noopener noreferrer"><img src={button1} /> </a>
          {" "}
        </div>
        <div id={styles.ebookbuttonmobile}>
          {" "}
          <a className={styles.customLink} href="https://lafatbordieu.myshopify.com/collections/e-books" target="_blank" rel="noopener noreferrer"><img src={button2} /> </a>
          {" "}
        </div>
      </div>

      <div id={styles.containerleft}>
        <div className={styles.containerleftimgs}>
          <img src={img1} id={styles.img1} />
          <img src={img2} id={styles.img2} />
        </div>

        <div className={styles.containerleftimgs}>
          <img src={img3} id={styles.img3} />
          <img src={img4} id={styles.img4} />
          <img src={img5} id={styles.img5} />
        </div>
      </div>

      <div id={styles.containervideo}>
        <img id={styles.video} src={video} />
      </div>

      <div id={styles.containerright}>
        <div id={styles.otroslinksbuttonmobile}>
          {" "}
          <a className={styles.customLink} href="https://www.lafatbordieu.com/otros-links" target="_blank" rel="noopener noreferrer"> <img src={button3} /> </a>
          {" "}
        </div>

        <div className={styles.containerrightimgs}>
          <img src={img6} id={styles.img6} />
          <img src={img8} id={styles.img8} />
          <img src={img10} id={styles.img10} />
        </div>

        <div className={styles.containerrightimgs}>
          <img src={img7} id={styles.img7} />
          <img src={img9} id={styles.img9} />
          <img src={img11} id={styles.img11} />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
