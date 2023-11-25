import express from 'express';
import cors from 'cors';
import routes from './routes.js';
import { sequelize } from './database/data.js';
import { Video } from './models/Video.js';

const app = express();
const port = 3004;

app.use(express.json())
app.use(cors())
app.use(routes)

const conecta_db = async () => {
    try {
        await sequelize.authenticate();
        await Video.sync()
    }
    catch (error) {
        console.error("Erro na Conexão", error);
    }
}

conecta_db()


app.get('/', (req, res) => {
    res.send('')
})

app.listen(port, () => {
    console.log(`Servidor Rodando na Porta: ${port}`)
})