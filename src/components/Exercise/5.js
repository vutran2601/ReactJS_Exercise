import { useState } from "react";
import Title from "./Title";
import styles from './styles.module.css';

const TextInput = (props) => {
    return (
        <input
            className='name-input'
            type='text'
            name={props.type}
            placeholder={props.placeholder}
            style={{
                width: '100%',
                border: '1px solid #DEDEDE',
                padding: '10px',
                borderRadius: '5px',
                fontSize: '12px',
                boxSizing: 'border-box'
            }}
        />
    )
}

const handleClick = () => {
    const formInfo = {
        'firstname': document.querySelector('input[type="text"][name="firstname"].name-input').value.trim(),
        'lastname': document.querySelector('input[type="text"][name="lastname"].name-input').value.trim()
    }
    return formInfo
}

const CustomForm = () => {
    const [formInfo, setFormInfo] = useState({
        'firstname': '',
        'lastname': ''
    });

    return (
        <div className={styles.contentLayout}>
            <Title title='5. Bulding a form'/>
            <div
                style={{
                    width: '35%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '12px',
                    whiteSpace: 'pre'
                }}
            >
                <TextInput type='firstname' placeholder='First name'/>
                <TextInput type='lastname' placeholder='Last name'/>
                <button
                    type="button"
                    onClick={() => {
                        const updatedFormInfo = handleClick();
                        setFormInfo(updatedFormInfo);
                    }}
                    style={{
                        width: '100%',
                        backgroundColor: '#F0003C',
                        border: 'none',
                        padding: '10px',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        color: 'white',
                        borderRadius: '10px',
                        boxShadow: '0px 5px #A30036',
                        cursor: 'pointer',
                    }}
                >
                    GREAT ME
                </button>
                <div
                    style={{
                        width: '100%',
                        height: '20px',
                        textAlign: 'center'
                    }}
                >
                    {Object.values(formInfo).some(value => value === '') ? 
                    <p style={{ color: 'blue', margin: '0px' }}>Please type your full name</p> :
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <span>Hello </span> 
                        <p style={{ fontWeight: 'bold', margin: '0px' }}>{formInfo.firstname} {formInfo.lastname}</p>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default CustomForm