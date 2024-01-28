import mongoose from "mongoose";
import config from "config"
import Logger from "./logger";

async function connect() {
    const dbUrl = config.get<string>("dbUrl")

    try {
        await mongoose.connect(dbUrl)
        Logger.info("Conexão com Banco de Dados")
    } catch (e) {
        Logger.error("Não foi possivel conectar");
        Logger.error(`Erro: ${e}`);
        process.exit(1)
    }
}

export default connect;