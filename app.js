let express = require('express')
let app = express()

app.set('view engine', 'ejs') // template engine

app.get('/', (req,res)=>{
  res.render('home.ejs')
})

app.get('/about', (req,res)=>{

  res.render('about.ejs')
})


app.listen(3000, ()=>{
  console.log('server listen on port 3000')
})
