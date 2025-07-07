import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/my-microservices');

const db = mongoose.connection;

db.on('error', (error) => {
  console.error('❌ Échec de connexion MongoDB :', error);
});

db.once('open', () => {
  console.log('✅ Connexion à MongoDB établie');
});