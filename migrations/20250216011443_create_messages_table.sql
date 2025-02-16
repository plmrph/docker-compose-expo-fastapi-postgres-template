-- migrate:up
CREATE TABLE messages (
    id SERIAL PRIMARY KEY,
    text TEXT NOT NULL
);

INSERT INTO messages (text) VALUES ('Hello from Expo in Docker! 🚀 being pulled from Postgres via FastAPI.');

-- migrate:down
DROP TABLE messages;
