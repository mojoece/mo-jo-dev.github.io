import React from 'react';
import { certificateCards } from '../../constants/certificate';
import { Link } from 'react-router-dom';

const Certificate = () =>
{

    return (
        <div className='banner-wrapper mt-10'>
            <div className='wrapper'>
                <div className='images'>
                    { certificateCards.map( ( ele, index ) => (
                       
                        <div className='image' key={ index }>
                            <Link to={ ele.link } target='_blank'>
                                <img loading="lazy"  className='img-card' src={ ele.image } alt={ ele.alt } />
                            </Link>    
                        </div>
                      
                    ) ) }
                </div>
                <div className='images'>
                    { certificateCards.map( ( ele, index ) => (
                        <div className='image' key={ index }>
                            <Link to={ ele.link } target='_blank'>
                                <img loading="lazy" className='img-card' src={ ele.image } alt={ ele.alt } />
                            </Link>
                        </div>

                    ) ) }
                </div>
            </div>
        </div>
    );
};

export default Certificate;