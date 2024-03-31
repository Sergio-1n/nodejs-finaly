import mongoose from 'mongoose';

const URI =
    'mongodb+srv://skuznetcov150:iehfwhKrFDZ5D53p@cluster0.37eaydl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose
    .connect(URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((e) => console.error('Connection error', e));
