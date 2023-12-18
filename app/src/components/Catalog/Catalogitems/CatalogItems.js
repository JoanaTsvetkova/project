import styles from '../Catalog.module.css'

export const CatalogItems = ({
    name,
    image,
    _id
}) => {
    return (
        <div id="game" className={styles.game}>
            <div id="gameImg" className={styles.gameImg}>
                <img src={image} alt={name}/>
            </div>
            <div id="gameInfo" className={styles.gameInfo}> 
                <a href={`/catalog/${_id}`} id="btnDetails" className={styles.btnDetails}>
                    {name}
                </a>
            </div>
        </div>

    );
}