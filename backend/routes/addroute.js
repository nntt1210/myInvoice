var Db  = require('./addcontrollers');
var Order = require('./add');
const addcontrollers = require('./addcontrollers');

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();
var router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


app.use(cors());
app.use('/', router);


router.use((request,response,next)=>{
    console.log('middleware');
    next();
 })


// addcontrollers.getOrders().then(result => {
//     console.log(result);
// })   
        
// router.route('/add').get((request,response)=>{

//     addcontrollers.getOrders().then(result => {
//        response.json(result[0]);
//     })

// })



router.route('/add/:MaHD').get((request,response)=>{

    addcontrollers.getOrders(request.params.MaHD).then(result => {
       response.json(result[0]);
    })

})


// router.route('/add').post((request,response)=>{

//     let order = {...request.body}

//     addcontrollers.addOrder(order).then(result => {
//        response.status(201).json(result);
//     })

// })


var port = process.env.PORT || 3000;
app.listen(port);
console.log('Order Controllers is runnning at ' + port);

