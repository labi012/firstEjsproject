// basic server structure
// const express = require('express'); // Is the way to import dependency or package or thrid party librar

// const app = express(); 
// const PORT = process.env.PORT || 3001;

// // sending a respond to frontend or clientside
// app.get('/',(req, res)=>{
//     res.send('<h1>Welcome to EJS</h1>');
// });

// app.get('/about',(req, res)=>{ //'about' means about route
//     res.send('<h1>We are web developer</h1>');
// });

// app.get('/services',(req, res)=>{
//     res.send(
//         `<h1>We render different services such as coding of javascript</h1> <br />
//         <h3> We also train student from age 10 upward</h3>`
//         );
// });
// app.listen(PORT, ()=>{
//     console,console.log(`server is running at http://localhost:${PORT}`);
// });


const express = require('express'); //is the way to import dependency or package or third party 
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3001;

// setup the template engine
app.set('view engine', 'ejs');

app.use(express.static('public'));
// app.use(express.urlencoded({extended: true}));  // it enables sending data from clientside to backend
app.use(bodyParser.urlencoded({extended: true}));

let pINames = ['c', 'c++', 'java', 'python'];

// sending a response to frontend or clientside
app.get('/',(req, res)=>{
// res.status(200).send('<h1>Welcome to EJS</h1>');
 res.status(200).render('index', {pageTitle: 'Home Page', proNames: pINames});
});

// getting data from frontend and insert it onto pINames array of string
app.post ('/', (req, res)=>{
     const pIName = req.body.pIName;
 pINames.push(pIName);
// console.log(pIName);
// res.status(201).send('data is created');
 res.redirect('/');
});
app.get('/contact',(req, res)=>{
 res.status(200).render('contact', {pageTitle: 'Contact Page'});
});

app.listen(PORT, ()=>{
 console.log(`server is running at http://localhost:${PORT}`);
 });
























































































































































// challenge area
// bulid the basic backend server with the following routes
// '/'
// '/booking'
// '/payment'
// '/features'
// '/contact'
// startup your express server -> nmp start or npm run dev


// //PERSONAL PROJECT
// const express = require('express'); 

// const app = express(); 
// const PORT = process.env.PORT || 4001;

// app.get('/',(req, res)=>{
//     res.send('<h1>Welcome to shop</h1>');
// });

// app.get('/booking',(req, res)=>{
//     res.send('<h1>We good</h1>');
// });

// app.get('/payment',(req, res)=>{
//     res.send('<h1>How you doing</h1>');
// });

// app.get('/features',(req, res)=>{
//     res.send('<h1>Where are you from</h1>');
// });

// app.get('/contact',(req, res)=>{
//     res.send('<h1>Yo fam</h1>');
// });

// app.listen(PORT, ()=>{
//     console,console.log(`server is running at http://localhost:${PORT}`);
// });