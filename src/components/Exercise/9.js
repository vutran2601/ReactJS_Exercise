import { useState } from 'react';
import Title from './Title';
import styles from './styles.module.css';
import axios from 'axios';

const Container = (props) => {
    return (
        <div
            style={{
                padding: '30px 20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '5px',
                backgroundColor: 'white',
                justifyContent: 'center',
                borderRadius: '10px',
                boxShadow: '0px 0px 10px #BFD3BC',
            }}
        >
            <img src={props.avatar} alt="avatar" />
            <span style={{ fontWeight: 'bold' }}>{props.first_name + ' ' + props.last_name}</span>
            <span>{props.title}</span>
        </div>
    );
};

const WorkingWithAPI = () => {
    const [itemList, setItemList] = useState([]);

    const handleFetchRandom = async () => {
        const response = await axios.get('https://random-data-api.com/api/users/random_user?size=10')
        setItemList(response.data);
    }

    return (
        <div className={styles['content-layout']}>
            <Title title="9. Working with an API" />
            <button
                type="button"
                onClick={() => {
                    handleFetchRandom();
                }}
                style={{
                    width: '200px',
                    backgroundColor: '#F0003C',
                    border: 'none',
                    padding: '10px',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    color: 'white',
                    borderRadius: '10px',
                    boxShadow: '0px 5px #A30036',
                    cursor: 'pointer',
                    marginBottom: '40px'
                }}
            >
                Fetch Random
            </button>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'auto auto',
                    padding: '20px',
                    gap: '20px',
                    backgroundColor: '#DFF8DB',
                }}
            >
                {itemList.map((record, index) => {
                    return (
                        <Container
                            key={index}
                            avatar={record.avatar}
                            first_name={record.first_name}
                            last_name={record.last_name}
                            title={record.employment.title}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default WorkingWithAPI;
