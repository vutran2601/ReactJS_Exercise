import { useEffect } from 'react';
import Title from './Title';
import styles from './styles.module.css';

const AutoplaySlideshow = () => {
    const slider = document.querySelector('.image-slider')
    const firstImage = document.querySelector('.image-slider > img:first-child')
    const newFirstImage = firstImage.cloneNode(true);
    if (firstImage.style.marginLeft !== '-100%') firstImage.style.marginLeft =  '-100%';
    newFirstImage.style.marginLeft = '';
    slider.appendChild(newFirstImage);
    setTimeout(() => slider.removeChild(slider.firstElementChild), 1400)
}

const handleClickArrow = (type) => {
    const firstImage = document.querySelector('.image-slider > img:first-child')
    if (type === 'left') {
        
    } else {
        if (firstImage.style.marginLeft !== '-100%') firstImage.style.marginLeft =  '-100%';
    }
}

const SliderArrowButton = (props) => {
    return (
        <button
            onClick={() => handleClickArrow(props.type)}
            style={{
                height: '120px',
                width: '60px',
                borderRadius: props.type === 'left' ? '0 60px 60px 0' : '60px 0 0 60px',
                border: 'none',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '40px',
                position: 'absolute',
                backgroundColor: '#ffffff7d',
                top: '35%',
                left: props.type === 'left' ? '0px' : '',
                right: props.type === 'right' ? '0px' : '',
                cursor: 'pointer'
            }}
        >
            {
                props.type === 'left' ?
                <i className='fas fa-angle-left'></i> :
                <i className='fas fa-angle-right'></i>
            }
        </button>
    )
}

const ImageSlider = () => {

    useEffect(() => {
        let slider = setInterval(() => AutoplaySlideshow(), 4000)
        return () => clearInterval(slider)
    }, []);

    return (
        <div className={styles['content-layout']}>
            <Title title='8. Image slider'/>
            <div
                style={{
                    width: '560px',
                    height: '400px',
                    position: 'relative',
                }}
            >
                <SliderArrowButton type='left'/>
                <SliderArrowButton type='right'/>
                <div
                    className='image-slider'
                    style={{
                        display: 'flex',
                        overflow: 'hidden',
                    }}
                >
                    <img
                        src='https://kenwheeler.github.io/slick/img/fonz1.png'
                        alt='fonz1'
                        style={{
                            transition: '1.5s'
                        }}
                    />
                    <img
                        src='https://kenwheeler.github.io/slick/img/fonz2.png'
                        alt='fonz2'
                        style={{
                            transition: '1.5s'
                        }}
                    />
                    <img
                        src='https://kenwheeler.github.io/slick/img/fonz3.png'
                        alt='fonz3'
                        style={{
                            transition: '1.5s'
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default ImageSlider