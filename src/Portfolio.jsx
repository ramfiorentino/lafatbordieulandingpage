import styles from './portfolio.module.css';
import img1 from './assets/Portfolio/portfoliofotos1.jpg';
import img2 from './assets/Portfolio/portfoliofotos2.jpg';
import img3 from './assets/Portfolio/portfoliofotos3.jpg';
import img4 from './assets/Portfolio/portfoliofotos4.jpg';
import img5 from './assets/Portfolio/portfoliofotos5.jpg';
import img6 from './assets/Portfolio/portfoliofotos6.jpg';
import img7 from './assets/Portfolio/portfoliofotos7.jpg';
import img8 from './assets/Portfolio/portfoliofotos8.jpg';
import img9 from './assets/Portfolio/portfoliofotos9.jpg';
import img10 from './assets/Portfolio/portfoliofotos10.jpg';
import img11 from './assets/Portfolio/portfoliofotos11.jpg';
import img12 from './assets/Portfolio/portfoliofotos12.jpg';
import gif1 from './assets/Portfolio/portfoliogif1.gif';
import gif2 from './assets/Portfolio/portfoliogif2.gif';
import gif3 from './assets/Portfolio/portfoliogif3.gif';
import gif4 from './assets/Portfolio/portfoliogif4.gif';
import gif5 from './assets/Portfolio/portfoliogif5.gif';
import gif6 from './assets/Portfolio/portfoliogif6.gif';
import gif7 from './assets/Portfolio/portfoliogif7.gif';
import gif8 from './assets/Portfolio/portfoliogif8.gif';
import gif9 from './assets/Portfolio/portfoliogif9.gif';
import gif10 from './assets/Portfolio/portfoliogif10.gif';
import gif11 from './assets/Portfolio/portfoliogif11.gif';
import gif12 from './assets/Portfolio/portfoliogif12.gif';
import gif13 from './assets/Portfolio/portfoliogif13.gif';
import gif14 from './assets/Portfolio/portfoliogif14.gif';


