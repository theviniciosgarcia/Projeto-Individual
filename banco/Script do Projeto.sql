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

select * from usuario;

