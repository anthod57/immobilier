import React, { useState } from 'react'
import { Container, Wrapper, FormsContainer, Form } from '../styles/StyledLoginPanel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import useAuth from '../firebase/auth'

export const LoginPanel = (props) => {
    const [registerError, setRegisterError] = useState(null);
    const [loginError, setLoginError] = useState(null);

    const [loginEmail, setLoginEmail] = useState(null);
    const [loginPassword, setLoginPassword] = useState(null);
    
    const [registerEmail, setRegisterEmail] = useState(null);
    const [registerPassword, setRegisterPassword] = useState(null);
    const [registerPasswordConfirmation, setRegisterPasswordConfirmation] = useState(null);
    const [registerLastName, setRegisterLastName] = useState(null);
    const [registerFirstName, setRegisterFirstName] = useState(null);

    const { signIn, register } = useAuth();

    const registerUser = async () => {
        if(registerEmail && registerPassword && registerPasswordConfirmation && registerLastName && registerFirstName){
            if(registerPassword !== registerPasswordConfirmation) { setRegisterError("Vos mots de passe ne correspondent pas."); return; }

            const error = await register({email: registerEmail, password: registerPassword, firstName: registerFirstName});

            if(error){
                console.log(error.code);
                switch(error.code){
                    case "auth/email-already-in-use": 
                        setRegisterError("Cette adresse e-mail est déjà utilisée");
                        break;
                    
    
                    case "auth/weak-password":
                        setRegisterError("Le mot de passe doit contenir au moins 6 caractères.");
                        break;

                    default:
                        setRegisterError("Une erreur est survenue lors de la tentative d'inscription: " + error.code);
                        break;
                }
            }
        }else{
            setRegisterError("Veuillez remplir tous les champs.");
        }
    }

    const loginUser = async () => {
        if(loginEmail && loginPassword){
            const error = await signIn(loginEmail, loginPassword);

            if(error){
                switch(error.code){
                    case "auth/invalid-email":
                        setLoginError("Veuillez entrer une adresse e-mail valide.");
                        break;

                    case "auth/user-not-found":
                        setLoginError("Cette adresse e-mail n'est pas enregistée.");
                        break;

                    case "auth/wrong-password":
                        setLoginError("Mot de passe incorrect.");
                        break;

                    default:
                        setLoginError("Une erreur est survenue lors de la tentative de connexion: " + error.code);
                        break;
                }
            }
        }else{
            setLoginError("Veuillez remplir tous les champs.");
        }
    }



    return (
        <Container>
            <Wrapper>
                <div className="close">
                    <FontAwesomeIcon onClick={() => props.setShow(-1)} icon={solid('xmark')} />
                </div>

                <FormsContainer>
                    <div className="header">
                        <button className={props.show == 0 ? "active" : ""} onClick={() => props.setShow(0)}>Inscription</button>
                        <button className={props.show == 1 ? "active" : ""} onClick={() => props.setShow(1)}>Connexion</button>
                    </div>
                    <Form id="login" show={props.show == 1} onKeyDown={async (e) => e.code === "Enter" ? await loginUser() : null}>
                        <input onChange={(e) => setLoginEmail(e.target.value)} type="email" className="input-text" placeholder="E-mail"></input>
                        <input onChange={(e) => setLoginPassword(e.target.value)} type="password" className="input-text" placeholder="Mot de passe"></input>
                        
                        {loginError && (<span className="error">{loginError}</span>)}

                        <button onClick={async () => await loginUser()}>Connexion</button>
                    </Form>
                    <Form id="register" show={props.show == 0} onKeyDown={async (e) => e.code === "Enter" ? await registerUser() : null}>
                        <input onChange={(e) => setRegisterLastName(e.target.value)} type="text" className="input-text" id="lastname" placeholder="Nom"></input>
                        <input onChange={(e) => setRegisterFirstName(e.target.value)} type="text" className="input-text" id="firstname" placeholder="Prénom"></input>
                        <input onChange={(e) => setRegisterEmail(e.target.value)} type="email" className="input-text" id="register-email" placeholder="E-mail"></input>
                        <input onChange={(e) => setRegisterPassword(e.target.value)} type="password" className="input-text" id="register-password" placeholder="Mot de passe"></input>
                        <input onChange={(e) => setRegisterPasswordConfirmation(e.target.value)} type="password" className="input-text" id="password-confirmation" placeholder="Mot de passe"></input>

                        {registerError && (<span className="error">{registerError}</span>)}

                        <button onClick={async () => await registerUser()}>Inscription</button>
                    </Form>
                </FormsContainer>
            </Wrapper>
        </Container>
    )
}
