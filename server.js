//gives access to express librrary by searching node_modules and finding "express"
const express = require('express');

//creates an instance of express constructor named "app"
const app = express();

//mock user data:

const mockUserData=[
	{name:'Mark'},
	{name:'Jill'}
]

app.get('/users',function(req,res){
	res.json({
		success: true,
		message: 'successfully got users. Nice!',
		users: mockUserData
	})
})

app.get('/users/:id',function(req,res){
	console.log(req.params.id)
	res.json({
		success: true,
		message: 'got one user',
		user: req.params.id
	})
})


app.listen(8000,function(){console.log('server is listening')})