function Portfolio() {

  const portfolioData = [
    {
      id: 1,
      name: 'Project 1',
      url: 'https://example.com/project1',
      image: img1,
    },
    {
      id: 2,
      name: 'Project 2',
      url: 'https://example.com/project1',
      image: img2,
    },
    {
      id: 3,
      name: 'Project 3',
      url: 'https://example.com/project1',
      image: img3,
    },
    {
      id: 4,
      name: 'Project 4',
      url: 'https://example.com/project1',
      image: img4,
    },
    {
      id: 5,
      name: 'Project 5',
      url: 'https://example.com/project1',
      image: img5,
    },
    {
      id: 6,
      name: 'Project 6',
      url: 'https://example.com/project1',
      image: img6,
    },
    {
      id: 7,
      name: 'Project 7',
      url: 'https://example.com/project1',
      image: img7,
    },
    {
      id: 8,
      name: 'Project 8',
      url: 'https://example.com/project1',
      image: img8,
    },
    {
      id: 9,
      name: 'Project 8',
      url: 'https://example.com/project1',
      image: img9,
    },
    {
      id: 10,
      name: 'Project 8',
      url: 'https://example.com/project1',
      image: img10,
    },
    {
      id: 11,
      name: 'Project 8',
      url: 'https://example.com/project1',
      image: img11,
    },
    {
      id: 12,
      name: 'Project 8',
      url: 'https://example.com/project1',
      image: img12,
    },
    {
      id: 13,
      name: 'Project 8',
      url: 'https://example.com/project1',
      image: gif1,
    },
    {
      id: 14,
      name: 'Project 8',
      url: 'https://example.com/project1',
      image: gif2,
    },
    {
      id: 15,
      name: 'Project 8',
      url: 'https://example.com/project1',
      image: gif3,
    },
    {
      id: 16,
      name: 'Project 8',
      url: 'https://example.com/project1',
      image: gif4,
    },
    {
      id: 17,
      name: 'Project 8',
      url: 'https://example.com/project1',
      image: gif5,
    },
    {
      id: 18,
      name: 'Project 8',
      url: 'https://example.com/project1',
      image: gif6,
    },
    {
      id: 19,
      name: 'Project 8',
      url: 'https://example.com/project1',
      image: gif7,
    },
    {
      id: 20,
      name: 'Project 8',
      url: 'https://example.com/project1',
      image: gif8,
    },
    {
      id: 21,
      name: 'Project 8',
      url: 'https://example.com/project1',
      image: gif9,
    },
    {
      id: 22,
      name: 'Project 8',
      url: 'https://example.com/project1',
      image: gif10,
    },
    {
      id: 23,
      name: 'Project 8',
      url: 'https://example.com/project1',
      image: gif11,
    },
    {
      id: 24,
      name: 'Project 8',
      url: 'https://example.com/project1',
      image: gif12,
    },
    {
      id: 25,
      name: 'Project 8',
      url: 'https://example.com/project1',
      image: gif13,
    },
    {
      id: 26,
      name: 'Project 8',
      url: 'https://example.com/project1',
      image: gif14,
    },
  ];

  return (
    <>
      <div className={styles.containeranimationportfolio}>
        <div className={styles.horizontalscrollingitems}>
          <div className={styles.horizontalscrollingitems__item}>
            la unica forma de averiguarlo es sentirlo . la unica forma de
            averiguarlo es sentirlo . la unica forma de averiguarlo es sentirlo
            . la unica forma de averiguarlo es sentirlo . la unica forma de
            averiguarlo es sentirlo . la unica forma de averiguarlo es sentirlo
            . la unica forma de averiguarlo es sentirlo .
          </div>

          <div className={styles.horizontalscrollingitems__item}>
            la unica forma de averiguarlo es sentirlo . la unica forma de
            averiguarlo es sentirlo . la unica forma de averiguarlo es sentirlo
            . la unica forma de averiguarlo es sentirlo . la unica forma de
            averiguarlo es sentirlo . la unica forma de averiguarlo es sentirlo
            . la unica forma de averiguarlo es sentirlo .
          </div>
        </div>
      </div>

      <div className="columns">
        <div className="column column-reverse">
        <img src={gif8} /> <img src={gif9} /> <img src={gif10} />
          <img src={gif1} /> <img src={gif2} /> <img src={gif3} />
          <img src={gif4} /> <img src={gif12} /> <img src={gif6}/> <img src={gif7} />
        </div>

        <div className="column middlecolumn">
        <img src={img1} /> <img src={img2} /> <img src={img3} />
           <img src={img5} /> <img src={img6} />
          <img src={img7} /> <img src={img8} /> <img src={img9} />
          <img src={img10} /> <img src={img11} /> <img src={img12} />
        </div>

        <div className="column column-reverse">
          <img src={gif8} /> <img src={gif9} /> <img src={gif10} />
          <img src={gif11} /> <img src={gif12} /> <img src={gif13}/> <img src={gif14} />
          <img src={gif1} /> <img src={gif5} /> <img src={gif3} />
        </div>
      </div>

      <div className={styles.containeranimationportfolio}>
        <div className={styles.horizontalscrollingitems}>
          <div className={styles.horizontalscrollingitems__item}>
            Despues no aleguen si quemamos todos nos vemos en 2021 . y si manana
            no estoy promateme que estaras bien . puede que las cosas que
            encuentres en este fanzine se caigan o se desprendan pero dejalas ir
            nomas para que asi otra persona pueda encontrarselas
          </div>

          <div className={styles.horizontalscrollingitems__item}>
            Despues no aleguen si quemamos todos nos vemos en 2021 . y si manana
            no estoy promateme que estaras bien . puede que las cosas que
            encuentres en este fanzine se caigan o se desprendan pero dejalas ir
            nomas para que asi otra persona pueda encontrarselas
          </div>
        </div>
      </div>
    </>
  );
}
  
  export default Portfolio;