class AppUser {

    static _id;
    static _name;
    static _email;

    AppUser(id, name, email) {
        _id = id
        _name = name
        _email = email
    }

    fetch() {
        const user = {
                        id: _id,
                        name: _name,
                        email: _email
                     }
        return user
    }
}

export default AppUser