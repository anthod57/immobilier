import React from 'react'
import Image from 'next/image'
import { Container, Wrapper } from '../styles/StyledAbout'

export const About = () => {
    return (
        <Container>
            <Wrapper>
                <div className="image-container">
                    <Image quality={90} layout="fill" objectFit='cover' src={"/images/about.jpg"} loading="lazy" />
                </div>

                <div className="text-container">
                    <h2>Qui sommes-nous ?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid fuga nihil, aperiam voluptates quas hic dignissimos accusantium exercitationem placeat.</p>
                    <br />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, accusamus! Mollitia adipisci aliquid, vero esse officia harum enim aut vitae voluptas recusandae consectetur corrupti soluta quibusdam, odio excepturi itaque dolorem.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, illum atque. Sapiente in odio, a laudantium, possimus labore pariatur animi quibusdam eos ducimus, eligendi odit commodi tempore quisquam autem. Eaque.</p>
                    <br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, aspernatur quasi. Nihil harum recusandae minus odit distinctio! Amet earum nulla similique excepturi, architecto sed officia laboriosam nostrum dolores cum veniam.</p>
                </div>
            </Wrapper>
        </Container>
    )
}
