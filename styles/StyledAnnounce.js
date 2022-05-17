import styled from 'styled-components';

export const Container = styled.div`
    min-height: 100vh;
    width: 100%;
    background-color: #eaeff1;
`;

export const Wrapper = styled.div`
    color: black;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-top: 80px;
`;

export const AnnounceContainer = styled.div`
    margin: 1em;
    width: 100%;
    max-width: 1100px;
    height: 100%;

    .image-container {
        width: 100%;
        height: 300px;
        position: relative;
        display: flex;
        background-color: white;
        

        img {
            transition: all 0.5s;
        }
        
        .controls {
            position: absolute;
            height: 100%;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 1em;
            color: white;

            svg {
                width: 20px;
                right: 20px;
                cursor: pointer;
            }
        }
    }

    .informations {
        text-align: left;
        padding: 1em;
        background-color: white;
        border-radius: 5px;

        h2 {
            margin: 0.5rem 0;
        }

        .description {
            font-size: 0.9rem;
        }

        .row {
            margin: 0.5rem 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        span {
            font-weight: 600;
            color: ${ props => props.theme.green1};
        }

        svg {
            margin-right: 5px;
        }
    }

    @media only screen and (min-width: 768px){
        .image-container {
            height: 500px;
        }
    } 
`