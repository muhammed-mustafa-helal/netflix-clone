import styled from 'styled-components/macro'
import { Link as ReactRouterLink } from 'react-router-dom'

export const Backrgound = styled.div`
    display: flex;
    flex-direction: column;
    background: url(${({ src }) => src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg'})
    top left / cover no-repeat;
`;
export const Container = styled.div`
    display: flex;
    margin: 0 56px;
    height: 64px;
    padding: 18px 0;
    justify-content: space-between;
    align-items: center;

    a {
        display: flex;
    }

    @media (max-width: 1000px) {
     margin: 0 30px;   
    }
`;


export const Logo = styled.img`
    height: 32px;
    width: 108;
    margin-right: 40px;

    @media (max-width: 1449px){
     height: 45px;
     width: 167;
    }
`;

export const ButtonLink = styled(ReactRouterLink)`
    display:block;
    background-color: #E50914;
    width: 84;
    height: fit-content;
    color: white;
    border: 0;
    font-size: 15px;
    border-radius: 3px;
    padding: 8px 17px;
    cursor: pointer;
    box-sizing: border-box;
    text-decoration: none;

    &:hover {
        background-color: #F40612;
    }
`;