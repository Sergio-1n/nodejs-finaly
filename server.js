import express from 'express';
import bodyParser from 'body-parser';
import swaggerUI from 'swagger-ui-express';
import swaggerSpec from './config/swagger.js';
import './config/db.js';

// Routes
import authRouter from './routes/authRoutes.js';
import taskRouter from './routes/taskRoutes.js';

const app = express();
const port = 3001;

//Middleware
app.use(bodyParser.json());

app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.use('/api', authRouter);
app.use('/api', taskRouter);

app.listen(port, () => {
    console.log(
        `Server listening on ${port} and starting at http://localhost:${port}`
    );
});
