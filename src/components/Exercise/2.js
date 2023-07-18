import { useState } from 'react';
import Title from './Title';
import styles from './styles.module.css';

// Animal icon import
import Dog from '../../assets/images/Animals/Dog.png';
import Cat from '../../assets/images/Animals/Cat.png';
import Chicken from '../../assets/images/Animals/Chicken.png';
import Cow from '../../assets/images/Animals/Cow.png';
import Sheep from '../../assets/images/Animals/Sheep.png';
import Horse from '../../assets/images/Animals/Horse.png';

const MappingList = () => {
    const [animals] = useState([
        {
            name: 'dog',
            icon: Dog,
        },
        {
            name: 'cat',
            icon: Cat,
        },
        {
            name: 'chicken',
            icon: Chicken,
        },
        {
            name: 'cow',
            icon: Cow,
        },
        {
            name: 'sheep',
            icon: Sheep,
        },
        {
            name: 'horse',
            icon: Horse,
        },
    ]);

    return (
        <div className={styles.contentLayout}>
            <Title title="2. Mapping through a-list and rendering" />
            <table style={{ borderCollapse: 'collapse' }}>
                <tbody>
                    {animals.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td
                                    style={{
                                        border: '1px solid #DEDEDE',
                                        padding: '15px 30px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        width: '100px'
                                    }}
                                >
                                    <img
                                        src={item.icon}
                                        alt='Animal'
                                        width='24px'
                                        height='24px'
                                        style={{ marginRight: '5px' }}
                                    />
                                    <span>{item.name}</span>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default MappingList;
