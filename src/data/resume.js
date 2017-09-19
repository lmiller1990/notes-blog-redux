import techs from './technologies'

const positions = [
	'backend': 'Backend Software Engineer',
	'fullstack': 'Full Stack Software Engineer',
	'frontend': 'Front End Software Engineer'
]

const experience = [
	{
		id: 0,
		company: 'Two Red Kites',
		link: 'http://tworedkites.com',
		position: positions.backend,
		location: 'Brisbane, Australia',
		technologies: [
			techs.rails,
			techs.testing
		],
		description: 'I was a backend developer in an agile team for a number of compliance systems for various clients.'
	},
	{
		id: 1,
		company: 'HTM',
		link: 'http://www.htm.co.jp',
		position: positions.fullstack,
		location: 'Tokyo, Japan',
		description: 'I am currently a full stack softwave developer at HTM, back office for your Japanese subsidary, where I develop systems to process payroll and provide business insight to clients',
		technologies: [
			techs.vue,
			techs.vuex,
			techs.dotnet,
			techs.csharp,
			techs.sql
		]
	},
]

export default experience
