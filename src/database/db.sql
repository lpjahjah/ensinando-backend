DROP SCHEMA IF EXISTS db_ensinando;
CREATE SCHEMA db_ensinando;
USE db_ensinando;

Create Table tipo_usuario
(
	cd_tipo_usuario INT,
	nm_tipo_usuario VARCHAR(45),
	constraint primary key pk_tipo_usuario (cd_tipo_usuario) 
);

Create Table tipo_denuncia
(
	cd_tipo_denuncia INT,
	nm_tipo_denuncia VARCHAR(45),
	constraint primary key pk_tipo_denuncia (cd_tipo_denuncia)
);

Create Table materia 
(
	cd_materia INT,
	nm_materia VARCHAR(100),
	constraint primary key pk_materia (cd_materia)
);

Create Table situacao_prazo
(
	cd_situacao INT,
	nm_situacao VARCHAR(45),
	constraint primary key pk_situacao_prazo (cd_situacao)
);

Create Table usuario
(
	cd_login_usuario INT NOT NULL AUTO_INCREMENT,
	nm_usuario VARCHAR(45),
	cd_senha_usuario VARCHAR(45),
	constraint primary key pk_usuario (cd_login_usuario)
);

Create Table usuario_tipo_usuario
(
	cd_login_usuario INT,
	cd_tipo_usuario INT,
	constraint primary key pk_usuario_tipo_usuario (cd_login_usuario, cd_tipo_usuario),
	constraint foreign key fk_tipo_usuario (cd_tipo_usuario) references tipo_usuario (cd_tipo_usuario),
	constraint foreign key fk_usuario (cd_login_usuario) references usuario (cd_login_usuario)
);

-- Insert Into usuario_tipo_usuario values (32610, 1);
-- Insert Into usuario_tipo_usuario values (32647, 2);
-- Insert Into usuario_tipo_usuario values (32647, 3);
-- Insert Into usuario_tipo_usuario values (32477, 3); 
-- Insert Into usuario_tipo_usuario values (32512, 3); 
-- Insert Into usuario_tipo_usuario values (32505, 3); 

Create Table denuncia 
(
	cd_login_usuario INT,
	cd_denuncia INT,
	cd_tipo_denuncia INT,
	ds_denuncia VARCHAR(45),
	img_denuncia BLOB,
	dt_denuncia DATE,
	hr_denuncia TIME,
	constraint primary key pk_denuncia (cd_login_usuario, cd_denuncia, cd_tipo_denuncia),
	constraint foreign key fk_usuario_denuncia (cd_login_usuario) references usuario (cd_login_usuario),
	constraint foreign key fk_tipo_denuncia (cd_tipo_denuncia) references tipo_denuncia (cd_tipo_denuncia)
);

-- Insert Into denuncia values (32477, 1, 2, 'Aluno mandou diversas vezes a mesma mensagem', null, current_date(), current_time());
-- Insert Into denuncia values (32477, 2, 1, 'Aluno mandou mensagens ofensivas', null, current_date(), current_time()); 

Create Table atividade 
(
	cd_atividade INT,
	cd_situacao  INT,
	dt_inicio DATE,
	hr_inicio TIME,
	dt_prazo DATE,
	hr_prazo TIME,
	nm_atividade VARCHAR(45),
	constraint primary key pk_atividade (cd_atividade),
	constraint foreign key fk_tipo_situacao_atividade (cd_situacao) references situacao_prazo (cd_situacao)
);

-- Insert Into atividade values (1, 2, '2020-08-21','12:00:00', '2020-08-23', '12:00:00', 'Atividade de Trigonometria');
-- Insert Into atividade values (2, 2, '2020-08-23','12:30:00', '2020-08-25', '12:30:00', 'Atividade Barroco e Aspectos Socias');
-- Insert Into atividade values (3, 2, '2020-08-25','12:00:00', '2020-08-27', '12:00:00', 'Atividade de Urbanização e Globalização');

