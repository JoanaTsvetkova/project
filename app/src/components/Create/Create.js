import { useState   } from "react";

import styles from './Create.module.css'


export const Create = ({
    onCreateGameSub
}) => {

    const[values, setValues] = useState({
        name: '',
        image: '',
        genre: '',
        developer: '',
        description: ''
    })

const onChangeHandler = (e) => {
    setValues(state => ({...state, [e.target.name]: e.target.value}));
};

const onSubmit = (e) => {
    e.preventDefault();
    onCreateGameSub(values);
}

    return (
        <main id="create" className={styles.create}>
            <section id="createContainer" className={styles.createContainer}>
                <div className="createContainerInfo">
                    <h1>Add A New Game</h1>
                    <form onSubmit={onSubmit}>
                        <label>Game Name:</label>
                        <input type="text" id="name" name="name" placeholder="Game Name.." value={values.name} onChange={onChangeHandler}/>

                        <label>Image URL:</label>
                        <input type="text" id="image" name="image" placeholder="http://..." value={values.image} onChange={onChangeHandler}/>

                        <label>Genre:</label>
                        <input type="text" id="genre" name="genre" placeholder="Genre.." value={values.genre} onChange={onChangeHandler}/>

                        <label>Developer:</label>
                        <input type="text" id="developer" name="developer" placeholder="Developer.." value={values.developer} onChange={onChangeHandler}/>

                        <label>Description:</label>
                        <textarea id="description" name="description" value={values.description} onChange={onChangeHandler}/>
                        <input type="submit" id="btn" defaultValue="Add Game" />
                    </form>
                </div>
            </section>
        </main>
    );
}