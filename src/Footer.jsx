import styles from './footer.module.css';
import footervideo from './assets/footervideo.gif'

function Footer() {

    return (
      <div id={styles.footerdiv}>
      <img width="100%" height="auto">
        <source src={footervideo}  />
      </img>  
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