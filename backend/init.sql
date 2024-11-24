CREATE TABLE IF NOT EXISTS users (
    id VARCHAR PRIMARY KEY,
    name VARCHAR,
    last_name VARCHAR,
    email VARCHAR,
    icon VARCHAR,
    password VARCHAR
);

CREATE TABLE IF NOT EXISTS service_providers (
    id  VARCHAR PRIMARY KEY,
    name VARCHAR,
    age INT NULL,
    state VARCHAR,
    country VARCHAR,
    city VARCHAR,
    photo VARCHAR NULL,
    service_description VARCHAR NULL
);

CREATE TABLE IF NOT EXISTS user_favorites_service_providers (
    id_user VARCHAR REFERENCES users(id),
    id_provider VARCHAR  REFERENCES service_providers(id),
    PRIMARY KEY (id_user, id_provider)
);

CREATE TYPE request_status AS ENUM ('pendente','aceito','negado','excluido');

CREATE TABLE IF NOT EXISTS user_requests_service_providers (
    id_user VARCHAR REFERENCES users(id),
    id_provider VARCHAR REFERENCES service_providers(id),
    status request_status DEFAULT 'pendente',
    PRIMARY KEY (id_user, id_provider)
);