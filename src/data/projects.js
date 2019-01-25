const images = require.context('../assets', true, /\.png$/)

const projects = {
  project: [
    {
      id: 0,
      title: 'Newfangled Coffee',
      description: 'Created with Python and Django',
      src: images('./project1.png'),
      url: 'https://www.newfangledcoffee.com',
      tech: ['Python', 'Django', 'Bootstrap', 'Apache', 'SQL', 'HTML', 'CSS']
    },
    {
      id: 1,
      title: 'Newfangled Coffee',
      description: 'Created with Python and Django',
      src: images('./project1.png'),
      url: 'https://www.newfangledcoffee.com',
      tech: ['Python', 'Django', 'Bootstrap', 'Apache', 'SQL', 'HTML', 'CSS']
    },
    {
      id: 2,
      title: 'Newfangled Coffee',
      description: 'Created with Python and Django',
      src: images('./project1.png'),
      url: 'https://www.newfangledcoffee.com',
      tech: ['Python', 'Django', 'Bootstrap', 'Apache', 'SQL', 'HTML', 'CSS']
    }
  ]
}
export default projects
