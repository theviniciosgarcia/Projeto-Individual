var database = require("../database/config");

function buscarUltimasMedidas() {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select count(tipo_torcedor) as louco,(select count(tipo_torcedor) 
        as fanatico from usuario where tipo_torcedor = 'fanatico') 
        as fanatico, (select count(tipo_torcedor) 
        as comum from usuario where tipo_torcedor = 'comum') 
        as comum from usuario where tipo_torcedor = 'louco'`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select count(tipo_torcedor) as louco,(select count(tipo_torcedor) 
        as fanatico from usuario where tipo_torcedor = 'fanatico') 
        as fanatico, (select count(tipo_torcedor) 
        as comum from usuario where tipo_torcedor = 'comum') 
        as comum from usuario where tipo_torcedor = 'louco'`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function obterDadosGraficoClube() {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select count(clube) as corinthians, (select count(clube) 
        as santos from usuario where clube = 'santos')
        as santos, (select count(clube) 
        as sao_paulo from usuario where clube = 'sao_paulo')
        as sao_paulo, (select count(clube) 
        as sem_mundial from usuario where clube = 'sem_mundial') 
        as sem_mundial, (select count(clube) 
        as outro from usuario where clube = 'outro') 
        as outro from usuario where clube = 'corinthians'`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select count(clube) as corinthians, (select count(clube) 
        as santos from usuario where clube = 'santos')
        as santos, (select count(clube) 
        as sao_paulo from usuario where clube = 'sao_paulo')
        as sao_paulo, (select count(clube) 
        as sem_mundial from usuario where clube = 'sem_mundial') 
        as sem_mundial, (select count(clube) 
        as outro from usuario where clube = 'outro') 
        as outro from usuario where clube = 'corinthians'`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas,
    obterDadosGraficoClube
}
