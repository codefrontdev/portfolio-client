import './about.css';
import imgAbout from '../../img/about.jpg';
import { useEffect } from 'react';



const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return ( 
        <>
            <div className="about">
                <div className="title-text">
                    <span className='process-text'>About</span>
                    <h1>abtief profile of ahmede</h1>
                    <p><span></span>bo</p>
                </div>

                <div className="about-content">
                    <div className="about-img">
                        <img src={imgAbout} alt="" />
                    </div>
                    <div className="about-content-text">
                        <h2>abtief profile of ahmede</h2>
                        <p>Ahmed Achallahi is a self-taught developer who is very passionate about his work, 
                            specializing in front-end development and  back-end development  based in Morocco. 
                             He has been a freelancer for quite some time and is always 
                            looking for new opportunities to grow his skills
                        </p>
                        <p>  Although he gained valuable experience working on large and medium projects but.  
                            Ahmed remains humble and knows he still has a lot to learn. 
                             He takes pride in his work but acknowledges that some of his past 
                             projects do not reflect his current level of experience, however, 
                             he is grateful for the lessons learned from these 
                            experiences and is always looking for ways to improve his craft.
                        </p>
                        <p>  All in all, Ahmed Ashlahy is a passionate developer who is 
                            committed to excellence in his work.  He is always looking for 
                            ways to grow and improve and values ​​feedback and constructive criticism 
                            as opportunities to learn and develop
                        </p>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default About;