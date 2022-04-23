import styled from "styled-components";

export const Container = styled.section`
    height: 100%;
    width: 100%;
    min-height: 800px;
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
        min-height: 800px;

        h2 {
            margin: 1em;
            text-align: center;
            font-size: 3em;
        }

        .row {
            max-width: 800px;
            margin: auto;
            padding: 1em;
            display: flex;
            justify-content: space-between;
            height: auto;

            .service {
                height: 100%;
                margin: 0 1em;
                
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
            min-height: 800px;
        }
    }
`