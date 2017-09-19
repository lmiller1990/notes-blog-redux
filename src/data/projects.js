import techs from './technologies'

const projects = [
	{
		id: 3,
		title: 'React Redux Homepage',
		description: 'My personal homepage, build using React and Redux.',
		link: '/',
		technologies: [
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
		link: 'http://github.com/lmiller1990/vue-tetris',
		technologies: [
			techs.vue,
			techs.vuex,
			techs.testing
		]
	},
	{
		id: 1,
		title: 'Share My Anything',
		description: 'A simple site to allow anyone to share images, grouped by category.',
		link: 'http://github.com/lmiller1990/share-my-anything',
		technologies: [
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
		technologies: [
			techs.rails,
			techs.testing,
			techs.heroku
		]
	}
]

export default projects
