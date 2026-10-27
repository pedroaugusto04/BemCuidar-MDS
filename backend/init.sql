CREATE TABLE IF NOT EXISTS users (
    id VARCHAR PRIMARY KEY NOT NULL,
    create_time TIMESTAMP (6) WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    name VARCHAR,
    last_name VARCHAR,
    email VARCHAR,
    icon VARCHAR,
    password VARCHAR
);

CREATE TABLE IF NOT EXISTS service_providers (
    id  VARCHAR PRIMARY KEY NOT NULL,
    create_time TIMESTAMP (6) WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    name VARCHAR,
    age INT NULL,
    state VARCHAR,
    country VARCHAR,
    city VARCHAR,
    neighborhood VARCHAR,
    street VARCHAR,
    street_number VARCHAR,
    coords_lon REAL,
    coords_lat REAL,
    photo VARCHAR NULL,
    service_description VARCHAR NULL,
    user_id VARCHAR NOT NULL,
    experience INT NULL,
    qualifications VARCHAR NULL,
    exp_elderly BOOLEAN NOT NULL,
    exp_children BOOLEAN NOT NULL,
    exp_disabled BOOLEAN NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS user_favorites_service_providers (
    create_time TIMESTAMP (6) WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    user_id VARCHAR NOT NULL REFERENCES users(id),
    provider_id VARCHAR NOT NULL REFERENCES service_providers(id) ON DELETE CASCADE,
    PRIMARY KEY (user_id, provider_id)
);

CREATE TYPE request_status AS ENUM ('pendente','aceito','negado','excluido');

CREATE TABLE IF NOT EXISTS user_requests_service_providers (
    id VARCHAR NOT NULL PRIMARY KEY,
    user_id VARCHAR NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    provider_id VARCHAR NOT NULL REFERENCES service_providers(id) ON DELETE CASCADE,
    create_time TIMESTAMP (6) WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    status request_status NOT NULL DEFAULT 'pendente',
    req_name VARCHAR NOT NULL,
    req_email VARCHAR NULL,
    req_address VARCHAR NOT NULL,
    req_city VARCHAR NOT NULL,
    req_phone VARCHAR NOT NULL,
    req_photo VARCHAR NULL,
    req_information VARCHAR NULL
);

-- Seed inicial de usuário padrão (user@gmail.com / 123)
INSERT INTO users (id, name, last_name, email, password)
VALUES (
    '627a6cb5-09d2-44b1-8100-5ef86636b0f7',
    'Nome',
    'Sobrenome',
    'user@gmail.com',
    '$2b$10$ljgo2eHnlotE3d2bT1KSzOQT5n5cvTGb37lsXcjx7gerujKrvQmWW'
) ON CONFLICT (id) DO NOTHING;

-- Seed inicial de cuidador de exemplo
INSERT INTO service_providers (
    id, name, age, state, country, city, neighborhood, coords_lon, coords_lat,
    service_description, user_id, experience, qualifications, exp_elderly, exp_children, exp_disabled
) VALUES (
    '1', 'Maria Silva', 35, 'Minas Gerais', 'Brasil', 'Ipatinga', 'Centro', -42.54, -19.46,
    'Cuidadora dedicada com ampla experiência em atenção a idosos e suporte a rotinas diárias.',
    '627a6cb5-09d2-44b1-8100-5ef86636b0f7', 8, 'Técnica em Enfermagem e Primeiros Socorros',
    true, false, true
) ON CONFLICT (id) DO NOTHING;