import Title from '../title/Title';
import './experience.css';



const Experience = () => {
    return ( 
        <>
            <section className="experience">
                
                <Title text={'Experience'} title={'information technology'} span={'Experience'} />

                <div className="card-experience">
                    <div className="card-content">
                        <span>01</span>
                        <h1>FrontEnd Developer</h1>
                        <ul>
                            <li><span></span>html & css & bootstrap</li>
                            <li><span></span>javaScript</li>
                            <li><span></span>React</li>
                            <li><span></span>Nextjs & redux toolkit</li>
                        </ul>
                    </div>
                    <div className="card-content">
                        <span>02</span>
                        <h1>BackEnd Developer</h1>
                        <ul>
                            <li><span></span>Expressjs</li>
                            <li><span></span>Nodejs</li>
                            <li><span></span>Mongodb</li>
                            <li><span></span>jwt</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default Experience;