import express from 'express';
import './db/mongoose.js';
// import { authMdlr } from './middleware/auth.js';
import { createUser } from './db/create-user.js';
import { userLogin } from './routes/users-routes.js';

const app = express();
app.use(express.json());

app.post('/login', userLogin);
app.post('/register', createUser);

app.listen(8081, () => {
  console.log('Le service d\'authentification est en cours d\'exécution sur le port 8081');
});