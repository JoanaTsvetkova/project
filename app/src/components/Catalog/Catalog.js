export const Catalog = () => {
    return (
        <main id="catalog">
            <section className="all-games">
                <h1>Browse All Games</h1>
                <div className="game-list">
                    <div className="game">
                        <div className="game-img">
                            <img src="../download (1).jpeg" />
                        </div>
                        <div className="game-info">
                            <a href="#" className="btn-details">
                                Hogwards Legacy
                            </a>
                        </div>
                        <div className="game">
                            <div className="game-img">
                                <img src="../download (1).jpeg" />
                            </div>
                            <div className="game-info">
                                <a href="#" className="btn-details">
                                    Hogwards Legacy
                                </a>
                            </div>
                            <div className="game">
                                <div className="game-img">
                                    <img src="../download (1).jpeg" />
                                </div>
                                <div className="game-info">
                                    <a href="#" className="btn-details">
                                        Hogwards Legacy
                                    </a>
                                </div>
                                <div className="game">
                                    <div className="game-img">
                                        <img src="../download (1).jpeg" />
                                    </div>
                                    <div className="game-info">
                                        <a href="#" className="btn-details">
                                            Hogwards Legacy
                                        </a>
                                    </div>
                                </div>
                                {/* <div class="no-games">
                                        <p>It`s kinda empty here... Why not add some games?</p>
                                    </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

    );
}