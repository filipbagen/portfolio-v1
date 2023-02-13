import React from "react"
import styled from "styled-components"

// Components
import Tag from "./Tag"
import Footer from "./Footer"
import Project from "./Project"
import OtherProjects from './OtherProjects'

// Database
import { ProjectList } from "../data/DB"

const Projects = () => {

    return (
        <Container id="projects">

            <ProjectsContainer>
                <Tag title={'🚀 Projects'} />
                <h1>What I Have Done</h1>

                {ProjectList.map((project, index) => (
                    <Project
                        title={project.title}
                        text={project.text}
                        image={project.image}
                        tag={project.tags}
                        githubLink={project.githubLink}
                        projectLink={project.projectLink}
                        key={project.key}
                    />
                ))}
            </ProjectsContainer>

            <Other>
                <h2>Other Noteworthy Projects</h2>
                <OtherProjects />

                <Footer />
            </Other>

        </Container>
    )
}

export default Projects

// Style
const Container = styled.div`
    background: -webkit-linear-gradient(#4684BF, #164C7F);
    padding-top: 50px;
    width: 100vw;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    margin-top: -160px;
    padding-top: 200px;
`

const ProjectsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    & > h1 {
        margin: 0;
        font-size: 56px;
        color: white;

        @media (max-width: 670px) {
            font-size: 36px;
            margin-bottom: 24px;
        }
    }
`

const Other = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    

    & > h2 {
        color: white;
        text-align: center;
        margin-top: 82px;
    }
`
