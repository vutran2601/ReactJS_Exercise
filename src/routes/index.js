import { Routes, Route } from "react-router-dom";
import HelloWorld from "../components/Exercise/1";
import MappingList from '../components/Exercise/2';
import CheckboxList from '../components/Exercise/3';
import ButtonNumberIncrement from '../components/Exercise/4';
import CustomForm from '../components/Exercise/5';
import RenderingJSON from '../components/Exercise/6';
import SearchFilter from '../components/Exercise/7';
import ImageSlider from '../components/Exercise/8';
import WorkingWithAPI from "../components/Exercise/9";

const exerciseRoutes = [
    { 'name': 'Hello World', 'path': '/1_HelloWorld', 'component': <HelloWorld/> },
    { 'name': 'Mapping List', 'path': '/2_MappingList', 'component': <MappingList/> },
    { 'name': 'Checkbox List', 'path': '/3_CheckboxList', 'component': <CheckboxList/> },
    { 'name': 'Button Number Increment', 'path': '/4_ButtonNumberIncrement', 'component': <ButtonNumberIncrement/> },
    { 'name': 'Custom Form', 'path': '/5_CustomForm', 'component': <CustomForm/> },
    { 'name': 'Rendering JSON', 'path': '/6_RenderingJSON', 'component': <RenderingJSON/> },
    { 'name': 'Search Filter', 'path': '/7_SearchFilter', 'component': <SearchFilter/> },
    { 'name': 'Image Slider', 'path': '/8_ImageSlider', 'component': <ImageSlider/> },
    { 'name': 'Working with API', 'path': '/9_WorkingWithAPI', 'component': <WorkingWithAPI/>},
]

const ExerciseRoutes = () => {
    return (
        <Routes>
            {exerciseRoutes.map((route, index) => {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        element={route.component}
                    />
                )
            })}
        </Routes>
    )
}

export { exerciseRoutes }

export default ExerciseRoutes;