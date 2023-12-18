import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from './Detail.module.css'

import * as gameService from '../../services/gameService'

export const Details = () => {
    const { id } = useParams();
    const [game, setGame] = useState({})

    useEffect(() => {
        gameService.getOneGame(id).
            then(result => {
                setGame(result);
            })
    }, [id]);

    return (
        <main id="details" className={styles.details}>
        <div id="detailsInfo" className={styles.detailsInfo}>
            <div id="gameImage" className={styles.gameImage}>
                <img src={game.image} />
            </div>
            <div id="gameInfo" className={styles.gamesInfo}>
                <div id="gameText" className={styles.gameText}>
                    <h1 id="name">{game.name}</h1>
                    <p id="genre">
                        <span>Genre: {game.genre}</span>
                    </p>
                    <p id="genre">
                        <span>Developer: {game.developer}</span>
                    </p>
                    <p id="description">{game.description}</p>
                </div>
                <div className="product-btn">
                    {/*Only for registered user and author of the publication */}
                    <div className="author">
                        <a href="#" className="btn-edit">
                            Edit
                        </a>
                        <a href="#" className="btn-delete">
                            Delete
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </main>

    );
}