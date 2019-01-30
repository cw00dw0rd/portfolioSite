const images = require.context('../assets')

const projects = {
  project: [
    {
      id: 0,
      title: 'Newfangled Coffee',
      description: 'Created with Python and Django',
      src: images('./bg.jpg'),
      url: 'https://www.newfangledcoffee.com',
      tech: ['Python', 'Django', 'Bootstrap', 'Apache', 'SQL', 'HTML', 'CSS'],
      tag: 'python',
      summary: `This project was a great early project that combined my two favorite things, programming and coffee! My goal when designing the site was to create a blog platform. I imagined I was the client and I wanted a custom blog site. The requirements included, user sign-up, a commenting system, an admin portal and a text editor, with formatting capabilities. I was able to accomplish all of that and more. I was already familiar with Python and became familiar with Django and its benefits and limitations. Django is great for quickly spinning up the backend but I found customizing things such as,user creation, was a bit more tideous than expected. Specifically, the default user creation requires a username, but I only wanted my users to supply an Email.I did eventaully achieve that goal by customizing the built in authentication to allow for this. You will also see I still use it occasionally to post about coffee.`,
      icon: images('./pythonLogo.png')
    },
    {
      id: 1,
      title: 'Carbon Black Electron',
      description: 'Electron App that accesses Carbon Black API',
      src: images('./electronFull.png'),
      url: 'https://github.com/cw00dw0rd/carbonblackcsv',
      tech: ['Electron', 'Javascript', 'HTML', 'CSS'],
      tag: 'carbonBlack',
      icon: images('./electronLogo.png'),
      summary: "This is one of a few Electron applications I have made for a security engineer. The jobs come with very specific requirements and require being offline applications. This request didn't stop me from using my web development skills, which is why I enjoy using Electron."
    },
    {
      id: 2,
      title: 'Focallocal',
      description: 'Positive Action site in Meteor and React',
      src: images('./focalFull.png'),
      url: 'https://www.focallocal.org/',
      tech: ['Meteor', 'React', 'Webpack', 'Javascript', 'MongoDB', 'HTML', 'CSS'],
      tag: 'react',
      icon: images('./react-512.png'),
      summary: `Focallocal focuses on creating events for global positive action and The Brighter Tomorrow Map is for offering resources to assist the homeless community.  It is under development in Meteor, React, MongoDB, and many other libraries.I came into the project as it was transitioning from Blaze to React and it
      has been great to work with such a diverse global team on such a complex and
      impactful mission. I also created a quick Android app using Chrome Tabs for
      the project and I am currently listed on the homepage as a top contributor to the main codebase.`
    },
    {
      id: 3,
      title: 'MongoDB Certified Developer',
      description: 'MongoDB Developer Certification',
      src: images('./MongoDBCert.png'),
      url: 'https://university.mongodb.com/certification/verify_certificate',
      tech: ['Certificate ID', '423-148-211'],
      tag: 'mongodb',
      icon: images('./mongoIcon.png'),
      summary: `My path to becoming a certified MongoDB developer started when I
      set out to make a tutorial for AngularJS and realized I didn't know enough about
      databases. I was already familiar with MySQL and had used it primarily with Java
      but MongoDB seemed to be the go to option, now I see why. A few months later
      and about 6 Official MongoDB University courses later, I am officially hooked on MongoDB!`
    },
    {
      id: 4,
      title: 'This Portfolio Site',
      description: 'Positive Action site in Meteor and React',
      src: images('./vuePage.png'),
      url: 'https://github.com/cw00dw0rd',
      tech: ['Express', 'Vue', 'Webpack', 'Javascript', 'MongoDB', 'HTML', 'CSS'],
      tag: 'vue',
      icon: images('./vueLogo.png'),
      summary: `I had a lot of fun creating this site and find myself really enjoying
      the blend of React and Angular, that Vue has to offer. I tried to make use of some
      of Vue's features such as, components, store modules, directives, and transitions.
      I went a little out of my way to avoid the more traditional layout and tried to find
      a more interesting approach to navigation, with the icon navbar.I have posted the code for this project
      on GitHub, along with some other smaller projects. I would love to hear what
      you think and any feedback you might have! Just click that grinning face over there!`
    }
  ]
}
export default projects
