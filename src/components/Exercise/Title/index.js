const Title = (props) => {
    return (
        <div
            style={{
                width: '700px',
                marginBottom: '30px'
            }}
        >
            <div
                style={{
                    fontSize: '30px',
                    fontWeight: 'bold',
                    width: '100%',
                    textAlign: 'center'
                }}
            >
                {props.title}
            </div>
        </div>
    )
}

export default Title