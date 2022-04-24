import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 800px;
    height: 150px;
    margin: 1em;
    
`

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 1em;

    .header {
        display: flex;
        justify-content: flex-start;

        button {
            width: 100%;
            margin: unset;
            border-radius: 0;
            border-top-left-radius: 5px;
            background-color: #00000054;
            color: white;
            transition: all 0.5s;
            font-weight: 600;
            padding: 1em 0;

            &:last-child {
                border-radius: 0;
                border-top-right-radius: 5px;
            }

            &:hover {
                background-color: white;
                color: black;
            }
        }

        .active {
            background-color: white;
            color: black;
        }

        @media only screen and (min-width: 768px){
            button {
                width: auto;
                padding: 1em 2em;
            }
        }
    }

    .search-container {
        display: flex;
        flex-direction: column;

        .selects {
            display: flex;
            width: 100%;

            .react-select {
                flex-grow: 1;
                width: 100%;
                text-align: left;

                
                &:first-child {
                    .react-select__control {
                        border-right: 1px solid #00000040;
                    }

                    .react-select__control--is-focused {
                        border-radius: 0;
                    }
                }
            }

            .react-select__control {
                border-radius: 0;
                border: none;
                padding: 10px;
                height: 100%;
            }

            .react-select__control--is-focused {
                border-radius: 0;
                border: none;
                box-shadow: none;
            }

            .react-select__menu {
                margin: 0;
                border-radius: 0;
            }
        }

        button {
            border-radius: 0;
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;
            width: 100%;
            max-width: unset;
            
            svg {
                min-width: 15px;
                max-width: 15px;
            }
        }

        @media only screen and (min-width: 768px){
            flex-direction: row;

            button {
                max-width: 150px;
                border-radius: 0;
                border-top-right-radius: 5px;
                border-bottom-right-radius: 5px;
            }

            .selects {
                .react-select {
                
                    &:first-child {
                        .react-select__control {
                            border-right: 1px solid #00000040;
                            border-bottom-left-radius: 5px;
                        }
                    }
                }
            }
        }
    }
`