import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 1400px;
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

            .row {
                display: flex;

                .surface {
                    display: flex;
                    height: 100%;
                    position: relative;
                    width: 100%;

                    &:before{
                        content: "m²";
                        display: flex;
                        align-items: center;
                        right: 30px;
                        height: 100%;
                        position: absolute;
                        color: #00000080;
                        z-index: 5;
                    }
                }

                .price {
                    display: flex;
                    height: 100%;
                    position: relative;
                    width: 100%;

                    &:before{
                        content: "€";
                        display: flex;
                        align-items: center;
                        right: 30px;
                        height: 100%;
                        position: absolute;
                        color: #00000080;
                        z-index: 5;
                    }
                }

                span:last-child {
                    .input-text {
                        border-right: none;
                    }
                }
            }

            .input-text {
                flex-grow: 1;
                border-radius: 0;
                margin: 0;
                border: none;
                border-bottom: 1px solid #00000040;
                border-right: 1px solid #00000040;
                max-width: 100%;
            }

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

                .row {
                    display: flex;
                    justify-content: space-between;
                    width: 100%;
                    
                    span:last-child {
                        .input-text {
                            border-right: 1px solid #00000040;
                        }
                    }

                    .input-text:last-child {
                        border-right: 1px solid #00000040;
                    }

                    &:last-child {
                        span:last-child {
                            .input-text:last-child {
                                border-right: none;
                            }
                        }
                    }
                }

                .input-text {
                    flex-grow: 1;
                    border: none;
                    border-right: 1px solid #00000040;
                    width: 100%;
                    flex-shrink: 1;
                }
                
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