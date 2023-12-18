import styles from './Contacts.module.css'

export const Contacts = () => {
    return (
        <main id='contacts' className={styles.contacts}>
            <div>
                <h1>Contact Us</h1>
                <p>
                    Are you having trouble with the application or do you have suggestions on how to improve it? Don`t hesetate to write us!
                </p>
                <p>
                    Email: cozycorner@gmail.com
                </p>
            </div>

        </main>
    )
}