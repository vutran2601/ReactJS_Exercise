import Title from './Title';
import styles from './styles.module.css';

const HelloWorld = () => {
    return (
        <div className={styles['content-layout']}>
            <Title title='1. Hello World'/>
            <div
                style={{
                    width: '400px',
                    height: '400px',
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