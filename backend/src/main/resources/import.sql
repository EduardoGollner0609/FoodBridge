INSERT INTO tb_role (authority) VALUES('ROLE_USER');

INSERT INTO tb_user (name, birth_date, phone, email, password, address) VALUES ('Eduardo', '2005-06-06', '27 992657127', 'dudugollner0609@gmail.com', '$2a$10$WDgYqMFJfwu.W7U908L13etOXJFTnUwMwtCarlcWfM0myuREtB.Vq', '29072320');
INSERT INTO tb_user (name, birth_date, phone, email, password, address) VALUES ('Marina', '1975-03-31', '27 992430999', 'marina@gmail.com', '$2a$10$WDgYqMFJfwu.W7U908L13etOXJFTnUwMwtCarlcWfM0myuREtB.Vq', '29072320');

INSERT INTO tb_user_role (user_id, role_id) VALUES (1, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 1);

INSERT INTO tb_donation (description, city, state, user_id) VALUES ('Doando muitas bananas.', 'Vitoria', 'Espírito Santo', 1);
INSERT INTO tb_donation (description, city, state, user_id) VALUES ('Doando muitas maçãs.', 'Vitoria', 'Espírito Santo', 2);
INSERT INTO tb_donation (description, city, state, user_id) VALUES ('Doando muitas uvas.', 'Cidade da Maria', 'Bahia', 1);

