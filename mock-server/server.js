const jsonServer = require('json-server')
const server = jsonServer.create()
const path = require('path')
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults()
 
server.use(middlewares)
server.use(jsonServer.bodyParser)


server.use('/login',(req,res,next)=>{
	console.log(req.body.userName,req.body.userName)
	if(req.body.userName =="admin" && req.body.password == 'admin'){
		res.jsonp({status:200})
	}else{
		res.jsonp({status:404})
	}
})




server.use(router)
server.listen(3001, () => {
  console.log('JSON Server is running')
})


