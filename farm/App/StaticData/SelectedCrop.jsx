class SelectedCrop {

    static __name;

    SelectedCrop(name) {
        __name = name
    }

    fetch() {
        const crop = {
                        name: __name,
                     }
                     
        return crop
    }
}

export default SelectedCrop