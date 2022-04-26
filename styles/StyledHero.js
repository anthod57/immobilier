import styled from "styled-components";

export const Container = styled.section`
    height: ${props => props.height.mobile ? props.height.mobile : "100vh"};
    width: 100%;

    .hero-background {
        position: absolute;
        height: ${props => props.height.mobile ? props.height.mobile : "100vh"};
        width: 100%;
        filter: brightness(0.75);
    }

    @media only screen and (min-width: 768px){
        height: ${props => props.height.desktop ? props.height.desktop : "600px"};

        .hero-background {
            height: ${props => props.height.desktop ? props.height.desktop : "600px"};
        }
    }
`

export const Wrapper = styled.div`
    color: white;
    position: absolute;
    width: 100%;
    height: ${props => props.height.mobile ? props.height.mobile : "100vh"};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    h1 {
        font-family: 'Quicksand',sans-serif !important;
        font-weight: 400;
        font-size: 3em;
        margin-bottom: 0.5em;
    }

    h2 {
        font-family: 'Quicksand',sans-serif !important;
        font-weight: 400;
        font-size: 1.5em;
        margin-bottom: 0.5em;
    }

    @media only screen and (min-width: 768px){
        height: ${props => props.height.desktop ? props.height.desktop : "600px"};
    }
`