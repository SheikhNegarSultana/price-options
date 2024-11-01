import React from 'react';
import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {
    const{ name  , features, price} = option
    return (
        <div className=' bg-slate-500 p-9 flex flex-col  '>
        <div className='text-center'>    
            <h1>
                <span className=' text-[2rem] font-bold  '> {price}</span>
                <span>/mon </span>
            </h1>
            <h2 className=' text-[1rem] font-semibold'>{name}</h2>
        </div> 

            <div className=' mt-6 flex-grow '>
            {
                features.map( ( feature , index) =>
                    <Feature
                    key={index}
                    feature={feature}
                    ></Feature>
                )
            }
            </div>
        
        <button className=' mt-12 w-full bg-slate-950 p-[1rem] rounded-2xl text-white font-extrabold  hover:bg-red-300  '> Buy Now </button>

        </div>
    );
};

PriceOption.propTypes ={
    option:PropTypes.object
}
export default PriceOption;