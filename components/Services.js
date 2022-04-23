import React from 'react'
import Image from 'next/image'
import { Container, Wrapper } from '../styles/StyledServices'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

export const Services = () => {
    return (
        <Container>
            <Wrapper>
                <div className="text-container">
                    <h2>Nos services</h2>

                    <div className="row">
                        <div className="service">
                            <div className="icon">
                                <FontAwesomeIcon icon={solid('map-location-dot')} />
                            </div>

                            <h3>Service</h3>

                            <div className="description">
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto tempore vel ipsam eum porro cupiditate quis facilis provident praesentium nulla nam expedita ab, voluptas beatae tenetur soluta rerum fuga placeat.</p>
                            </div>
                        </div>
                        <div className="service">
                            <div className="icon">
                                <FontAwesomeIcon icon={solid('euro-sign')} />
                            </div>

                            <h3>Service</h3>

                            <div className="description">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis tempora, quam doloribus nam, iusto deserunt rerum dolore quisquam quas suscipit molestias impedit maiores voluptatum dicta? Quos recusandae beatae et sunt.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="service">
                            <div className="icon">
                                <FontAwesomeIcon icon={solid('file-lines')} />
                            </div>

                            <h3>Service</h3>

                            <div className="description">
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto tempore vel ipsam eum porro cupiditate quis facilis provident praesentium nulla nam expedita ab, voluptas beatae tenetur soluta rerum fuga placeat.</p>
                            </div>
                        </div>
                        <div className="service">
                            <div className="icon">
                                <FontAwesomeIcon icon={solid('comments')} />
                            </div>

                            <h3>Service</h3>

                            <div className="description">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis tempora, quam doloribus nam, iusto deserunt rerum dolore quisquam quas suscipit molestias impedit maiores voluptatum dicta? Quos recusandae beatae et sunt.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="image-container">
                    <Image quality={90} layout="fill" objectFit='cover' src={"/images/services.jpg"} loading="lazy" />
                </div>
            </Wrapper>
        </Container>
    )
}
