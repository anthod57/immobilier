import styled from "styled-components";

export const Container = styled.nav`
    background-color: ${props => props.scrollOffset > 0 || props.show ? "white" : ""};
    width: 100%;
    height: 100px;
    position: fixed;
    transition: background-color 0.3s ease-in-out;
    z-index: 999;

    a, a:hover, a:visited, a:active {
        text-decoration: none;
        height: 100%;
    } 
`

export const Wrapper = styled.div`
    margin: auto;
    height: 100%;
    display: flex;
    width: 100%;
    max-width: 1100px;
    align-items: center;
    justify-content: space-between;
    position: relative;
    padding: 0 1em;

    .logo {
        position: relative;
        width: 100%;
        height: 100%;
        max-width: 180px;
        max-height: 50px;
    }

    .menu {
        height: 100%;
        align-items: center;
        justify-content: center;
        display: none;

        ul {
            list-style: none;
            margin: 0;
            padding: 0;
            font-weight: 500;

            a {
                margin: 1em;
                float: left;
                transition: 0.3s all;

                &:hover {
                    color: ${props => props.theme.green2};
                }
            }

            .active {
                color: ${props => props.theme.green2};
            }
        }
    }

    @media only screen and (min-width: 768px){
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
    color: ${props => props.theme.green2};
    
    svg {
        width: 40px;
        height: auto;
    }

    @media only screen and (min-width: 768px){
        display: none;
    }
`
export const MobileMenu = styled.div`
    position: absolute;
    margin-top: 100px;
    right: ${props => props.show ? "0px" : "-60%"};
    width: 60%;
    height: calc(100vh - 100px);
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
                    color: ${props => props.theme.green2};
            }
        }

        .active {
                color: ${props => props.theme.green2};
        }
    }

    @media only screen and (min-width: 768px){
        display: none;
    }
`;
