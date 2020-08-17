const request = require('supertest');
const server = "https://jsonplaceholder.typicode.com";

describe('GET /users', () => {

  it('responds with code 200', (done) => {
    request(server)
      .get('/users')
      .set('Accept', 'application/json')
      .expect(200, done)
  });

  it('responds with json', (done) => {
    request(server)
      .get('/users')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/, done)
  });


  it('responds body lenght is 10', (done) => {
    request(server)
      .get('/users')
      .set('Accept', 'application/json')
      .end((err, response) => {
        if(err){
          return done(err);
        }
        else if(response.body.length != 10){
          return done('Response body should have 10 users');
        }
        done();
      })
  });
});