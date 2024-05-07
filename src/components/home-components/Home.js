
import Hero from "./Hero"
import Projects from "../projects/Projects"
import Services from "./Services"
import About from "./About"




export default function Home({ projects, services, about, contact }) {




    return (
        <>
            <Hero projects={projects} />
            <Projects projects={projects} />
            <Services services={services} />
            <About about={about} contact={contact} />
        </>
    )
}