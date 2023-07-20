import { Link } from 'react-router-dom';
import { exerciseRoutes } from '../../routes';

const Header = () => {
    return (
        <>
            <div
                style={{
                    backgroundColor: 'black',
                    height: 'fit-content',
                    padding: '25px 25px 0px 25px',

                    textAlign: 'center',
                    position: 'sticky',
                    top: '0px',
                    zIndex: 9999,
                }}
            >
                <span
                    style={{
                        marginBottom: '10px',
                        fontSize: '30px',
                        color: 'white',
                        fontWeight: 'bold',
                    }}
                >
                    [Netpower VN] Vu Tran - ReactJS Exercise
                </span>
                <div
                    className='nav-bar-menu'
                    style={{
                        display: 'flex',
                        gap: '20px',
                        justifyContent: 'center',
                    }}
                >
                    {exerciseRoutes.map((route, index) => {
                        return (
                            <Link
                                className='menu-item'
                                key={index}
                                to={route.path}
                                style={{
                                    textDecoration: 'none',
                                    color: 'white',
                                    fontSize: '17px',
                                    padding: '15px',
                                }}
                            >
                                {route.name}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Header;
