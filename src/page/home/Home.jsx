import { useEffect } from "react";
import Contact from "../../components/contact/Contact";
import Header from "../../components/header/Header";
import Experience from "../../components/information-technology/Experience";
import Projects from "../../components/project/Progects";
import Works from "../../components/recent-works/Works";

const Home = () => {


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    
    return ( 
        <>
            <Header />
            <Projects />
            <Experience />
            <Works />
            <Contact />
        </>
     );
}
 
export default Home;