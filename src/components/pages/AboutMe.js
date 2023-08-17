import React from 'react';
import faithPfp from './assets/Faith_pfp.jpg';

function AboutMe() {
    return (
        <div className='aboutMe'>
            <h2>About Me</h2>
            <img src={faithPfp} alt="Faith Fechser"/>
            <p className='aboutDesc'>
            Faith Fechser is an ambitious and goal-oriented worker with a great work ethic. She is also a very quick and adaptable worker that does well in a fast-paced work environment. Creativity and artistic ability is a very strong virtue of Faith's that increasingly assists her work to be unique and fufilling. Additionally, Faith is heavily educated in several computer science related topics and continues her education in coding. To this day, Faith builds her experience in digital art, video editing, and web design through freelance and personal work.
            </p>
        </div>
    );
}

export default AboutMe