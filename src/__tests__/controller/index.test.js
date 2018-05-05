import request from 'supertest'
import app from '../../app'

describe('Tests the root path', () => {
    test('Should respond with 200 for a GET request', () => {
        return request(app).get('/').then(response => {
            expect(response.status).toBe(200)
        });
    })
})