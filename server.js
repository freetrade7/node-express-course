//gives access to express librrary by searching node_modules and finding "express"
const express = require('express');

//creates an instance of express constructor named "app"
const app = express();

//mock user data:
const mockUserData=[
  {name: 'Mark'},
  {name: 'Jill'}
]

app.get('/users', function(req,res){
  res.json({
    success: true,
    message: 'successfully got users!',
    users: mockUserData
  })
})
//code here

//bottom
app.listen(8000, function(){
  console.log("Server is listening")
}
  )
