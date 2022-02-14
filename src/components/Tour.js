import React, { useState } from 'react';
import {
    NoInterestedButton,
    TourContainer,
    TourDetails,
    TourImage,
    TourPrice,
    TourTitle,
} from '../styles/Element.style';

export default function Tour({
    name,
    info,
    image,
    price,
    id,
    handleNoInterested,
}) {
    const [show, setShow] = useState(true);

    const showMore = () => info.substring(0, 200);

    return (
        <TourContainer>
            <TourImage>
                <img src={image} alt={name} />
            </TourImage>
            <TourDetails>
                <TourTitle>
                    <h4>{name}</h4>
                    <TourPrice>${price} </TourPrice>
                </TourTitle>
                <p>
                    {show ? `${showMore()}...` : info}{' '}
                    <button type="button" onClick={() => setShow(!show)}>
                        {show ? 'Read More' : 'Show Loss'}
                    </button>
                </p>
                <NoInterestedButton>
                    <button onClick={() => handleNoInterested(id)}>
                        No Interested
                    </button>
                </NoInterestedButton>
            </TourDetails>
        </TourContainer>
    );
}
