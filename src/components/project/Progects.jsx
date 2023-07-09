import Title from '../title/Title';
import './projects.css'


const Projects = () => {
    return ( 
        <>
            <section className="projects">
                
                <Title text={'process'} title={'project process'} span={'lets talk about your project'} />

                <div className="project-process">
                    <div className="project">
                        <div className="porcess">
                            <h1>Counscling and analysis</h1>
                            <p>One our first consultion sossion, I listen to what you want and i ask questions i 
                                need to achieve your goal. it results in undestanding the need and scopr of the 
                                required solution.
                            </p>
                            <div className="border"></div>
                        </div>
                        <span className='s-1'>01</span>
                    </div>
                    <div className="project">
                        <span className='s-2'>02</span>
                        <div className="porcess">
                            <h1>User intcrfaee design</h1>
                            <p>What users see above all is the visual aspect In addition to being
                                beautiful, it must be simple, effective and interactive. You have to be able to 
                                eliminate superfluous elements while making the user experience pleasant and 
                                visually impeccable.
                            </p>
                            <div className="border active"></div>
                        </div>
                    </div>
                    <div className="project">
                        <div className="porcess">
                            <h1>Development</h1>
                            <p>I owrk with Nextjs, the greatest choice to optimize your website for seo, including 
                                Bootstrap that let me finalize projects faster I make sure that the website is 
                                optimised to follow modern web practices, such as speed , security, and roliability.
                            </p>
                            <div className="border"></div>
                        </div>
                        <span className='s-1'>03</span>
                    </div>
                    <div className="project">
                        <span className='s-2'>04</span>
                        <div className="porcess">
                            <h1>Delivery & launch! </h1>
                            <p> At the end of each project.I provide my clients with a short explanation of how to 
                                maintain the website. I also make sure that the products delivered meet your
                                quality criteria while carrying out regular and rigorous monitoring.
                            </p>
                            <div className="border active"></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default Projects;