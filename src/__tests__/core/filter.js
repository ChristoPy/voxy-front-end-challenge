const filter = require('../../core/filter')

describe('Filter', () => {
  test('It should not filter by a non existent key', async () => {
    const items = [
      {
        email: 'bob@jenkins.com',
        firstName: 'Bob',
        lastName: 'Jenkins',
        group: 'Primary',
        phone: '+55 (11) 4002-8922',
        studiedHours: 260,
      }
    ]
    const filteredItems = filter(items, 'abc', 'bob')

    expect(filteredItems.length).toBe(0)
  })

  test('It should filter by the received key', async () => {
    const items = [
      {
        email: 'bob@jenkins.com',
        firstName: 'Bob',
        lastName: 'Jenkins',
        group: 'Primary',
        phone: '+55 (11) 4002-8922',
        studiedHours: 260,
      }
    ]
    const filteredItems = filter(items, 'firstName', 'bob')

    expect(filteredItems.length).toBe(1)
  })

  test('It should filter by key received regardless of the value case', async () => {
    const items = [
      {
        email: 'bob@jenkins.com',
        firstName: 'Bob',
        lastName: 'Jenkins',
        group: 'Primary',
        phone: '+55 (11) 4002-8922',
        studiedHours: 260,
      },
      {
        email: 'notbob@jenkins.com',
        firstName: 'bob',
        lastName: 'Jenkins',
        group: 'Primary',
        phone: '+55 (11) 4002-8922',
        studiedHours: 260,
      }
    ]
    const filteredItems = filter(items, 'firstName', 'bob')

    expect(filteredItems.length).toBe(2)
  })
})
