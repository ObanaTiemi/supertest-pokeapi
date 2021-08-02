const request = require('supertest')('https://pokeapi.co/api/v2');

describe('PokeAPI Tests', ()=>{
    it('get 200 pokemon', (done)=>{
        request.get('/pokemon/pikachu')
        .expect(200, done);
    });
    it('get 200 item',(done)=>{
        request.get('/item/1')
        .expect(200, done);
    });
    it('get 200 generation',(done)=>{
        request.get('/generation/1')
        .expect(200, done);
    });
});


