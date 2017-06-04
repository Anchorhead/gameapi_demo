# gameapi_demo

A simple REST API for accessing information on video games, developers, and publishers

Can submit data via POST requests to /games, /developers, or /publishers respectively.

Mongoose Schemas for games, developers, and publishers are defined in datamodels.js

Endpoints are contained in app.js, all GET endpoints return JSON representation of the data.

Endpoints supported currently:
(id currently refers to default id field added by MongoDB)

GET:
  /games, /games/:id, /games/:id/developer, /games/:id/publisher, /games:id/release_year, /games:id/genre
  /developers, /developers/:id, /developers/:id/location_country
  /publishers, /publishers/:id, /publishers/:id/location_country
  
POST:
  /games, /developers, /publishers
