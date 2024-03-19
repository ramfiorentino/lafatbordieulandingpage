import styles from './navbar.module.css';
import lafatlogo from './assets/Navbar/logo-lafat-op.gif'
import tiendaeuropa from './assets/Navbar/button-lafat2.png'
import tiendachile from './assets/Navbar/button-lafat1.png'
import ebook from './assets/Navbar/button-lafat3.png'
import otroslinks from './assets/Navbar/button-lafat5.png'
import instagram from './assets/Navbar/button-lafat4.png'
import stickernavbar from './assets/Navbar/stickernavbar.png'



function Navbar() {

  return (
    <div className={styles.navbar}>


        <div id={styles.navlogodiv}>
        <a href="/" className={`${styles.customLink4}`}> <img src={lafatlogo} alt='site logo' width={'80%'} height={'auto'} id={styles.lafatlogo} className={`${styles.navbutton}`}/> </a>
        </div>

        <div id={styles.navbuttonsdiv}>
          <div id={styles.navbuttonsdiv1}>
            <img src={stickernavbar} alt='lafat bordieu sticker' width={'10%'} height={'auto'} className={`${styles.hideformobile} ${styles.navstickers}`}/>
            <a href="https://lafatbordieu.myshopify.com/" target="_blank" rel="noopener noreferrer"> <img src={tiendaeuropa} alt='tienda europa button' width={'40%'} height={'auto'} className={`${styles.navbutton} ${styles.customLink}`}/> </a>
            <img src={stickernavbar} alt='lafat bordieu sticker' width={'10%'} height={'auto'} className={`${styles.navstickers}`}/>
            <a href="https://lafatchile.myshopify.com/" target="_blank" rel="noopener noreferrer"> <img src={tiendachile} alt='tienda chile button' width={'40%'} height={'auto'} className={`${styles.navbutton} ${styles.customLink}`}/> </a>
            <img src={stickernavbar} alt='lafat bordieu sticker' width={'10%'} height={'auto'} className={`${styles.hideformobile} ${styles.navstickers}`}/>
          </div>

          <div id={styles.navbuttonsdiv2} className={styles.hideformobile}>
          <a href="https://lafatbordieu.myshopify.com/collections/e-books" target="_blank" rel="noopener noreferrer"> <img src={ebook} alt='ebook button' width={'28%'} height={'auto'} className={`${styles.navbutton} ${styles.customLink2}`}/> </a>
          <a href="https://www.lafatbordieu.com/otros-links" target="_blank" rel="noopener noreferrer"> <img src={otroslinks} alt='otros links button' width={'36%'} height={'auto'} style={{marginLeft: 9}} className={`${styles.navbutton} ${styles.customLink2}`}/> </a>
          <a href="https://www.instagram.com/lafatbordieu/" target="_blank" rel="noopener noreferrer"> <img src={instagram} alt='instagram button' width={'36%'} height={'auto'} className={`${styles.navbutton} ${styles.customLink3}`}/> </a>
          </div>


      </div>

    </div>

  )
}

export default Navbar;