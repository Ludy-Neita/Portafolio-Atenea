import React, { useState } from "react";
import * as S from "./NavBar.styles"; // llamar todo lo de NavBar.Stlyes, con el alias de "s". cuando se hace s. ... se trae la propiedad que se quiere sus

const NavBar = () => {

    const [showMenuBurguer, setShowMenuBurguer] = useState(false);

    const clickItemNav = (item) => {
        console.log(item);
        document.getElementById(item).scrollIntoView({ behavior: "smooth" });

    };

    return (

        <S.ContainerNavBar> {/* "ContainerNavBar" como <div> en NavBar.Stlyes */}

            <S.ContainerLogo>  {/*  "ContainerLogo" como <div> en NavBar.Stlyes */}
                <S.ImageLogo src="/img/LU.ico" alt="Logo Ludy" />  {/* "ImageLogo" como <Image> en NavBar.Stlyes  */}
                <div>
                    <h1>Ludy Neita</h1>
                    <h2>Ingeniera Industrial</h2>
                </div>
            </S.ContainerLogo>

            <S.ContainerBurguer // "ContainerBurguer" como <div> en NavBar.Stlyes 
                onClick={() => setShowMenuBurguer(!showMenuBurguer)} // setiar para que lo traiga el menu.
            >
                <S.BurguerMenu /> {/*  "BurguerMenu" como <div> en NavBar.Stlyes */}
                <S.BurguerMenu />
                <S.BurguerMenu />
            </S.ContainerBurguer>

            <S.ContainerItems  //"ContainerItems" como <div> en NavBar.Stlyes 
                    showMenuBurguer={showMenuBurguer} // define el props.
            >

                <p onClick={() => clickItemNav("about-me")}>About Me</p>

                <p onClick={() => clickItemNav("projects")}>Projects</p>

                <S.Button onClick={() => clickItemNav("contact")}> 🤙 Contact me</S.Button> {/* como <Button> en NavBar.Stlyes */}

            </S.ContainerItems>


        </S.ContainerNavBar>
    );
};

export default NavBar;