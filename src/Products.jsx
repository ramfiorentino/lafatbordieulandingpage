import styles from "./products.module.css";
import cami1 from "./assets/Products/prod-camiseta ENAMORADX DE MIS AMIGUES.webp";
import cami2 from "./assets/Products/prod-camiseta NO ESTES TRISTE.webp";
import zine1 from "./assets/Products/prod-fanzine COSAS QUE ME ENCONTRE EN LA CALLE.webp";
import libro1 from "./assets/Products/prod-libro CARTAS A MARIANNE.webp";
import libro2 from "./assets/Products/prod-libro NOSE QUE QUISE DECIR CON ESTO.webp";
import zine2 from "./assets/Products/prod-PACK ALEATORIO prints.webp";
import zine3 from "./assets/Products/prod-PRINT enamoradx de mis amigues.png";
import sticker from "./assets/Navbar/stickernavbar.png";

function Products() {
  return (
    <div className={styles.productscontainer}>
      <a href="https://lafatbordieu.myshopify.com/collections/camisetas" target="_blank" rel="noopener noreferrer" className={styles.customLink}>
        {" "}
        <div className={styles.collection} id="CAMISETAS">
          <div className={styles.collectiontitle}>
            <img src={sticker} width={40} height={"auto"} />
            <h2 className={styles.slidestitles}>camisetas</h2>
            <img src={sticker} width={40} height={"auto"} />
          </div>
          <ul className={styles.slides} id={styles.slides}>
            <li className={styles.slide}>
              <div className={styles.productdiv}>
                <img
                  src={cami1}
                  alt="Image #10"
                  draggable="false"
                  id={styles.camiseta}
                />
              </div>
            </li>
            <li className={styles.slide}>
              <div className={styles.productdiv}>
                <img
                  src={cami2}
                  alt="Image #10"
                  draggable="false"
                  id={styles.camiseta}
                />
              </div>
            </li>
          </ul>
        </div>
      </a>

      <a href="https://lafatbordieu.myshopify.com/collections/prints" target="_blank" rel="noopener noreferrer" className={styles.customLink}>
        <div className={styles.collection} id="FANZINES Y PRINTS">
          <div className={styles.collectiontitle}>
            <img src={sticker} width={40} height={"auto"} />
            <h2 className={styles.slidestitles}>fanzines y prints</h2>
            <img src={sticker} width={40} height={"auto"} />
          </div>
          <ul className={styles.slides} id={styles.slides}>
            <li className={styles.slide}>
              <div className={styles.productdiv}>
                <img src={zine1} alt="Image #10" draggable="false" />
              </div>
            </li>
            <li className={styles.slide}>
              <div className={styles.productdiv}>
                <img src={zine2} alt="Image #10" draggable="false" />
              </div>
            </li>
            <li className={styles.slide}>
              <div className={styles.productdiv}>
                <img src={zine3} alt="Image #10" draggable="false" />
              </div>
            </li>
          </ul>
        </div>{" "}
      </a>

      <a href="https://lafatbordieu.myshopify.com/collections/frontpage" target="_blank" rel="noopener noreferrer" className={styles.customLink}>
        {" "}
        <div className={styles.collection} id="LIBROS">
          <div className={styles.collectiontitle}>
            <img src={sticker} width={40} height={"auto"} />
            <h2 className={styles.slidestitles}>libros</h2>
            <img src={sticker} width={40} height={"auto"} />
          </div>
          <ul className={styles.slides} id={styles.slides}>
            <li className={styles.slide}>
              <div className={styles.productdiv}>
                <img src={libro1} alt="Image #10" draggable="false" />
              </div>
            </li>
            <li className={styles.slide}>
              <div className={styles.productdiv}>
                <img src={libro2} alt="Image #10" draggable="false" />
              </div>
            </li>
          </ul>
        </div>{" "}
      </a>
    </div>
  );
}

export default Products;
