import styled from "styled-components";

export const Container = styled.section`
    min-height: calc(100vh - 100px);
    margin-top: 100px;
    width: 100%;

    .header {
        margin: auto;
        width: 100%;
        color: white;
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
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