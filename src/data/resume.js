import techs from './technologies'

const positions = [
	'backend': 'Backend Software Engineer',
	'fullstack': 'Full Stack Software Engineer',
	'frontend': 'Front End Software Engineer'
]

const experience = [
	{
		id: 1,
		company: 'HTM',
		timespan: 'October 2016 - present',
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
	{
		id: 0,
		company: 'Two Red Kites',
		timespan: 'Feb 2016 - July 2016',
		link: 'http://tworedkites.com',
		position: positions.backend,
		location: 'Brisbane, Australia',
		technologies: [
			techs.rails,
			techs.testing
		],
		description: 'I was a backend developer in an agile team for a number of compliance systems for various clients.'
	},
]

export default experience
