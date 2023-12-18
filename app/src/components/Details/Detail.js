import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import * as gameService from '../../services/gameService'

export const Details = () => {
    const {id} = useParams();
    const [game, setGame] = useState({})
    console.log(id);

    useEffect(()=>{
        gameService.getOneGame(id).
        then(result => {
            setGame(result)
        })
    }, [id]);

    return(
        <section id="details-info">
  <div className="game-image">
    <img src="../lo_fi_room_purple_by_hyrumusic_dfvxfrr-fullview.jpg" />
  </div>
  <div className="game-info">
    <div className="game-text">
      <h1 id="name">Disney Dreamlight Valley</h1>
      <p id="genre">
        <span>Genre: Simulator</span>
      </p>
      <p id="genre">
        <span>Developer: Simulator</span>
      </p>
      <p id="description">
        Disney Dreamlight Valley is a hybrid between a life-sim and an adventure
        game rich with qul the Forgetting. Night Thorns grew
        across the land and severed the wonderful memories tied to this magical
        place. With nowhere else to go, the hopeless inhabitants of Dreamlight
        Valley retreated behind locked doors in the Dream Castle.
      </p>
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
</section>

    );
}