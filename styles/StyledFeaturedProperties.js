import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    min-height: 450px;
    padding: 50px 1em;

    hr {
        width: 60px;
        height: 2px;
        background-color: ${props => props.theme.green1};
        margin: 1em auto;
    }

    h2 {
        text-align: center;
        font-family: 'roboto',sans-serif !important;
        font-weight: 300;
        font-size: 1.5em;
        margin-bottom: 0.5em;
    }
`;

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, calc(350px + 1em));
    justify-content: center;
    position: relative;
    max-width: 1600px;
    margin: auto;

    @media only screen and (max-width: 375px){
        grid-template-columns: repeat(auto-fill, minmax(calc(100px), calc(350px + 1em)));
    }
`;