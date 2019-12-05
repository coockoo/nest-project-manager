create table projects (
  id bigserial primary key,

  owner text not null,
  name text not null,
  url text not null,
  stargazers_count int not null default 0,
  forks_count int not null default 0,
  created_at timestamp with time zone not null
);
