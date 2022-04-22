import React, { useState } from 'react'
import { Container, Wrapper, FormsContainer, Form } from '../styles/StyledLoginPanel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

export const LoginPanel = (props) => {

    const [form, setForm] = useState(1);

    return (
        <Container>
            <Wrapper>
                <div className="close">
                    <FontAwesomeIcon onClick={() => props.setShow(false)} icon={solid('xmark')} />
                </div>

                <FormsContainer>
                    <div className="header">
                        <button className={form == 0 ? "active" : ""} onClick={() => setForm(0)}>Inscription</button>
                        <button className={form == 1 ? "active" : ""} onClick={() => setForm(1)}>Connexion</button>
                    </div>
                    <Form id="login" show={form == 1}>
                        <input type="email" className="input-text" placeholder="E-mail"></input>
                        <input type="password" className="input-text" placeholder="Mot de passe"></input>
                    </Form>
                    <Form id="register" show={form == 0}>
                        <input type="email" className="input-text" placeholder="E-mail"></input>
                        <input type="email" className="input-text" placeholder="E-mail"></input>
                        <input type="password" className="input-text" placeholder="Mot de passe"></input>
                    </Form>
                </FormsContainer>
            </Wrapper>
        </Container>
    )
}
