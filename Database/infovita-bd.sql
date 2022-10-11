create table endereco_estabelecimento (
	latitude double precision not null,
	longitude double precision not null,
	logradouro varchar(50),
	numero varchar(50),
	bairro varchar(50),
	complemento varchar(50),
	municipio varchar(50),
	
	id bigserial primary key
);

create table endereco_usuario (
	logradouro varchar(50),
	numero varchar(50),
	bairro varchar(50),
	complemento varchar(50),
	municipio varchar(50),
	
	id bigserial primary key
);

create table estabelecimento (
	nome varchar(50) not null,
	nome_empresarial varchar(50) not null,
	cnes varchar(14) not null,
	cnpj varchar(11) not null,
	
	id_endereco bigint references endereco_estabelecimento(id),
	id bigserial primary key
);

create table atendimento (
	dia varchar(12) not null,
	horario_inicial varchar(5) not null,
	horario_final varchar(5) not null,
	
	id_estabelecimento bigint references estabelecimento(id),
	id bigserial primary key
);

create table usuario (
	nome varchar(50) not null,
	email varchar(50) not null,
	senha varchar(50) not null,
	telefone varchar(11) not null,
	
	id_endereco bigint references endereco_usuario (id),
	id bigserial primary key
);

create table favorito (
	id_estabelecimento bigint references estabelecimento(id),
	id_usuario bigint references usuario (id),
	id bigserial primary key
);

create table comentario (
	comentario varchar(200) not null,
	id_estabelecimento bigint references estabelecimento(id),
	id_usuario bigint references usuario (id),
	id bigserial primary key
);

create table equipamento (
	nome varchar(50) not null,
	id bigserial primary key
);

create table exame (
	nome varchar(50) not null,
	id bigserial primary key
);

create table equipamento_exame (
	id_equipamento bigint references equipamento(id),
	id_exame bigint references exame(id),
	id bigserial primary key
);

create table estalecimento_equipamento (
	num_existentes integer not null,
	num_funcionais integer not null,
	sus boolean not null,
	
	id_estabelecimento bigint references estabelecimento(id),
	id_equipamento bigint references equipamento(id), 
	id bigserial primary key
);

create table denuncia (
	comentario varchar(200) not null,
	status varchar(12) not null,
	
	id_usuario bigint references usuario (id),
	id bigserial primary key
);

create table administrador (
	nome varchar(50) not null,
	email varchar(50) not null,
	senha varchar(50) not null,
	
	id bigserial primary key
); 

create table notificacao_denuncia (
	id_administrador bigint references administrador(id),
	id_denuncia bigint references denuncia(id),
	id bigserial primary key
);
