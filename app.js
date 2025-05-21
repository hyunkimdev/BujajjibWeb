const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('layout', 'layouts/main');
app.use(expressLayouts);

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', { 
    title: 'Bujajjib',
    activePage: 'home'
  });
});

app.get('/about', (req, res) => {
  res.render('about', { 
    title: 'Bujajjib - About',
    activePage: 'about'
  });
});

app.get('/order', (req, res) => {
  res.render('order', { 
    title: 'Bujajjib - Order',
    activePage: 'order'
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
}); 