const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Album = require('./post')

const app = express()

const testdburl = 'mongodb://localhost:27017/posts-test-redux'
mongoose.connect(testdburl, { useMongoClient: true   })

const Post = mongoose.model('Post')

app.use(bodyParser.json())
app.use(cors())

app.get('/posts', (req, res) => {
	setTimeout(() => {
		Post.find({}, (err, posts) => {
			if (!err) {
				return res.json(posts)
			}
		})
	}, 1000)
})

app.get('/posts/:_id', (req, res) => {
	setTimeout(() => {

		Post.find({ _id: req.params._id }, (err, post) => {
			if (!err) {
				return res.json(post[0])
			}
		})
	}, 1000)
})

app.post('/posts/:_id', (req, res) => {
	setTimeout(() => {

		Post.findByIdAndUpdate(req.params._id, {
			title: req.body.data.title,
			content: req.body.data.content	
		}, {new: true}, (err, post) => {
			if (!err) {
				console.log('updated', post)
				return res.json(post)
			}
		})
	}, 1500)
})

app.post('/posts/create', (req, res) => {
	setTimeout(() => {
		const title = req.body.data.title

		Post.create({ title: title }, (err, post) => {
			if (!err) {
				return res.json(post)
			} else {
				console.log('Err', err)
			}
		})
	}, 1000)
})

app.listen(3002, () => console.log('Listening on 3002'))