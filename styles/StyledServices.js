import styled from "styled-components";

export const Container = styled.section`
    height: 100%;
    width: 100%;
    min-height: 600px;
    background-color: ${props => props.theme.green2};
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
    
    .text-container {
        width: 100%;
        height: 100%;
        color: white;
        min-height: 600px;

        h2 {
            margin: 0.5em;
            text-align: center;
            font-size: 3em;
        }

        .row {
            margin: auto;
            padding: 1em;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            height: auto;

            .service {
                height: 100%;
                margin: 1em 1em;
                
                h3 {
                    font-weight: 500;
                    font-size: 2em;
                }

                .icon {
                    font-size: 3em;
                }
                
                .description {

                }
            }
        }
    }

    .image-container {
        width: 100%;
        position: relative;
        min-height: 500px;
    }

    @media only screen and (min-width: 768px){
        flex-direction: row;

        .image-container {
            min-height: 600px;
        }
        
        .text-container {
            .row {
                flex-direction: row;
                justify-content: space-between;
                text-align: left;
                align-items: flex-start;
                margin: 0 1em;

                .service {
                    margin: 0 1em;
                }
            }
        }
    }
`