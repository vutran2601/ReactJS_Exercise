import * as React from 'react';
import Header from '../components/Layout/header';
import HelloWorld from '../components/Exercise/1';
import MappingList from '../components/Exercise/2';
import CheckboxList from '../components/Exercise/3';
import ButtonNumberIncrement from '../components/Exercise/4';
import CustomForm from '../components/Exercise/5';
import RenderingJSON from '../components/Exercise/6';
import SearchFilter from '../components/Exercise/7';
import ImageSlider from '../components/Exercise/8';

const Page = () => {
    return (
        <>
            <Header />
            <div
                style={{
                    height: '100%',
                    padding: '50px',
                    display: 'grid',
                    justifyContent: 'center'
                }}
            >
                <HelloWorld/>
                <MappingList/>
                <CheckboxList/>
                <ButtonNumberIncrement/>
                <CustomForm/>
                <RenderingJSON/>
                <SearchFilter/>
                <ImageSlider/>
            </div>
        </>
    );
};

export default Page;
