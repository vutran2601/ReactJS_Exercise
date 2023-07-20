import { useState } from "react"
import Title from "./Title";
import styles from './styles.module.css';

const handleCheck = () => {
    const checklist = document.querySelectorAll('input[type="checkbox"]')
    const checked = []
    for (let input of checklist) {
        if (input.checked) {
            checked.push(input.value)
        }
    }
    return checked
}

const CheckboxList = () => {
    const [itemChecked, setItemChecked] = useState([])

    return (
        <div className={styles['content-layout']}>
            <Title title='3. Checkbox list'/>
            <div 
                style={{
                    display: 'flex',
                    gap: '10px',
                    flexDirection: 'column',
                    alignItems: 'left'
                }}
            >
                <span>
                    Your CheckList:
                </span>
                <form
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'left',
                        gap: '5px',
                        position: 'relative',
                        left: '10%'
                    }}
                    onChange={() => {
                        const checked = handleCheck();
                        setItemChecked(checked);
                        console.log(itemChecked)
                    }}
                >
                    <div>
                        <input type='checkbox' value='Apple'/>
                        <label>Apple</label>
                    </div>
                    <div>
                        <input type='checkbox' value='Banana'/>
                        <label>Banana</label>
                    </div>
                    <div>
                        <input type='checkbox' value='Tea'/>
                        <label>Tea</label>
                    </div>
                    <div>
                        <input type='checkbox' value='Coffee'/>
                        <label>Coffee</label>
                    </div>
                </form>
                <span>Items checked are: </span>
                <div
                    style={{
                        paddingBottom: '2px',
                        paddingLeft: '20px',
                        borderBottom: '1px solid gray',
                        width: '250px',
                        height: '25px',
                        // position: 'relative',
                        // left: '-40px'
                    }}
                >
                    <div style={{ width: 'fit-content' }}>
                        {itemChecked.join(', ')}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckboxList