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
            flex-direction: column;

            .react-select {
                flex-grow: 1;
                width: 100%;
                text-align: left;
                max-width: 100%;
            }

            .react-select__control {
                border-radius: 0;
                border: none;
                border-bottom: 1px solid #00000040;
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
                flex-direction: row;

                .react-select {
                    max-width: 500px;
                    border: none;
                                    
                    &:first-child {
                        .react-select__control {
                            border: none;
                            border-right: 1px solid #00000040;
                        }

                        .react-select__control--is-focused {
                            border-radius: 0;
                        }
                    }


                    .react-select__control {
                        border: none;
                            border-right: 1px solid #00000040;
                    }

                    &:last-child {
                        .react-select__control {
                            border-right: none;
                        }
                    }

                    &:first-child {
                        .react-select__control {
                            border-bottom-left-radius: 5px;
                        }
                    }
                }
            }
        }
    }
`