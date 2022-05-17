import styled from "styled-components";

export const Container = styled.div`
    transition: all 0.5s;
    max-width: 350px;
    width: 100%;
    margin: 1em auto;
    position: relative;
    height: 450px;
    border-radius: 5px;
    box-shadow: 5px 5px 10px 0px #00000080;
    transition: all 0.5s;
    overflow: hidden;

    a {
        text-decoration: none;
    }

    &:hover {
        transform: scale(1.025);
    }

    @media only screen and (max-width: 375px){
        margin: 1em auto;
    } 

    .image-container {
        width: 100%;
        height: 200px;
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

    .content {
        padding: 0.5em;
        height: 250px;
        display: flex;
        flex-direction: column;
        cursor: pointer;

        h2{
            text-align: left;
            font-family: 'roboto',sans-serif !important;
            font-weight: 500;
            font-size: 1em;
            overflow: hidden;
            position: relative;
            text-overflow: ellipsis;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }

        .row {
            width: 100%;
            margin: auto;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .price {
                color: ${props => props.theme.green1};
            }

            .city {
                font-family: 'roboto',sans-serif !important;
                font-weight: 300;
            }

            b {
                svg {
                    color: ${props => props.theme.green1};
                    margin-right: 5px;
                }
            }

            .left, .right {
                b {
                    margin: 5px;
                }
            }

            .center {
                b {
                    margin: 2px;
                }

                svg {
                    color: unset;
                }
            }
        }

        hr {
            width: 100%;
            height: 1px;
            background-color: #0000001a
        }
    }
`