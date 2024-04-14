import styles from './footer.module.css';
import footervideo from './assets/footervideo.mp4'

function Footer() {

    return (
      <div id={styles.footerdiv}>
       <video autoPlay loop muted playsInline width="100%" height="auto" src={footervideo} type="video/mp4" />
      <div className={styles.containeranimationportfolio}>
              <div className={styles.horizontalscrollingitems}>
                <div className={styles.horizontalscrollingitems__item}>
                bordieulafat@gmail.com . bordieulafat@gmail.com . bordieulafat@gmail.com . bordieulafat@gmail.com . bordieulafat@gmail.com .  bordieulafat@gmail.com .  bordieulafat@gmail.com .  bordieulafat@gmail.com . 
                </div>

                <div className={styles.horizontalscrollingitems__item}>
                bordieulafat@gmail.com . bordieulafat@gmail.com . bordieulafat@gmail.com . bordieulafat@gmail.com . bordieulafat@gmail.com .  bordieulafat@gmail.com .  bordieulafat@gmail.com .  bordieulafat@gmail.com . 
                </div>
              </div>
            </div>
      </div>
    )
  }
  
  export default Footer;