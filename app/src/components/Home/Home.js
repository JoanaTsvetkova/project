import styles from './Home.module.css'

export const Home = () => {
    return(
        <main id="home" className={styles.home}>
        <div id="content" className={styles.content}>
            <h1>FIND YOUR  <br/> <span>NEXT GAME</span></h1>
            <a href="/catalog" id="browse" className={styles.browse}>BROWSE</a>
        </div>

    </main>

    );
}