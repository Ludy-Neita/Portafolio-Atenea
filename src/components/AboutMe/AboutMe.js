import React from "react";
import * as S from "./AboutMe.styles";
import logoGithub from "../svg/github.svg";
import logoLinkeind from "../svg/linkedin.svg";
import logoYoutube from "../svg/youtube.svg";

const AboutMe = () => {

    const socialNetworks = [
        {
            name: "Github",
            link: "https://github.com/",
            logo: logoGithub,
        },
        {
            name: "Linkedind",
            link: "https://co.linkedin.com/",
            logo: logoLinkeind,
        },
        {
            name: "Youtube",
            link: "https://www.youtube.com/",
            logo: logoYoutube,
        },
    ];

    return (

        // "ContainerAboutMe" como <div> en AboutMe.stlyes 

        <S.ContainerAboutMe id="about-me"> {/* ese id es igual en el NavBar así: <p onClick={() => clickItemNav("about-me")}>About Me</p> */}

            <S.ContainerFlex>  {/*"ContainerFlex" como <div> en AboutMe.stlyes */}

                <S.ContainerText> {/*"ContainerText" como <div> en AboutMe.stlyes */}

                    <S.Title> {/*"Title" como <h1> en AboutMe.stlyes */}
                        <p>👋🏼 Hola </p>
                        <p>Ludy Yasmín Neita Duarte</p>
                        <p>Ingeniera Industrial - UIS</p>
                    </S.Title>

                    <S.DescriptionText> {/*"DescriptionText" como <div> en AboutMe.stlyes */}
                        Ingeniera Industrial, Mg. en Dirección Logística,
                        Estudiante de Frontend de Universidad Distrital,
                        con 7 años de experiencia en el sector educativo como administrativa.
                    </S.DescriptionText>

                    <S.ContainerIcons> {/*"ContainerIcons" como <div> en AboutMe.stlyes */}
                       
                        {socialNetworks.map((network, index) => (
                            <a // va hacer un ancla.
                                key={index}
                                href={network.link}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img src={network.logo} alt={network.name} />
                            </a>
                        ))}

                    </S.ContainerIcons>

                </S.ContainerText>

                <S.ContainerImage> {/*"ContainerImage" como <div> en AboutMe.stlyes */}
                    <img src="/img/ImagenLudy.jpeg" alt="Ludy Neita - Ingeniera Industrial" />
                </S.ContainerImage>

            </S.ContainerFlex>

        </S.ContainerAboutMe>
    );
};

export default AboutMe;