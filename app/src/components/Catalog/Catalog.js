import { CatalogItems } from "./Catalogitems/CatalogItems";

export const Catalog = ({ games }) => {
    console.log(games);
    return (
        <section id="catalog" className="all-games">
            <h1>Browse All Games</h1>

            <div className="game-list">
                {games.map(el => <CatalogItems key={el._id} {...el} />)}
            </div>

            {games.length === 0 && (
                <div class="no-games">
                    <p>It`s kinda empty here... Why not add some games?</p>
                </div>
            )}


        </section >

    );
}