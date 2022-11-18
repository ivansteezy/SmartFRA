class ResidentModel {
    constructor(idResidents, resisdentName, lastName, motherLastName, age, plates, telephone, faceModel) {
        this.idResidents = idResidents;
        this.residentName = resisdentName;
        this.lastName = lastName;
        this.motherLastName = motherLastName;
        this.age = age;
        this.plates = plates;
        this.telephone = telephone;
        this.faceModel = faceModel;
    }
}

module.exports = ResidentModel;