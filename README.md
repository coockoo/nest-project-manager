# Nest.js project manager

# How to start

- To start Postgres – run `./postgres/dev.sh` from the project root.
  Leave it in a separate terminal window/tab to run.

- To start backend `cd backend && npm i && npm run dev`

- To start frontend `cd backend && npm i && npm run dev`

- Go to [http://localhost:8080](http://localhost:8080)

# Thoughts

- Nest.js has a lot of magick (as all of the frameworks).
  Generally, I don't like frameworks, as they create boundaries for development.
  They work well on TODOMVC applications, but any semi-rare custom logic requires
  a lot more effort to create, because framework just doesn't support it

- Service forces developer to create class for handlers. This easily becomes a mess
  with 2-3+ heavy methods in 200+ lines of code and it is hard to use it
