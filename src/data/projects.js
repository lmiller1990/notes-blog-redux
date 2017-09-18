const techs = {
	'vue': { name: 'Vue.js', color: '#7FB700' },
	'vuex': { name: 'vuex', color: '#7FB700' },
	'react': { name: 'React.js', color: '#2766CF' },
	'redux': { name: 'redux', color: '#71218c' },
	'mongo': { name: 'mongodb', color: '#270F5C' },
	'aws': { name: 'AWS (S3, EC2)', color: '#E3C75C' },
	'node': { name: 'Node.js', color: '#7FB400' },
	'android': { name: 'android', color: '#33882B' },
	'rails': { name: 'ruby on rails', color: '#EA1F00' },
	'heroku': { name: 'heroku', color: '#D423B3' },
	'testing': { name: 'unit testing', color: '#9B41B9' },
	'vue-meetup': { name: 'Tokyo Vue.js meetup', color: '#E4A7B6' }
}

const projects = [
	{
		id: 3,
		title: 'React Redux Homepage',
		description: 'My personal homepage, build using React and Redux',
		link: '/',
		techonogies: [
			techs.react,
			techs.redux,
			techs.testing,
			techs.node,
			techs.heroku
		]
	},
	{
		id: 0,
		title: 'Vue.js Tetris',
		description: 'A tetris game built using Vue.js and unit testing.',
		link: 'github.com/lmiller1990/vue-tetris',
		techonogies: [
			techs.vue,
			techs.vuex,
			techs.testing
		]
	},
	{
		id: 1,
		title: 'Share My Anything',
		description: 'A simple site to allow anyone to share images, grouped by category.',
		link: 'github.com/lmiller1990/share-my-anything',
		techonogies: [
			techs.aws,
			techs.testing,
			techs.mongo,
			techs.vue,
			techs.vuex,
		]
	},
	{
		id: 2,
		title: 'Ordering System',
		description: 'A website to keep track of inventory and create shopping lists.',
		link: 'https://github.com/lmiller1990/unplan-ordering',
		techonogies: [
			techs.rails,
			techs.testing,
			techs.heroku
		]
	}
]

export default projects
