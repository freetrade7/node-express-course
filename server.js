//gives access to express librrary by searching node_modules and finding "express"
const express = require('express');

//creates an instance of express constructor named "app"
const app = express();


//code here

//bottom
app.listen(8000, function(){
  console.log("Server is running")
}
  )
