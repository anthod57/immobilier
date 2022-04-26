import styled from "styled-components";

export const Container = styled.nav`
    background-color: ${props => props.scrollOffset > 0 || props.show == true ? "white" : "transparent"};
    color: ${props => props.scrollOffset > 0 || props.show == true ? props.theme.green1 : "white"} !important;
    width: 100%;
    height: 80px;
    position: fixed;
    transition: background-color 0.3s ease-in-out;
    z-index: 999;

    a, a:hover, a:visited, a:active {
        text-decoration: none;
        cursor: pointer;
        height: 100%;
    } 

    @media only screen and (min-width: 768px){
        text-shadow: 0 0 ${props => props.scrollOffset > 0 || props.show == true ? "0px" : "10px"} #00000080;
    }
`

export const Wrapper = styled.div`
    margin: auto;
    height: 100%;
    display: flex;
    width: 100%;
    align-items: center;
    position: relative;
    justify-content: space-between;
    padding: 0 1em;

    .logo {
        width: 100px;

        h2 {
            font-family: 'Quicksand',sans-serif !important;
            font-weight: 400;
            font-size: 2em;
        }
    }

    .menu {
        height: 100%;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        display: none;

        .left {
            height: 100%;
        }

        .right {
            height: 100%;
            display: flex;
            justify-content: flex-end;
        }

        ul {
            list-style: none;
            margin: 0;
            padding: 0;
            font-weight: 500;
            height: 100%;

            a {
                padding: 0 1em;
                float: left;
                transition: 0.2s all;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: inset 0 -2px 0 0 transparent;

                &:hover {
                    box-shadow: inset 0 -2px 0 0 white;
                }
            }

            .active {
                box-shadow: inset 0 -2px 0 0 white;
            }
        }
    }


    @media only screen and (min-width: 920px){
        justify-content: unset;
        box-shadow: inset 0 -1px 0 0 #ffffff40;

        .menu {
            display: flex;
        }
    }
`

export const MobileMenuButton = styled.div`
    width: 80px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    svg {
        width: 40px;
        height: auto;
    }

    @media only screen and (min-width: 920px){
        display: none;
    }
`
export const MobileMenu = styled.div`
    position: absolute;
    margin-top: 80px;
    right: ${props => props.show ? "0px" : "-60%"};
    width: 60%;
    height: calc(100vh - 80px);
    background-color: ${props => props.show ? "white" : ""};
    transition: all 0.3s ease-in-out;
    top: 0;

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        width: 100%;

        a {
            text-align: center;

            li {
                margin: 1em;
            }

            &:hover {
                    
            }
        }

        .active {
                
        }
    }

    @media only screen and (min-width: 920px){
        display: none;
    }
`;
