const http = require('http');
const mongoose = require('mongoose');

let Todo = require('./todo.model');
mongoose.connect('mongodb://127.0.0.1:27017/backend', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
});

http.createServer((request, response) => {
  let body = [];
  request.on('error', (err) => {
    console.error(err);
    response.statusCode = 400;
    response.end();
  }).on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body).toString();
    console.log(body);

    if (request.method === 'POST' && request.url === '/add') {
      let todo = new Todo(JSON.parse(body));
      todo.save()
          .then(todo => {
              response.statusCode = 200;
              response.end('todo added successfully');
          })
          .catch(err => {
            response.statusCode = 400;
            response.end('unable to add');
          });
    } else if (request.method === 'GET' && request.url === '/') {
      Todo.find(function(err, todos) {
          if (err) {
            response.statusCode = 400;
            response.end('error finding');
          } else {
            response.statusCode = 200;
            response.setHeader('Content-Type', 'application/json');
            response.end(JSON.stringify(todos));
          }
      });
    } else if (request.method === 'GET' && /^\/[a-z0-9]{24}$/.test(request.url)) {
      let id = request.url.match(/[a-z0-9]{24}$/)[0];
      Todo.findById(id, function(err, todo) {
        if (err) {
          response.statusCode = 400;
          response.end('error finding');
        } else {
          response.statusCode = 200;
          response.setHeader('Content-Type', 'application/json');
          response.end(JSON.stringify(todo));
        }
      })
    } else if (request.method === 'PUT' && /^\/update\/[a-z0-9]{24}$/.test(request.url)) {
      let id = request.url.match(/^\/update\/([a-z0-9]{24})$/)[1];
      Todo.findById(id, function(err, todo) {
        if (!todo) {
          response.statusCode = 404;
          response.end("data is not found");
        } else {
          let req = JSON.parse(body);
          todo.todo_description = req.todo_description;
          todo.todo_responsible = req.todo_responsible;
          todo.todo_priority = req.todo_priority;
          todo.todo_completed = req.todo_completed;

          todo.save().then(todo => {
            response.statusCode = 200;
            response.end('Todo updated!');
          })
          .catch(err => {
            response.statusCode = 400;
            response.end('Update not possible');
          });
        }
      });
    } else {
      response.statusCode = 404;
      response.end();
    }
    // At this point, we have the headers, method, url and body, and can now
    // do whatever we need to in order to respond to this request.
  });

  response.on('error', (err) => {
    console.error(err);
  });

}).listen(8080);
