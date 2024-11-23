CREATE TABLE IF NOT EXISTS users (
    id VARCHAR PRIMARY KEY,
    name VARCHAR,
    last_name VARCHAR,
    email VARCHAR,
    password VARCHAR
);

CREATE TABLE IF NOT EXISTS ServiceProviders (
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
    id_provider VARCHAR  REFERENCES ServiceProviders(id),
    PRIMARY KEY (id_user, id_provider)
);