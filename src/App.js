import './App.css';
import Header from './components/Layout/header';
import ExerciseRoutes from './routes';
import { BrowserRouter } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <div
                style={{
                    padding: '50px',
                    display: 'grid',
                    justifyContent: 'center'
                }}
            >
                <ExerciseRoutes/>
            </div>
        </BrowserRouter>
    )
}

export default App;
