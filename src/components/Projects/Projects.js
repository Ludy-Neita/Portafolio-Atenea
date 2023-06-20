import React from "react";
import * as S from "./Proyects.styles";
import { projectsPortfolio } from "./ProjectsData"; // nos traemos el objeto.
import logoGithub from "../svg/github.svg";
import logoWebsite from "../svg/website.svg";

const Projects = () => {

    return (

        <S.ContainerProjects id="projects">
            {/* ese id es igual en el NavBar así: <p onClick={() => clickItemNav("projects")}>About Me</p> */}

            <S.Title>
                Some of {" "}
                <span>
                    {" "}
                    <br />
                    My projects
                </span>
            </S.Title>

            <S.ContentProject>

                {projectsPortfolio.map((project, index) => (

                    <S.ProjectContent key={index}>

                        <S.TitleProject>{project.title}</S.TitleProject>

                        <S.ContainerImage>
                            <img src={project.image} alt={project.title} loazy="true" /> {/* loazy, sea rapido la carga */}
                        </S.ContainerImage>

                        <S.ContainerTechs>

                            {project.techs.map((tech, index) => ( // esto es lo de tecnología, el vector que esta dentro del otro vector.

                                <div key={index}>
                                    <img src={tech.src} alt={tech.name} />
                                    <p>{tech.name}</p>
                                </div>
                            ))}

                        </S.ContainerTechs>

                        <S.Description>
                            {project.description}
                        </S.Description>

                        <S.ContainerFooter>

                            {project.repository && ( // cuando venga con dato, que haga lo siguiente

                                <a href={project.repository} target="_blank" rel="noreferrer">
                                    <img src={logoGithub} alt={project.description} />
                                </a>
                            )}

                            {project.website && (
                                <a href={project.website} target="_blank" rel="noreferrer">
                                    <img src={logoWebsite} alt={project.description} />
                                </a>
                            )}

                        </S.ContainerFooter>

                    </S.ProjectContent>
                ))}

            </S.ContentProject>
        </S.ContainerProjects>
    );
};

export default Projects;