Create Table exercicio 
(
	cd_exercicio INT,
	cd_atividade INT,
	txt_exercicio LONGTEXT,
	img_exercicio LONGBLOB,
	constraint primary key pk_exercicio (cd_exercicio),
	constraint foreign key fk_exercicio_atividade (cd_atividade) references atividade (cd_atividade)
);

-- Insert Into exercicio values (1,1,'A rua Tenório Quadros e a avenida Teófilo Silva, ambas retilíneas,  cruzam-se conforme um ângulo de 30º. O posto de gasolina Estrela do Sul  encontra-se na avenida Teófilo Silva a 4 000 m do citado cruzamento. Sabendo que o percurso do posto Estrela do Sul até a rua tenório quadros forma um ângulo de 90° no ponto de encontro do posto com a rua Teófilo Silva, determine em quilômetros, a distância entre o posto de gasolina Estrela do Sul e a rua Tenório Quadros?',null);
-- Insert Into exercicio values (2,2, 'O que foi o Barroco? Em qual período histórico teve a sua maior influência? O barroco ainda tem influências nos dias atuais? Justifique sua resposta e cite exemplos', null);
-- Insert Into exercicio values (3,3, 'Diferencie cidade e município descrevendo os seus respectivos conceitos.', null);

Create Table questao_alternativa 
(
	cd_alternativa INT,
	txt_alternativa TEXT,
	ic_alternativa_correta BOOL,
	nm_alternativa VARCHAR(45),
	cd_exercicio INT,
	cd_atividade INT,
	constraint primary key pk_alternativa (cd_alternativa),
	constraint foreign key fk_questao_alternativa_exercicio (cd_exercicio) references exercicio (cd_exercicio)
);

-- Insert Into questao_alternativa values (1,'2000 metros', true, 'A)', 1,1);
-- Insert Into questao_alternativa values (2,'300 metros', false, 'B)', 1,1);
-- Insert Into questao_alternativa values (3,'1KM', false, 'C)', 1,1);
-- Insert Into questao_alternativa values (4,'6KM', false, 'D)', 1,1);


Create Table resposta_usuario 
(
	cd_resposta_usuario INT NOT NULL AUTO_INCREMENT,
	cd_login_usuario INT,
	cd_exercicio INT,
	txt_resposta_usuario LONGTEXT,
	cd_resposta_alternativa INT,
	cd_alternativa INT,
	constraint primary key pk_resposta_usuario (cd_resposta_usuario),
	constraint foreign key fk_resposta_usuario_usuario (cd_login_usuario) references usuario (cd_login_usuario),
	constraint foreign key fk_exercicio_atividade (cd_exercicio) references exercicio (cd_exercicio),
	constraint foreign key fk_resposta_usuario_alternativa (cd_alternativa) references questao_alternativa (cd_alternativa)
);

-- Insert Into resposta_usuario values (1, 32477, 1, '2000 metros', 1,1);
-- Insert Into resposta_usuario values (2, 32477, 2, 'O barroco foi um movimento literário que surgiu na Itália.', 2,null);
-- Insert Into resposta_usuario values (3, 32477, 3, 'Cidade advém das grandes urbanizações', 3,null);

Create Table turma 
(
	cd_turma INT,
	cd_materia INT,
	nm_sala VARCHAR(45),
	dt_criacao DATE,
	img_didatico LONGBLOB,
	dt_encerramento_turma DATE,
	txt_conteudo_didatico LONGTEXT,
	constraint primary key pk_turma (cd_turma),
	constraint foreign key fk_turma_materia_cd (cd_materia) references materia (cd_materia)
);

