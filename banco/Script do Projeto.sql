create database projeto;

use projeto;

create table usuario (
idUsuario int primary key auto_increment,
nome varchar(45),
sobrenome varchar(45),
email varchar(45),
senha varchar(45),
clube varchar(45),
tipo_torcedor varchar(45)
);

create table comentario (
idComentario int primary key auto_increment,
titulo varchar(45),
descricao varchar(45),
fkUsuario int, foreign key (fkUsuario) references usuario(idUsuario)
);

-- Quiz: fazer as validações do time que torçe e responde umas perguntas, com isso sai o resultado tipo de torcedor, 
-- e juntamente isso o numero de sua camisa.


select * from usuario;
select * from comentario;

select count(tipo_torcedor) as louco,(select count(tipo_torcedor) 
as fanatico from usuario where tipo_torcedor = 'fanatico') 
as fanatico, (select count(tipo_torcedor) 
as comum from usuario where tipo_torcedor = 'comum') 
as comum from usuario where tipo_torcedor = 'louco';

select count(clube) as corinthians, (select count(clube) 
 as santos from usuario where clube = 'santos')
 as santos, (select count(clube) 
 as sao_paulo from usuario where clube = 'sao_paulo')
 as sao_paulo, (select count(clube) 
 as sem_mundial from usuario where clube = 'sem_mundial') 
 as sem_mundial, (select count(clube) 
 as outro from usuario where clube = 'outro') 
 as outro from usuario where clube = 'corinthians';





