import React from 'react';
import PropTypes from 'prop-types';
import { FaCaretRight } from "react-icons/fa6";

const Feature = ({feature}) => {
    return (
        <div>
            <h1 className=' flex text-[1rem] font-semibold gap-4 '> <FaCaretRight className=' text-red-300' /> 
            {feature}
            </h1>
        </div>
    );
};

Feature.propTypes ={
    feature:PropTypes.array
}
export default Feature;