-- Insert Into turma values (1, 1,'Matemática', '2020-08-23', null, '2020-08-31', 'Trigonometria é a área da matemática que estuda as relações envolvendo os lados de um triângulo retângulo, que um polígono que possui três ângulos. A origem do nome vem do grego que refere-se a medidas de três ângulos. A partir dos lados do triângulo é que encontramos as razões seno, cosseno e tangente.');
-- Insert Into turma values (2, 25,'Português', '2020-08-23', null, '2020-08-31', 'Barroco é o estilo artístico que floresceu entre o final do século XVI e meados do século XVIII, inicialmente na Itália, difundindo-se em seguida pelos países católicos da Europa e da América, antes de atingir, em uma forma modificada, as áreas protestantes e alguns pontos do Oriente.');
-- Insert Into turma values (3, 19, 'Geografia', '2020-08-23', null, '2020-08-31', 'Urbanização é o crescimento das cidades, tanto em população quanto em extensão territorial. É o processo em que o espaço rural transforma-se em espaço urbano, com a consequente migração populacional do tipo campo–cidade que, quando ocorre de forma intensa e acelerada, é chamada de êxodo rural.');

Create Table aula 
(
	cd_aula INT,
	nm_arquivo_conteudo VARCHAR(45),
	txt_conteudo_didatico LONGTEXT,
	nm_conteudo_aula VARCHAR(45),
	img_conteudo_aula LONGBLOB,
	cd_turma INT,
	constraint primary key pk_aula (cd_aula),
	constraint foreign key fk_aula_turma (cd_turma) references turma (cd_turma)
);

-- Insert Into aula values (1,null,'Trigonometria é um ramo da matemática que estuda as relações entre os comprimentos de 2 lados de um triângulo retângulo, para diferentes valores de um dos seus ângulos agudos.',
-- 'Trigonometria', null, 1,1);
-- Insert Into aula values (2,null,'A Literatura é a técnica de compor e expor textos escritos, em prosa ou em verso, de acordo com princípios teóricos e práticos','Literatura', null, 2,25);
-- Insert Into aula values (3,null,'Urbanização é o crescimento da população em uma determinada cidade. É o processo em que o espaço rural transforma-se em espaço urbano','Urbanização', null, 3,19);

Create Table turma_usuario
(
	cd_login_usuario INT,
	cd_turma INT,
	constraint primary key pk_turma_usuario (cd_login_usuario, cd_turma),
	constraint foreign key fk_turma_usuario_usuario_login (cd_login_usuario) references usuario (cd_login_usuario),
	constraint foreign key fk_turma_usuario_turma (cd_turma) references turma (cd_turma)
);

-- Insert Into turma_usuario values (32477,1);
-- Insert Into turma_usuario values (32512,2);
-- Insert Into turma_usuario values (32505,3);

Create Table mensagem
(
	cd_mensagem INT,
	dt_mensagem DATE,
	hr_mensagem TIME,
	txt_mensagem LONGTEXT,
	cd_login_usuario INT,
	cd_turma INT,
	constraint primary key pk_mensagem (cd_mensagem),
	constraint foreign key fk_mensagem_turma_usuario_login (cd_login_usuario) references turma_usuario (cd_login_usuario),
	constraint foreign key fk_mensagem_turma_usuario_turma (cd_turma) references turma_usuario (cd_turma)
);

-- Insert Into mensagem values (1, '2020-08-23', '14:20:00', 'Eu tenho uma dúvida', 32512, 2);
-- Insert Into mensagem values (2, current_date(), current_time(), 'Eu não entendi essa parte', 32505, 3);
-- Insert Into mensagem values (3, '2020-08-23', '14:20:00', 'Eu tenho uma dúvida', 32477, 1);
-- Insert Into mensagem values (4, current_date(), current_time(), 'Eu tenho uma dúvida', 32477, 1);

Create Table atividade_turma
(
	cd_atividade INT,
	cd_turma INT,
	
	constraint primary key pk_atividade_turma (cd_atividade, cd_turma),
	constraint foreign key fk_atividade_turma_atividade (cd_atividade) references atividade (cd_atividade),
	constraint foreign key fk_atividade_turma_turma (cd_turma) references turma (cd_turma)
);

-- Insert Into atividade_turma values(1, 2);
-- Insert Into atividade_turma values(2, 3);
-- Insert Into atividade_turma values(3, 1);