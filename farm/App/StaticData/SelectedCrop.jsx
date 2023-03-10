class SelectedCrop {

    static _name;

    SelectedCrop(name) {
        _name = name
    }

    fetch() {
        const crop = {
                        name: _name,
                     }
                     
        return crop
    }
}

export default SelectedCrop