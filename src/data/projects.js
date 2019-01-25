const images = require.context('../assets', true, /\.png$/)

const projects = {
  project: [
    {
      id: 0,
      title: 'Newfangled Coffee',
      description: 'Created with Python and Django',
      src: images('./newfangled.png'),
      url: 'https://www.newfangledcoffee.com',
      tech: ['Python', 'Django', 'Bootstrap', 'Apache', 'SQL', 'HTML', 'CSS']
    },
    {
      id: 1,
      title: 'Carbon Black Electron',
      description: 'Electron App that accesses Carbon Black API',
      src: images('./electronCarbonAPI.png'),
      url: 'https://github.com/cw00dw0rd/carbonblackcsv',
      tech: ['Electron', 'Javascript', 'HTML', 'CSS']
    },
    {
      id: 2,
      title: 'Focallocal',
      description: 'Positive Action site in Meteor and React',
      src: images('./focallocal.png'),
      url: 'https://github.com/cw00dw0rd/fl-maps',
      tech: ['Meteor', 'React', 'Webpack', 'Javascript', 'MongoDB', 'HTML', 'CSS']
    }
  ]
}
export default projects
