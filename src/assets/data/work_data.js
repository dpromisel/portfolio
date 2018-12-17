import contactList from '../images/work/contact_list.png';
import flexnotes from '../images/work/storyboarding.png';
import eyetracking from '../images/work/eyetracking.png';
import redesign from '../images/work/redesign.png';
import development from '../images/work/development.png';

export default [
    {
        name: 'Personas & Storyboarding',
        info: 'Join me as I step into a user’s shoes. In this project, I observe real users interacting with an interface, interview these individuals about their experiences, construct users’ mental models, create personas based on these users, and illustrate a storyboard for one persona. This is a classic UX task.',
        img: flexnotes,
        alt: 'FlexNotes',
        codeLink: "https://github.com/conmeconte/flexnotes",
        demoLink: "https://flexnotes.net/"
    },
    {
        name: 'Responsive Redesign',
        info: 'Originally developed during an API hackathon, Environmindful is an environmental dashboard using Google Maps, Google Charts, OpenWeather, AQI, Carma and News APIs. Its purpose is to promote environmental awareness around the world. Built with jQuery, Ajax, and Bootstrap.',
        img: redesign,
        alt: 'Environmindful',
        codeLink: "https://github.com/brucean52/Environmindful",
        demoLink: "https://brucean52.github.io/Environmindful/"
    },
    {
        name: 'React Development',
        info: 'Match Two! is a comic book themed, memory match game. This project was built using jQuery, Bootstrap, scalable vector graphics (SVG), Photoshop, and Illustrator.',
        img: development,
        alt: 'Match Two',
        codeLink: "https://github.com/brucean52/memory-match-js",
        demoLink: "https://brucean52.github.io/memory-match-js/"
    },
    {
        name: 'Iterative Design // Eye Tracking',
        info: 'Contact list is a mobile responsive technical demo using a model-view-controller (MVC) architecture, jQuery, Ajax, and Flexbox. A PHP back end was used to perform CRUD operations to a MySQL database. Contacts are sortable by name, and the app is fully mobile responsive.',
        img: eyetracking,
        alt: 'eyetracking',
        codeLink: "https://github.com/brucean52/contact_list",
        demoLink: "http://contact-list.brucedev.net/"
    },
];
