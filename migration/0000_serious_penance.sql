CREATE TABLE "resources" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "resources_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"title" varchar(1000) NOT NULL,
	"description" text NOT NULL,
	"link" varchar(1000),
	"code" text,
	"tags" varchar(50) NOT NULL
);
