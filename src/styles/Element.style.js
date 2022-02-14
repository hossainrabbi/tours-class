import styled from 'styled-components';

// Tours Component
export const ToursContainer = styled.section`
    max-width: 600px;
    margin: 0 auto;
    margin-top: 50px;
    h2 {
        font-size: 35px;
        text-align: center;
        margin-bottom: 30px;
        position: relative;
        &::after {
            content: '';
            width: 80px;
            height: 4px;
            background-color: var(--main-color);
            position: absolute;
            left: 50%;
            bottom: -6px;
            transform: translateX(-50%);
        }
    }
`;

// Tour Component
export const TourContainer = styled.article`
    box-shadow: 0 5px 10px 0 var(--light-dark-white);
    margin-bottom: 40px;
    border-radius: 5px;
`;

export const TourImage = styled.div`
    height: 300px;
    img {
        min-width: 100%;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }
`;

export const TourDetails = styled.div`
    padding: 20px 30px;
    p {
        letter-spacing: 1px;
        color: var(--light-blue);
        font-weight: 400;
        button {
            border: none;
            cursor: pointer;
            padding: 2px 5px;
            border-radius: 3px;
            color: var(--main-color);
            background-color: var(--main-light-color);
        }
    }
`;

export const TourTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    font-size: 18px;
    padding: 8px 0;
`;

export const TourPrice = styled.h4`
    color: var(--main-color);
    background-color: var(--main-light-color);
    padding: 6px 20px 4px 20px;
    border-radius: 3px;
    font-weight: 500;
    font-size: 16px;
`;

export const NoInterestedButton = styled.div`
    text-align: center;
    margin-top: 10px;
    button {
        padding: 5px 20px;
        color: var(--red-dark);
        border: 1px solid var(--red-dark);
        background-color: none;
        cursor: pointer;
        transition: 0.3s;
        border-radius: 3px;
        &:hover {
            color: var(--light-white);
            background-color: var(--red-dark);
        }
    }
`;

// Error Component
export const ErrorComponent = styled.div`
    text-align: center;
    margin-top: 50px;
    h1 {
        color: var(--red-dark);
        &:nth-child(2) {
            font-size: 50px;
            margin-top: 10px;
        }
    }

    button {
        border: none;
        cursor: pointer;
        font-size: 18px;
        margin-top: 15px;
        padding: 5px 15px;
        border-radius: 3px;
        color: var(--main-color);
        background-color: var(--main-light-color);
    }
`;
