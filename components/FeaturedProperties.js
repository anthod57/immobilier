import React, {useEffect} from 'react'
import { Container, Wrapper } from '../styles/StyledFeaturedProperties'
import { Offer } from "./Offer"

export const FeaturedProperties = (props) => {

    useEffect(() => {
        console.log(props.data);
    }, [])
    return (
        <Container>
            <hr />
            <h2>{props.title}</h2>
            <Wrapper>
                {props.data.length > 0 ? props.data.map((item, index) => {
                    return (
                        <Offer key={index} data={item}></Offer>
                    )
                }) :
                <h2>{"Aucune offre n'a été trouvée"}</h2>
                }
            </Wrapper>
        </Container>
    )
}
