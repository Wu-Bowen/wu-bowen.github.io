import MovieDBImage from './images/movieDB.png';
import MvaLogo from './images/mvaLogo.png';
import GeminiLogo from './images/geminiLogo.png'

const featuredData = {
    projects: [
        {
            name: 'MovieDB',
            description: [
                'An interface for visualizing the endless list of movies. Find information about any movie including ratings, cast, and trailers.',
            ],
            stack: ['JavaScript', 'React', 'Github', 'Node', 'CSS'],
            image: MovieDBImage,
            external: 'https://wu-bowen.github.io/movieDb/',
            github: 'https://github.com/Wu-Bowen/movieDb',
        },
        {
            name: 'Mystic Village Apartments',
            description: [
                'A modern, responsive website built for 888 Holdings LLC featuring property information, amenities, and contact forms for prospective residents.',
            ],
            stack: ['JavaScript', 'React', 'Redux', 'FluentUI', 'Node'],
            image: MvaLogo,
            external: 'https://mysticvillageapartments.com/',
            github: 'https://github.com/Wu-Bowen/mystic_village',
        },
        {
            name: 'Gemini Groove',
            description: [
                'An embeddable music player component with a sleek UI. Built as a reusable React component for seamless integration into any web application.',
            ],
            stack: ['JavaScript', 'React', 'Web Audio API', 'CSS'],
            image: GeminiLogo,
            external: 'https://geminigroove.netlify.app/',
            github: 'https://github.com/Wu-Bowen/EchoMind',
        },
    ],
};

export default featuredData;
