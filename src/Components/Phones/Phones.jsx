import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, ResponsiveContainer,XAxis, YAxis  } from 'recharts';
import { Audio } from 'react-loader-spinner';
const Phones = () => {
    const [phone, setPhone] = useState([]);
    const [load , setLoad] = useState(true);

    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(response => {
                const phoneData = response.data.data;
                const fakePhoneObj = phoneData.map(phone => {
                    const obj = {
                        name: phone.phone_name,
                        price: parseInt(phone.slug.split('-')[1])
                    };
                    return obj;
                });
                setPhone(fakePhoneObj);
                setLoad(false)
            })
            
    }, []);

    return (
        <div>
{ load && <Audio
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="three-dots-loading"
  wrapperStyle
  wrapperClass
/>}
            <h1>Total Phone: {phone.length}</h1>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={phone}>
                    <Bar dataKey="price" fill="#8884d8" />
                    <XAxis dataKey="name" />
                    <YAxis />
                </BarChart>

                
            </ResponsiveContainer>
        </div>
    );
};

export default Phones;
