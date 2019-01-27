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
      tag: 'python'
    },
    {
      id: 1,
      title: 'Carbon Black Electron',
      description: 'Electron App that accesses Carbon Black API',
      src: images('./electronCarbonAPI.png'),
      url: 'https://github.com/cw00dw0rd/carbonblackcsv',
      tech: ['Electron', 'Javascript', 'HTML', 'CSS'],
      tag: 'electron'
    },
    {
      id: 2,
      title: 'Focallocal',
      description: 'Positive Action site in Meteor and React',
      src: images('./focallocal.png'),
      url: 'https://github.com/cw00dw0rd/fl-maps',
      tech: ['Meteor', 'React', 'Webpack', 'Javascript', 'MongoDB', 'HTML', 'CSS'],
      tag: 'react'
    },
    {
      id: 3,
      title: 'Focallocal',
      description: 'Positive Action site in Meteor and React',
      src: images('./focallocal.png'),
      url: 'https://github.com/cw00dw0rd/fl-maps',
      tech: ['Meteor', 'React', 'Webpack', 'Javascript', 'MongoDB', 'HTML', 'CSS'],
      tag: 'meteor'
    }
  ]
}
export default projects
