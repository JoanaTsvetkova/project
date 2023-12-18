import styles from './About.module.css'

export const About = () => {
    return (
        <main id='about' className={styles.about}>
            <div>
                <h1>About Us</h1>
                <p>
                    Are you a cozy game player? If so you have found the right place for you! In here you will be able to discover new cozy games and maybe stumble upon a few old ones. You can also post your own recommendations for games to help other find them.
                </p>
                <a href="/catalog" id='catalogBtn'>Why don`t you browse some games?</a>
            </div>

        </main>
    )
}