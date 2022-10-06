import React from 'react'
import '../styles/Home.css'

const Home = () => {
    return (
        <div className='homepage'>
            <div className='about'>
                <h2>Hi, my name is Yu Xiong</h2>
                <div className='detail'>
                    <p>I am a software engineer with skills in both back-end and front-end. With a Master’s degree in mathematics concentrated in actuarial science, I find a lot of similarities in actuary and coding, such as problem solving, algorithm, and logic. I always welcome learning opportunities so I can find the best way to complete any project.</p>
                </div>
            </div>
            <div className='skills'>
                <h1>Skills</h1>
                <ul className='skillList'>
                    <li className='skillItem'>
                        <h2>Frond-End</h2>
                        <span>
                            HTML, CSS, React.JS, BootStrap
                        </span>
                    </li>
                    <li className='skillItem'>
                        <h2>Back-End</h2>
                        <span>
                            MongoDB, SQL, MySQL, Node.JS, Express.JS
                        </span>
                    </li>
                    <li className='skillItem'>
                        <h2>Language</h2>
                        <span>
                            JavaScript, Python
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Home;