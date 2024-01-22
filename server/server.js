import express from 'express';
import cors from 'cors';
import { router as studentRoutes } from './src/employee/routes.js';

const app = express();
const PORT = 3000;


app.use(cors());


app.use(express.static('../client'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/employees', studentRoutes);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});