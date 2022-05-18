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
    margin-bottom: 0;
    width: 100%;
    max-width: 1100px;
    height: 100%;
    min-height: calc(100vh - 80px);
    display: flex;
    flex-direction: column;

    .image-container {
        width: 100%;
        height: 300px;
        position: relative;
        display: flex;

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
        margin-top: 1em;
        text-align: center;
        height: 100%;
        flex-grow: 1;
        display: flex;
        gap: 1rem;
        align-items: flex-start;
        justify-content: flex-end;
        flex-direction: column-reverse;
        padding: 0 1rem;

        .description {
            font-size: 0.9rem;
            max-width: 800px;
            width: 100%;
            padding: 1rem;
            border-radius: 5px;
            background-color: white;

            p {
                margin: 1rem;
            }

            h2 {
                font-size: 1.25rem;
            }

            .buttons {
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 1em;
            }
        }

        .features {
            font-size: 0.9rem;
            max-width: 800px;
            padding: 1rem;
            border-radius: 5px;
            width: 100%;
            background-color: white;

            .price {
                font-size: 1.5rem;
            }

            .row {
                margin: 0.5rem 0;
                display: flex;
                align-items: center;
                justify-content: space-between;
                flex-wrap: wrap;
            }

            span {
                font-weight: 600;
                color: ${ props => props.theme.green1};
            }

            svg {
                margin-right: 5px;
            }
        }
    }

    @media only screen and (min-width: 768px){
        .image-container {
            height: 500px;
        }

        .informations {
            padding: 0;
            text-align: left;
            justify-content: space-between;
            flex-direction: row;
        }
    } 

    
    @media only screen and (max-width: 1140px){
        .informations {
            padding: 0 1rem;
        }
    }

`