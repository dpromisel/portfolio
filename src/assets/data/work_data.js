import contactList from '../images/work/contact_list.png';
import flexnotes from '../images/work/storyboarding.png';
import eyetracking from '../images/work/eyetracking.png';
import redesign from '../images/work/redesign.png';
import development from '../images/work/development.png';
import redesign_pdf from '../pdfs/Redesign.pdf';
import personas_pdf from '../pdfs/Personas_Final.pdf';
import iterative_pdf from '../pdfs/Iterative_Design_Final.pdf';


export default [
    {
        name: 'Responsive Redesign',
        info: 'Originally developed during an API hackathon, Environmindful is an environmental dashboard using Google Maps, Google Charts, OpenWeather, AQI, Carma and News APIs. Its purpose is to promote environmental awareness around the world. Built with jQuery, Ajax, and Bootstrap.',
        img: redesign,
        pdf: redesign_pdf,
        alt: 'Environmindful',
        codeLink: "https://github.com/brucean52/Environmindful",
        demoLink: "https://brucean52.github.io/Environmindful/"
    },
    {
        name: 'React Development',
        info: 'Blurb',
        img: development,
        pdf: redesign_pdf,
        alt: 'Match Two',
        codeLink: "https://github.com/brucean52/memory-match-js",
        demoLink: "https://brucean52.github.io/memory-match-js/"
    },
    {
        name: 'Iterative Design',
        info: 'Blurb',
        img: eyetracking,
        pdf: iterative_pdf,
        alt: 'eyetracking',
        codeLink: "https://github.com/brucean52/contact_list",
        demoLink: "http://contact-list.brucedev.net/"
    },
    {
        name: 'Personas & Storyboarding',
        info: 'Join me as I step into a user’s shoes. In this project, I observe real users interacting with an interface, interview these individuals about their experiences, construct users’ mental models, create personas based on these users, and illustrate a storyboard for one persona. This is a classic UX task.',
        img: flexnotes,
        pdf: personas_pdf,
        alt: 'FlexNotes',
        codeLink: "https://github.com/conmeconte/flexnotes",
        demoLink: "https://flexnotes.net/"
    },
];
