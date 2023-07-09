import './header.css';
import Shadow from './Shadow';
import Botton from './Bottom';

const Header = () => {



    return ( 
        <>
            <header className="header">
                <span className='char'>A</span>
                <span className='char'>D</span>
                <span className='char'>F</span>
                <Shadow />
                <div className="header-center-item">
                    <div className="header-item-left">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="header-item-text">
                        <h1>Ahmede</h1>
                        <h2>Achalhi</h2>
                        <p>
                            <span>Front End Developer & Back End Developer </span> 
                            From Morocco, Been Working As A Freelanser For Years With A Straight Focus On The Web World
                            Excited For The Upcoming Opportunities
                        </p>
                    </div>
                    <div className="header-item-right"></div>
                </div>
                <Botton />
            </header>
        </>
     );
}
 
export default Header;