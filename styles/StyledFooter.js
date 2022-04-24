import styled from 'styled-components';

export const Container = styled.footer`
    height: 100%;
    min-height: 80px;
    width: 100%;
    background-color: ${props => props.theme.white};
    padding: 1em;
`

export const Wrapper = styled.div`
    max-width: 1100px;
    margin: auto;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    min-height: 80px;
    font-size: 0.8em;

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        font-weight: 500;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        a {
            padding: 0 1em;
            height: 100%;
            float: left;
            transition: 0.2s all;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    @media only screen and (min-width: 768px){
        flex-direction: row;
    }
`