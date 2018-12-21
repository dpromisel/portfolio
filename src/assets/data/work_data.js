import flexnotes from '../images/work/storyboarding.png';
import eyetracking from '../images/work/eyetracking.png';
import redesign from '../images/work/redesign.png';
import development from '../images/work/development.png';
import redesign_pdf from '../pdfs/Redesign.pdf';
import iterative_pdf from '../pdfs/Iterative_Design_Final.pdf';
import personas_pdf from '../pdfs/personas.pdf';


export default [
    {
        name: 'Responsive Redesign',
        info: `A design of an interface can be judged by many factors.
        The visual aesthetics can affect a user’s impression, but the quality of the design goes beyond its appearance.
        For example, the quality of an interface also depends on its usability​
        (the ability for users to learn and use the interface to achieve their goals)
        and responsiveness​ (the ability for the interface to adapt to the medium in which it is presented).
        In this project, I selected an interface and redesigned it to improve the overall quality`,
        takeaways: [`An interface's usability can be determined via a thorough analysis of the intuitive design,
        ease of learning, efficiency of use, memorability, and error frequency of the interface`,
        `The subjective satisfaction of an interface is largely determined by choices made on the text, colors, and positioning of elements`],
        challenges: [`Redesigning to improve the overall usability of an interface while maintaining theme and narritive of the website.`,
        `Creating a user experience that adapts to the user's screen size without surrending usability`],
        details: ``,
        img: redesign,
        pdf: redesign_pdf,
        pdf_link: "redesign",
        alt: 'redesign',
        demo: ''
    },
    {
        name: 'Iterative Design',
        info: `In today's digital age, the majority of new startups rely on some form of an interface to achieve their purpose.
        In this project, a group of 3 other students and I selected a startup from the 2018 YCombinator batch and set out to design
        a completely original interface primarily based off of the startup's mission statement.`,
        takeaways: [`Iterative design is a powerful tool used by interface designers to narrow in on the desired form of an interface`],
        challenges: [`Designing an interface based with limited guidelines`,],
        details: ``,
        img: eyetracking,
        pdf: iterative_pdf,
        pdf_link: "iterative",
        alt: 'eyetracking',
        demo: ''
    },
    {
        name: 'React Development',
        info: `Live filtering is a very crucial feature on websites and a good filtering system can considerably improve user experience.
        Majority of modern websites utilize React.js, a modern JavaScript framework for building scalable, component-based user interfaces.`,
        takeaways: [`React is a powerful web framework that can be used to quickly develop modular web interfaces.`],
        challenges: [`Using React and Bootstrap to make a usable and visaully appealing interface.`,
          `Applying key user interface design principles via the React framework.`],
        details: `This project keeps in mind many of the design principles studied that were studied in class.
        The interactive elements are prominent and spaced appropriately,
        the data items are clearly laid out and responsive to the changes in state,
        there is a row of metadata positioned above the list to make it obvious
        to the user how many teams are being shown and what the current filters are.

        Data is first set in App.js where it is passed to the FilteredList component.
        The FilteredList component passes the properly sorted and filtered list
        to the List component which in turn renders the list as html (through the use of jsx syntax).

        The user triggers change in state by selecting, clicking, or inputing text
        into any of the interactive elements positioned at the top of the webpage.
        When the user interacts with an element a function is called that updates
        the state map in the FilteredList component and renders the list items
        over again (with the necessary changes in state).

        The overall goal of the application to a user is to provide a simple
        sorting and filtering tool of NBA teams. Additionally the app
        demonstrates to the user the professional look and feel of react web apps.`,
        img: development,
        pdf: '',
        pdf_link: "",
        alt: 'Match Two',
        demo: "nbaIndex"
    },
    {
        name: 'Personas & Storyboarding',
        info: `Join me as I step into the shoes of a user.
        In this project, I observe real users interacting with an interface,
        interview these individuals about their experiences, construct users’ mental models,
        create personas based on these users,
        and illustrate a storyboard for one persona. This is a classic UX task.`,
        takeaways: [`It is so important to study the behavior of the user when designing an interface.`,
        `Mental Models, Personas, and Storyboards are valuable steps to take
        before designing an interface in order to understand the behavior of the users.`],
        challenges: [`Developing personas and mental models that accurately reflect the obsereved user interactions`,
        `Creating interface mockups that reflect the needs of the user`],
        details: ``,
        img: flexnotes,
        pdf: personas_pdf,
        pdf_link: "personas",
        alt: 'Storyboarding',
        demo: ''
    },
];
