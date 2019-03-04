const functions = require('./functions');

test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});

test('Adds 2 + 2 is not to equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
});

test('Should be falsy', () => {
    expect(functions.checkValue(0)).toBeFalsy();
});

test('User should be Amir Salah', () => {
    expect(functions.createUser()).toEqual({
        firstName: 'Amir',
        lastName: 'Salah'
    });
});

test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThan(1600);
});


//Regex
test('There is no I in team', () => {
    expect('team').not.toMatch(/I/ig);
});

test('Admin shpuld be in usernames', () => {
    usernames = ['Amir', 'Ali', 'Admin'];
    expect(usernames).toContain('Admin');
});

//With async data

// Promise
test('User fetched name should be Leanne Graham', () => {
    expect.assertions(1);
    return functions.fetchUser().then(data => {
        expect(data.name).toEqual('Leanne Graham');
    });
});