import React from 'react';
import './House-block-item.css';

const HouseBlockItem = (props) => {
    const newClassName = 'house-block-item ' + props.classNm;
    return (
        <div className={newClassName}>
            <div className='house-block-item--name' >
                {props.name}
            </div>
            <div className='house-block-item--logo'>
                <img src={props.img} alt={props.name} />
            </div>
            <div className='house-block-item--counter'>
                {props.score} очков
            </div>
        </div>
    )
}

export default HouseBlockItem;