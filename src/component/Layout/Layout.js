import React, { useEffect, useState } from 'react';

import classes from './Layout.module.css';
// import weather from '../../test.json';

const Layout = (props) => {
    //State
    const [currentCondition, setCurrentCondition] = useState(props.weather?.current.condition);
    const [id, setId] = useState(0);

    //Consts
    const location = props.weather.location;
    const forecastDay = props.weather.forecast.forecastday;
    console.log(forecastDay)


    const onTimeSelect = (id, value) => {
        setId(id);
        setCurrentCondition(value);
    }

    return(
        <div className={classes.wrapper}>
            <div className={classes.container}>
                <h2>{currentCondition.text}</h2>
                <h3>{location.region},{location.country}</h3>

                <div className={classes.hours}>
                    {
                        forecastDay[0].hour.map((item, index) => {
                            return(
                                <div className={classes.item} key={index} onClick={() => {onTimeSelect(index, item.condition)}} style={{color: id === index ? '#c40000' : null}}>
                                    <h6>{item.time.substring(10,item.time.length)}</h6>
                                    <img src={item.condition.icon} alt='Img' />
                                    <p>{item.temp_c}</p>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}
export default Layout;