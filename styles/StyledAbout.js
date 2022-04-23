import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    height: 100%;
    padding: 2em 1em;
`

export const Wrapper = styled.div`
    margin: auto;   
    max-width: 1100px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    min-height: 500px;
    background-color: white;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0px 0px 8px 0px #00000080;
    background-color: white;
    
    
    .image-container {
        position: relative;
        width: 100%;
        height: 300px;
    }

    .text-container {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1em;
        text-align: center;

        h2 {
            color: #679436;
            font-size: 2.5em;
        }
    }

    @media only screen and (min-width: 768px){
        flex-direction: row;

        .image-container {
            width: 50%;
            height: 500px;
        }

        .text-container {
            text-align: left;
            width: 50%;
            height: 500px;
        }
    }
`