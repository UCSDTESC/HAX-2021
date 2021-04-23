import React from 'react';
import { Container, Button } from 'react-bootstrap';
import styled from 'styled-components';

import Logo from '../../assets/images/Home/Hero/logo.svg';
import Eggs from '../../assets/images/Home/Hero/eggs.svg';

const Hero = () => {
    return (
        <HeroWrapper>
            <Container>
                <div className="cta">
                    <img src={Logo} alt="logo" className="hero-logo" />
                    <h1 className="mt-2">
                        April 26 - 27, 2021
                    </h1>
                    <Button
                        size="lg"
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2"
                    >
                        Register Now
                    </Button>
                </div>
                <img className="eggs" src={Eggs} alt="Eggs" />
            </Container>
        </HeroWrapper>
    );
};

const HeroWrapper = styled.section`
    height: 100vh;
    background-color: var(--orange);
    position: relative;

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
    }

    .cta {
        z-index: 1;
        text-align: center;
        margin-top: 1rem;

        .hero-logo {
            width: 19vw;
    
            @media (max-width: 576px) {
                width: 70%;
            }
        }

        h1 {
            color: var(--white);
            font-weight: 300;
            font-size: 2.5vw;
        }
        
        button {
            border-radius: 43px;
        }
    }

    .eggs {
        position: absolute;
        top: 0;
        right: 0;
        height: 100vh;

        @media (max-width: 576px) {
            display: none;
        }
    }
`;

export default Hero;
