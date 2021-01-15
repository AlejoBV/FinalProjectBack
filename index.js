const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const router = require('./routes');
const path = require('path');


const bodyParser = require('body-parser');


const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))

app.use('/api', router);

//cambio de port por PORT
app.set('PORT', process.env.PORT || 3000);

// if (process.env.NODE_ENV !== 'test') {
//     app.listen(app.get('port'), () => {
//         console.log('Server on port ' + app.get('port') + ' on dev');
//     });
// }

app.listen(app.get('PORT'), () => {
    // console.log(`Running on http://localhost:${app.get('port')}`)
    console.log('server up');
})


module.exports = app;