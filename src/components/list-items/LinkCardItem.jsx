import { Link } from 'react-router-dom';
import React from 'react';

const LinkCardItem = ({ href, imgSrc, title, description }) => {
    return (
        <li className='card-container'>
            <Link to={ href }>
                <img src={ imgSrc } alt="" />
                <strong>{ title }</strong>
                
                {
                    description &&
                        <small>{ description }</small>
                }
            </Link>
        </li>
    );
};

export default LinkCardItem;