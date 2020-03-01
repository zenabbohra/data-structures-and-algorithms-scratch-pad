let opts, req, res, bcrypt, db;

const mw = (opts) => (req, res, next) => next();

app.use(mw({ali: 'is not bubu'}));
const login = (req, res, bcrypt, db) => {
//do things;
};
app.get(‘/papaya’, (req, res) => login(req, res, bcrypt, db));


const signup = (bcrypt, db) => (req, res) => {};
app.get(‘/signup’, signup(bcrypt, db));