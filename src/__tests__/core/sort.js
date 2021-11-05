const { highest, alphabetically } = require('../../core/sort')

describe('Sort', () => {
  test('It should sort from highest number', async () => {
    const items = [
      {
        email: 'notbob@jenkins.com',
        firstName: 'bob',
        lastName: 'Jenkins',
        group: 'Primary',
        phone: '+55 (11) 4002-8922',
        studiedHours: 189,
      },
      {
        email: 'bob@jenkins.com',
        firstName: 'Bob',
        lastName: 'Jenkins',
        group: 'Primary',
        phone: '+55 (11) 4002-8922',
        studiedHours: 260,
      }
    ]
    const sortedItems = highest(items, 'studiedHours')

    expect(sortedItems.length).toBe(2)
    expect(sortedItems[0].studiedHours).toBe(260)
    expect(sortedItems[1].studiedHours).toBe(189)
  })

  test('It should sort alphabetically', async () => {
    const items = [
      {
        email: 'zyan@zyan.io',
        firstName: 'Zyan',
        lastName: 'Pilgrin',
        group: 'Secondary',
        phone: '+55 (11) 4002-8922',
        studiedHours: 189,
      },
      {
        email: 'bob@jenkins.com',
        firstName: 'Bob',
        lastName: 'Jenkins',
        group: 'Primary',
        phone: '+55 (11) 4002-8922',
        studiedHours: 260,
      },
    ]
    const sortedItems = alphabetically(items, 'firstName')

    expect(sortedItems.length).toBe(2)
    expect(sortedItems[0].firstName).toBe('Bob')
    expect(sortedItems[1].firstName).toBe('Zyan')
  })
})
