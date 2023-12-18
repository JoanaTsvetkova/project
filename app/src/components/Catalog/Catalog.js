import { CatalogItems } from "./Catalogitems/CatalogItems";
import styles from './Catalog.module.css'


export const Catalog = ({ games }) => {
    return (
        <main id="catalog" className={styles.catalog}>
            <div id="allGames" className={styles.allGames} >
                <h1>Browse All Games</h1>

                <div id="gameList" className={styles.gameList}>
                    {games.map(el => <CatalogItems key={el._id} {...el} />)}
                </div>

                {games.length === 0 && (
                    <div id="noGames">
                        <p>It`s kinda empty here... Why not add some games?</p>
                    </div>
                )}
            </div >
        </main>

    );
}