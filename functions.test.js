const axios = require('axios');

const functions = require('./functions')

// toBe is for primitive types
test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});

test('Adds 2 + 2 to not equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
});

// toEqual on objects/array
test('User should be K Zhang object', () => {
    expect(functions.createUser()).toEqual({
        firstName: 'K', 
        lastName: 'Zhang',
    });
});

test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 700;
    expect (load1 + load2).toBeLessThan(1600);
})

// regex
test('There is no I in team', () => {
    expect ('team').not.toMatch(/I/);
})

// Arrays
test('Admin should be in usernames', () => {
    usernames = ['john', 'karen', 'admin'];
    expect(usernames).toContain('admin');
})

// test('User fetched name shoule be Leanne Graham', () => {
//     expect.assertions(1);   //expect 1 call
//     return functions.fetchUsers()
//         .then(data => {
//             expect(data.name).toEqual('Leanne Graham');
//         })
// })

test('User fetched name shoule be Leanne Graham', async () => {
    expect.assertions(1);   //expect 1 call
    const data = await functions.fetchUsers();
    expect(data.name).toEqual('Leanne Graham');
})