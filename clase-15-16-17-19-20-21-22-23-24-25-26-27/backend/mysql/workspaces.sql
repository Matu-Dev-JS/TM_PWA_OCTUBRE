CREATE TABLE workspaces (
	_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    owner INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (owner) REFERENCES USERS(_id)
)
CREATE TABLE workspace_members(
	PRIMARY KEY (workspace_id, user_id), //clave primaria compuesta entre el id de workspace con el id de usuario (esto evita que se repita un mismo miembro en el mismo workspace)
    workspace_id INT,
    user_id INT,
    FOREIGN KEY (workspace_id) REFERENCES workspaces(_id),
    FOREIGN KEY (user_id) REFERENCES USERS(_id)
)

RENAME TABLE wokspaces TO workspaces