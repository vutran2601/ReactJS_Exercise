import { useState, useMemo } from 'react';
import Title from './Title';
import styles from './styles.module.css';

const FruitList = ['Banana', 'Apple', 'Orange', 'Mango', 'Pineapple', 'Watermelon']

const handleSearch = () => {
    const keyword = document.querySelector('input[type="text"].search-input').value.toLowerCase().trim()
    const result = FruitList.filter((item) => {
        return keyword !== '' && item.toLowerCase().includes(keyword)
    })
    return result
}

const SearchFilter = () => {
    const [result, setResult] = useState([])

    return (
        <div className={styles.contentLayout}>
            <Title title='7. Build search filter'/>
            <div
                style={{
                    display: 'flex',
                    gap: '10px'
                }}
            >
                <span style={{ marginTop: '5px'}}>
                    Search:
                </span>

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        position: 'relative'
                    }}
                >
                    {/* Search input */}
                    <input
                        className='search-input'
                        type='text'
                        placeholder='Search fruit...'
                        onChange={() => {
                            const updatedResult = handleSearch();
                            setResult(updatedResult);
                            console.log(result.length === 0)
                        }}
                        style={{
                            width: '150px',
                            border: '1px solid #DEDEDE',
                            padding: '10px',
                            borderRadius: '5px',
                            boxSizing: 'border-box',
                        }}
                    />

                    {/* Search result */}
                    {   
                        result.length !== 0 &&
                        <div
                            style={{
                                width: '150px',
                                padding: '10px',
                                boxSizing: 'border-box',
                                border: '1px solid #DEDEDE',
                                backgroundColor: 'white',
                                borderRadius: '5px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '10px',
                                position: 'absolute',
                                bottom: '120%',
                                zIndex: 999
                            }}
                        >
                            {result.map((item, index) => {
                                return(
                                    <span key={index}>{item}</span>
                                )
                            })}
                        </div>
                    }
                </div>   
            </div>
        </div>
    )
}

export default SearchFilter