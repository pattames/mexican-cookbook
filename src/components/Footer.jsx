import styles from "./Footer.module.css";

export default function Footer(){
    return (
<div className={styles.container}>
    <div className={styles.footerCotent} >
        <div className={styles.logo} >
            <img src="./public/logo.png" alt="logo" />
        </div>
        <div className={styles.navLinks}>
            <a href="">About Us || </a>
            <a href=""> Contact || </a>
            <a href=""> Recipes || </a>
            <a href=""> Story </a>
            <br />
            <br />
        </div>
        <div className={styles.browseCategories} >
            <div className={styles.browseCategoriesh2}>
            <h2>Browse Categories</h2>
            </div> 
            <div className={styles.browseCategoriesImg}>
                <a href=""><img src="./public/Footer Nachos Icon.svg" alt="" />Platos</a>
                <a href=""><img src="./public/Footer Tacos.svg" alt="" />Principales</a>
            </div>
        </div>
        <div className={styles.followUs} >
                <div className={styles.followUsh2} >
                    <h2>Follow us on..</h2>
                </div>
                
                <div className={styles.socialmedia}>
                    <img src="https://assets-global.website-files.com/6586e5fc525ee55fa1623142/65c34599dffef8b8405bdc44_facebook.svg" alt="" />
                    <img src="https://assets-global.website-files.com/6586e5fc525ee55fa1623142/65c3459919f6ebf408aaaea0_instagram.svg" alt="" />
                </div>
            </div>
     </div>
</div>

    );
}