CREATE TABLE doctor (
    id 			        bigserial 	NOT NULL,
    name 	            text 		NOT NULL,
    CONSTRAINT pk_doctor PRIMARY KEY (id)
);

CREATE TABLE parameter (
    id 			        bigserial 	NOT NULL,
    code                text 	    NOT NULL,
    name 	            text 		NOT NULL,
    value 		        text 		NOT NULL,
    CONSTRAINT pk_parameter PRIMARY KEY (id)
);
CREATE UNIQUE INDEX unq_parameter_code ON parameter(code);

CREATE TABLE screen_group (
    id 			        bigserial 	NOT NULL,
    code                text 	    NOT NULL,
    name 	            text 		NOT NULL,
    CONSTRAINT pk_screen_group PRIMARY KEY (id)
);
CREATE UNIQUE INDEX unq_screen_group_code ON screen_group(code);

CREATE TABLE screen (
    id 			        bigserial 	NOT NULL,
    serial              text 	    NOT NULL,
    name 	            text 		NOT NULL,
    group_id            bigint      NOT NULL,
    active              boolean     NOT NULL,
    update_second       int         NOT NULL,
    update_random       boolean     NOT NULL,
    ip                  text        NOT NULL,
    platform            text        NOT NULL,
    take_ss             boolean     NOT NULL,
    shutdown            boolean     NOT NULL,
    startup             boolean     NOT NULL,
    working_hours       text        NULL,
    created_at          timestamptz NOT NULL,
    last_updated_at     timestamptz NOT NULL,
    CONSTRAINT pk_screen PRIMARY KEY (id),
    CONSTRAINT fk_screen_group_id FOREIGN KEY(group_id) REFERENCES screen_group(id)
);
CREATE UNIQUE INDEX unq_screen_serial ON screen(serial);
CREATE UNIQUE INDEX unq_screen_name ON screen(name);

CREATE TABLE screen_shot (
    id 			        bigserial 	NOT NULL,
    screen_id           bigint      NOT NULL,
    shot_at             timestamptz NOT NULL,
    created_at          timestamptz NOT NULL,
    image               bytea       NOT NULL,
    CONSTRAINT pk_screen_shot PRIMARY KEY (id),
    CONSTRAINT fk_screen_shot_screen_id FOREIGN KEY(screen_id) REFERENCES screen(id)
);
CREATE UNIQUE INDEX unq_screen_shot ON screen_shot(screen_id, shot_at);

CREATE TABLE screen_log (
    id 			        bigserial 	NOT NULL,
    screen_id           bigint      NOT NULL,
    log_at              timestamptz NOT NULL,
    created_at          timestamptz NOT NULL,
    name                text        NOT NULL,
    CONSTRAINT pk_screen_log PRIMARY KEY (id),
    CONSTRAINT fk_screen_log_screen_id FOREIGN KEY(screen_id) REFERENCES screen(id)
);
CREATE UNIQUE INDEX unq_screen_log ON screen_log(screen_id, log_at);

CREATE TABLE person (
    id 			        bigserial 	NOT NULL,
    email               text 	    NOT NULL,
    name 	            text 		NOT NULL,
    password 	        text 		NOT NULL,
    roles               text 		NULL,
    CONSTRAINT pk_person PRIMARY KEY (id)
);
CREATE UNIQUE INDEX unq_person_email ON person(email);

CREATE TABLE asset (
    id 			        bigserial 	NOT NULL,
    name                text 	    NOT NULL,
    type 	            text 		NOT NULL,
    content             text 	    NULL,
    created_at          timestamptz NOT NULL,
    CONSTRAINT pk_asset PRIMARY KEY (id)
);
CREATE UNIQUE INDEX unq_asset_name ON asset(name);
