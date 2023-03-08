const axios = require('axios');

const baseUrl = 'http://localhost:8000';

describe('The router', () => {
  test('Get time route', async () => {
    const res = await axios.get(baseUrl + '/time', {
      headers: {
        'Authorization': 'mysecrettoken'
      }
    })

    expect(res).toBeTruthy()
    expect(res.status).toBe(200)
    expect(res.data.epoch).toBeGreaterThan(100000000)
  })

  test('Get metrics', async () => {
    const res = await axios.get(baseUrl + '/metrics', {
      headers: {
        'Authorization': 'mysecrettoken'
      }
    })

    expect(res).toBeTruthy()
    expect(res.status).toBe(200)
    expect(res.data).toBeDefined()
  })
})