import styled from "styled-components";

export const Container = styled.section`
    min-height: calc(100vh - 100px);
    margin-top: 100px;
    width: 100%;
`

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
`