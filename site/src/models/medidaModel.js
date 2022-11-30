var database = require("../database/config");

function buscarUltimasMedidas() {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select count(tipo_torcedor) as louco,(select count(tipo_torcedor) 
        as fanatico from times where tipo_torcedor = 'fanatico') 
        as fanatico, (select count(tipo_torcedor) 
        as comum from times where tipo_torcedor = 'comum') 
        as comum from times where tipo_torcedor = 'louco';`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select count(tipo_torcedor) as louco,(select count(tipo_torcedor) 
        as fanatico from times where tipo_torcedor = 'fanatico') 
        as fanatico, (select count(tipo_torcedor) 
        as comum from times where tipo_torcedor = 'comum') 
        as comum from times where tipo_torcedor = 'louco';`;
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
        as santos from times where clube = 'santos')
        as santos, (select count(clube) 
        as sao_paulo from times where clube = 'sao_paulo')
        as sao_paulo, (select count(clube) 
        as palmeiras from times where clube = 'palmeiras') 
        as palmeiras, (select count(clube) 
        as outro from times where clube = 'outro') 
        as outro from times where clube = 'corinthians';`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select count(clube) as corinthians, (select count(clube) 
        as santos from times where clube = 'santos')
        as santos, (select count(clube) 
        as sao_paulo from times where clube = 'sao_paulo')
        as sao_paulo, (select count(clube) 
        as palmeiras from times where clube = 'palmeiras') 
        as palmeiras, (select count(clube) 
        as outro from times where clube = 'outro') 
        as outro from times where clube = 'corinthians'`;
        
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
