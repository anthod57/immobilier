import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    height: 500px;
    background-color: ${props => props.theme.white};

    .testimony-background {
        position: absolute;
        height: 500px;
        width: 100%;
        filter: brightness(0.75);
    }
`;

export const Wrapper = styled.div`
    width: 100%;
    position: absolute;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        text-align: center;
        font-family: 'roboto',sans-serif !important;
        font-weight: 500;
        font-size: 1.5em;
        color: white;
        margin: 2em;
    }

    .controls {
        position: absolute;
        height: 500px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 1em;
        color: white;

        svg {
            font-size: 2em;
            cursor: pointer;
        }
    }
`

export const TestimonyItem = styled.div`
    position: absolute;
    max-width: 800px;
    display: flex;
    color: white;
    width: 70%;
    height: 100%;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    transition: all 0.5s;

    span {
        margin-top: 1em;
        font-style: italic;
        font-weight: 600;
    }

    @media only screen and (max-width: 400px){
        font-size: 4vw;
    }
`