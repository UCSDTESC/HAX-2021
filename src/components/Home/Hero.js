import React from 'react';
import { Container, Button } from 'react-bootstrap';
import styled from 'styled-components';

const Hero = () => {
    return (
        <HeroWrapper>
            <Container>
                <div className="cta">
                    <h1 className="mb-4">
                        Completely
                        <br />
                        Virtual
                    </h1>
                    <Button
                        size="lg"
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3"
                    >
                        Coming Soon
                    </Button>
                </div>
            </Container>
        </HeroWrapper>
    );
};

const HeroWrapper = styled.section`
    height: 85vh;
    min-height: 800px;
    background-color: var(--orange-light);
    position: relative;

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
    }

    .hero-logo {
        width: 40%;

        @media (max-width: 576px) {
            width: 70%;
        }
    }

    .cta {
        z-index: 1;
        text-align: center;
        margin-top: 1rem;

        h1 {
            font-weight: 800;
            font-size: clamp(2rem, 15vw, 5rem);
        }
    }

    .building-BR {
        position: absolute;
        bottom: -25%;
        right: 0;
        width: 20%;
        z-index: 1;

        @media (max-width: 576px) {
            display: none;
        }
    }

    .building-BL {
        position: absolute;
        bottom: -5%;
        left: 10%;
        z-index: 1;
        animation: float 5s ease 2s infinite;

        img {
            width: 25vw;
        }

        @media (max-width: 576px) {
            display: none;
        }
    }

    .building-TR {
        position: absolute;
        top: 6%;
        right: 7%;
        animation: float 5s infinite;

        img {
            width: 20vw;
        }

        @media (max-width: 576px) {
            display: none;
        }
    }

    .building-TL {
        position: absolute;
        top: 0%;
        left: -3.5%;
        width: 15%;

        @media (max-width: 576px) {
            display: none;
        }
    }

    @keyframes float {
        from {
            transform: translateY(0px);
        }

        50% {
            transform: translateY(20px);
        }

        to {
            transform: translateY(0);
        }
    }
`;

export default Hero;
