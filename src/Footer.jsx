import styles from './footer.module.css';
import footervideo from './assets/footervideo.png'

function Footer() {

    return (
      <div id={styles.footerdiv}>
      <video width="100%" height="auto" controls autoPlay loop muted>
        <source src={footervideo} type="video/mp4" />
      </video>  
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