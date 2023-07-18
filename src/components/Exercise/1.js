import Title from './Title';
import styles from './styles.module.css';

const HelloWorld = () => {
    return (
        <div className={styles.contentLayout}>
            <Title title='1. Hello World'/>
            <div
                style={{
                    width: '500px',
                    height: '500px',
                    backgroundColor: '#fec800',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                Hello, World!
            </div>
        </div>
    )
}

export default HelloWorld