import Title from './Title';
import styles from './styles.module.css';

const JSON_ListInput = [
	{
		id: '1',
		setup: 'What\'s the best thing about a Boolean?',
		punchline: 'Even if you\'re wrong, you\'re only off by a bit'
	},
	{
		id: '2',
		setup: 'Why do programmers wear glasses?',
		punchline: 'Because they need to C#'
	}
]


const Container = (props) => {
    return (
        <div
            style={{
                padding: '30px 20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                backgroundColor: 'white',
                justifyContent: 'center',
                textAlign: 'center',
                borderRadius: '10px',
                boxShadow: '0px 0px 10px #BFD3BC',
            }}
        >
            <span
                style={{
                    fontWeight: 'bold',
                    fontSize: '20px'
                }}
            >
                {props.setup}
            </span>
            <span style={{ fontSize: '14px' }}>{props.punchline}</span>
        </div>
    )
}

const RenderingJSON = () => {
    return (
        <div className={styles['content-layout']}>
            <Title title='6. Rendering JSON'/>
            <div
                style={{
                    display: 'flex',
                    padding: '20px',
                    gap: '20px',
                    backgroundColor: '#DFF8DB',
                    width: '630px',
                }}
            >
                {JSON_ListInput.map((item, index) => {
                    return (
                        <Container key={index} setup={item.setup} punchline={item.punchline}/>
                    )
                })}
            </div>
        </div>
    )
}

export default RenderingJSON