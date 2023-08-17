import React from 'react';
import featuredPH from './assets/Featured-Place-Holder.jpg'
import projectPH from './assets/Project-Place-Holder.jpg'

const portfolioProjects = [
    {
        title: 'Fitness in your Schedule',
        github: 'https://github.com/faithfechser/Fitness-in-your-Schedule',
        deployed: 'https://intense-inlet-71364-4ce35d6f5d82.herokuapp.com',
        image: featuredPH,
    },
    {
        title: 'TIME DRIVE! 9 to 5',
        github: 'https://github.com/faithfechser/Work-Day-Scheduler-C5',
        deployed: 'https://faithfechser.github.io/Work-Day-Scheduler-C5/',
        image: featuredPH,
    },
    {
        title: 'Headline-HQ',
        github: 'https://github.com/BlakeE-37/404-Found',
        deployed: 'https://blakee-37.github.io/404-Found/',
        image: featuredPH,
    },
    {
        title: 'Quode Quiz',
        github: 'https://github.com/faithfechser/Code-Quiz-C4',
        deployed: 'https://faithfechser.github.io/Code-Quiz-C4/',
        image: projectPH,
    },
    {
        title: 'Password Generator',
        github: 'https://github.com/faithfechser/Password-Generator-C3',
        deployed: 'https://faithfechser.github.io/Password-Generator-C3/',
        image: projectPH,
    },
    {
        title: 'README Generator',
        github: 'https://github.com/faithfechser/Professional-README-Generator-C7',
        image: projectPH,
    },
    {
        title: 'Note Taker',
        github: 'https://github.com/faithfechser/Note-Taker-C9',
        image: projectPH,
    }
]

function Portfolio() {
    return (
        <div className='portfolio'>
            <h2>Portfolio</h2>
            <h3>Featured Projects</h3>
            <h3>All Projects</h3>
        </div>
    );
}

export default Portfolio