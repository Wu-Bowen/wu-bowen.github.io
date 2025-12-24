import React from 'react';
import NLP_PAPER from './Twitter_Sentiment_Analysis.pdf';
import CO2_PAPER from './CO2.pdf';
const projectData = {
    projects: [
        {
            name: 'Spotilytics',
            description: (
                <p>
                    A web app for visualizing personalized Spotify analytics.
                    View recently played songs, top artists, tracks, genres, and
                    in-depth overview on your music choice. Also, discover new
                    artists and songs based on personal preferences.
                </p>
            ),
            stack: ['JavaScript', 'React', 'Node', 'MongoDB', 'Express'],
            external: '',
            github: 'https://github.com/Wu-Bowen/spring-2020-gifted-hammer',
        },
        {
            name: 'Project Neo',
            description: (
                <p>
                    A survival base-building and management game built in Unity.
                    Players must manage character and NPC conditions while
                    dealing with internal and external conflicts. Repository is
                    currently private until release.
                </p>
            ),
            stack: ['C#', 'Unity', 'Photoshop', 'ShaderLab'],
            external: '',
            github: 'https://github.com/Wu-Bowen/Project-Neo',
        },
        {
            name: 'Client Websites',
            description: (
                <p>
                    Collection of personal websites built for various clients.
                    Features include responsive design, modern UI/UX, and
                    optimized performance. View examples:{' '}
                    <a
                        onClick={(e) => e.stopPropagation()}
                        href="https://xiao-hannah.github.io/"
                        rel="noopener noreferrer"
                        target="_blank"
                        aria-label="Hannah's Website"
                    >
                        Hannah Xiao
                    </a>
                    ,{' '}
                    <a
                        onClick={(e) => e.stopPropagation()}
                        href="https://lakepartners.netlify.app/"
                        rel="noopener noreferrer"
                        target="_blank"
                        aria-label="Lake Partners"
                    >
                        Lake Partners
                    </a>
                    ,{' '}
                    <a
                        onClick={(e) => e.stopPropagation()}
                        href="https://perplexityapm.netlify.app/"
                        rel="noopener noreferrer"
                        target="_blank"
                        aria-label="Perplexity APM"
                    >
                        Perplexity APM
                    </a>
                </p>
            ),
            stack: ['JavaScript', 'React', 'CSS', 'Netlify', 'GitHub Pages'],
            external: 'https://xiao-hannah.github.io/',
            github: '',
        },
        {
            name: 'Lyricification',
            description: (
                <p>
                    {' '}
                    Why do so few songs in Spotify have lyrics? Automatically
                    generate the lyrics when choosing your music with this app
                    (built-in music player as well). Built using Spotify API and
                    Lyric Finder API (Deprecated because new Spotify lyrics 😠)
                </p>
            ),
            stack: ['JavaScript', 'React', 'Bootstrap', 'Express'],
            external: 'https://lyricification.herokuapp.com/',
            github: 'https://github.com/Wu-Bowen/Lyricification',
        },
        {
            name: 'Website V3',
            description: (
                <p>
                    You're already here! This is the third iteration of my
                    personal website.
                </p>
            ),
            stack: ['JavaScript', 'React', 'CSS', 'MaterialUI'],
            external: '',
            github: 'https://github.com/Wu-Bowen/personal-website',
        },
        {
            name: 'Sentiment Analysis on Twitter Data',
            description: (
                <p>
                    A Paper focused on comparing various NLP models to model
                    Twitter sentiment analysis. Algorithms explored: Naive
                    Bayes, Vectorizing, Support Vector Machine, and Long
                    Short-term Memory
                </p>
            ),
            stack: ['TensorFlow', 'Java', 'Python', 'LaTeX'],
            external: NLP_PAPER,
            github: '',
        },
        {
            name: 'Carbon Dioxide and Global Warming',
            description: (
                <p>
                    Analyzed the effects of global carbon dioxide emissions and
                    the effects of it on global temperature using big data
                    tools. Created visualizations using Tableau to better
                    represent our findings.
                </p>
            ),
            stack: ['Hadoop', 'MapReduce', 'Hive', 'Tableau'],
            external: CO2_PAPER,
            github: 'https://github.com/Wu-Bowen/CO2_And_Global_Warming',
        },
        {
            name: 'Website V2',
            description: <p> Second iteration of my personal website. </p>,
            stack: ['Bootstrap', 'HTML', 'CSS', 'JavaScript'],
            external: '',
            github: 'https://github.com/Wu-Bowen/oldWeb',
        },
        {
            name: 'Jean Baudrillard Page',
            description: (
                <p>
                    Created a simple Website for an English Project on Jean
                    Baudrillard. Note: For a voice over, click on the Titles.
                </p>
            ),
            stack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Audacity'],
            external: 'https://wu-bowen.github.io/Jean_Project/',
            github: 'https://github.com/Wu-Bowen/Jean_Project',
        },
        {
            name: 'Bobcat Transit',
            description: (
                <p>
                    {' '}
                    A multimodal transit app to optimize transportation
                    decisions in NYC by fetching data from Google Maps,
                    CitiBike, TripToCarbon API, and NYU’s Bus app PassioGo.{' '}
                </p>
            ),
            stack: [
                'Expo',
                'ReactNative',
                'React',
                'Redux',
                'JavaScript',
                'VSCode Live',
            ],
            external: '',
            github: 'https://github.com/Wu-Bowen/bobcat-transit',
        },
        {
            name: 'CSS Animation Project',
            description: (
                <p>
                    Early project where I was just getting started in Frontend
                    development. The project focuses on CSS animations and some
                    cool weather effects that can be done with them.
                </p>
            ),
            stack: ['HTML', 'CSS', 'JavaScript'],
            external: 'https://wu-bowen.github.io/CSS_Animations/',
            github: 'https://github.com/Wu-Bowen/CSS_Animations',
        },
    ],
};

export default projectData;
