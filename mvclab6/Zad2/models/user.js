class User {
    constructor(id, login, borrowedBooks = []) {
        this.id = id;
        this.login = login;
        this.borrowedBooks = borrowedBooks;
    }

    static getAll() {
        const users = [
            new User(1, 'user1', [1, 2]),
            new User(2, 'user2', [3]),
            new User(3, 'user3'),
            new User(4, 'user4', [4, 5]),
            new User(5, 'user5', [1, 3, 5])
        ];
        return users;
    }
}

module.exports = User;
