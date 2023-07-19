import { useState } from "react";
import Title from "./Title";
import styles from './styles.module.css';

const ButtonNumberIncrement = () => {
    const [clickCount, setClickCount] = useState(0)

    return (
        <div className={styles.contentLayout}>
            <Title title='4. Button number increment'/>
            <div style={{ marginBottom: '10px' }}>Button has been clicked: {clickCount} {clickCount in [0, 1] ? 'time' : 'times'}</div>
            <button onClick={() => setClickCount(clickCount + 1)}>Click me</button>
        </div>
    )
}

export default ButtonNumberIncrement