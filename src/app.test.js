const request = require('supertest');
const { getHash, getHashTwo, readHello } = require('./index')
const routerApp = require('./app')

describe('prueba', () => {
  it('punto 1', async ()=> {
    const result = await request(routerApp)
      .get('/users')
      .expect('Content-Type', /json/)
      .expect(200)
    expect(result.body).toBeDefined();
  })

  it('punto 2', async () => {

    const result1 = await getHash();
    const result2 = await getHashTwo()
    expect(typeof result1).toBe(typeof result2);
   });

   it('punto 3', async () => {

    const result = await readHello();

    expect(result).toContain('hola')
   });
})

