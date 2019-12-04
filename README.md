# Comcard backend test

# Thoughts

- Nest.js has a lot of magick (as all of the frameworks).
  Generally, I don't like frameworks, as they create boundaries for development.
  They work well on TODOMVC applications, but any semi-rare custom logic requires
  a lot more effort to create, because framework just doesn't support it

- Service forces developer to create class for handlers. This easily becomes a mess
  with 2-3+ heavy methods in 200+ lines of code and it is hard to use it
