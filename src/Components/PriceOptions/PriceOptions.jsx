import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const PriceOptions = () => {
    const Prices = [
        {
          "id": 1,
          "name": "Basic",
          "price": 30,
          "duration": "monthly",
          "features": [
            "Access to gym equipment",
            "Locker facility",
            "1 group class per week",
            "No personal training"
          ]
        },
        {
          "id": 2,
          "name": "Standard",
          "price": 50,
          "duration": "monthly",
          "features": [
            "Access to gym equipment",
            "Locker facility",
            "3 group classes per week",
            "1 personal training session per month",
            "Access to sauna"
          ]
        },
        {
          "id": 3,
          "name": "Premium",
          "price": 80,
          "duration": "monthly",
          "features": [
            "Access to gym equipment",
            "Locker facility",
            "Unlimited group classes",
            "4 personal training sessions per month",
            "Access to sauna and steam room",
            "Nutritional guidance"
          ]
        },
        {
          "id": 4,
          "name": "Annual VIP",
          "price": 800,
          "duration": "annually",
          "features": [
            "Access to gym equipment",
            "Private locker",
            "Unlimited group classes",
            "12 personal training sessions per month",
            "Access to VIP lounge",
            "Free fitness assessment",
            "Personalized workout plan",
            "Unlimited sauna and steam room access",
            "Priority access to new facilities"
          ]
        }
      ]
      
    return (
        <div>
        <h1 className=' text-[2rem] font-extrabold text-center mt-[2rem]'> Gym Best Prices In The Town</h1>
        
        <div className=' grid md:grid-cols-4 mt-[2rem] gap-4 mb-[2rem] '>
        { Prices.map( option =>
            <PriceOption 
            key={PriceOptions.id}
            option={option}></PriceOption>)
        }
        </div>

        </div>
    );
};

export default PriceOptions;