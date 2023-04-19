create TABLE users(
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(150) NOT NULL,
  second_name VARCHAR(150) NOT NULL,
  age VARCHAR(25) NOT NULL,
  email VARCHAR(150) NOT NULL,
  position VARCHAR(150) NOT NULL
);

create TABLE postUsers(
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(150) NOT NULL,
  second_name VARCHAR(150) NOT NULL,
  age VARCHAR(25) NOT NULL,
  email VARCHAR(150) NOT NULL,
  position VARCHAR(150) NOT NULL,
  user_id INTEGER,
  FOREIGN KEY (user_id) REFERENCES users (id)
);

