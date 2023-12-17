export const Create = () => {
    return (
        <main id="create">
            <section id="create-container">
                <div className="create-container-info">
                    <h1>Add A New Game</h1>
                    <form action="#" method="">
                        <label>Game Name:</label>
                        <input type="text" id="name" name="" placeholder="Game Name.." />
                        <label>Image URL:</label>
                        <input type="text" id="image" name="" placeholder="http://..." />
                        <label>Genre:</label>
                        <input type="text" id="genre" name="" placeholder="Genre.." />
                        <label>Developer:</label>
                        <input type="text" id="developer" name="" placeholder="Developer.." />
                        <label>Description:</label>
                        <textarea id="description" name="" defaultValue={""} />
                        <input type="submit" id="btn" defaultValue="Add Game" />
                    </form>
                </div>
            </section>
        </main>
    );
}