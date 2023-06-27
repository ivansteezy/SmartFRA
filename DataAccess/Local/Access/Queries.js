const Queries = {
    GeneralServiceAccess: {
        GetAllGeneralServiceAccess: () => {
            const query = `SELECT residentName, providerName, serviceName, cellphone, accessTime, exitTime FROM ResidentServiceAccess sa JOIN Services s ON sa.servicesId = s.idServices JOIN Residents r on sa.residentid = r.idResidents;`;
            return query;
        }
    },

    GuestAccess: {
        GetAllGuestAccess: () => {
            const query = `SELECT name, telephone, accessTime, exitTime FROM guestaccess ga JOIN guests g ON ga.IdGuest = g.idGuest`;
            return query;
        }
    },

    Guests: {
        GetAllGuests: () => {
            const query = `SELECT * FROM Guests`
            return query;
        },

        GetGuestById: (id) => {
            const query = `SELECT * FROM Guests WHERE idGuest = ${id}`
            return query;
        },

        InsertGuest: (guest) => {
            const query = `INSERT INTO Guests(IdEvent, name, lastName, plates, telephone) VALUES('${guest.idEvent}', '${guest.name}', '${guest.lastName}', '${guest.plates}', '${guest.telephone}')`;
            return query;
        }
    },

    Houses: {
        GetAllHouses: () => {
            const query = `SELECT * FROM Houses`
            return query;
        },

        GetHouseByResident: (idResidents) => {
            const query = `SELECT h.idHouse, h.address, h.numberHouse FROM houses h, residents r WHERE r.idResidents = ${idResidents} AND r.idHouse = h.idHouse`
            return query;
            //h.idHouse, h.address, h.numberHouse, r.idResidents
        },

        GetHouseByHouseNumber: (numberHouse) => {
            const query = `SELECT * FROM Houses WHERE numberHouse = ${numberHouse}`;
            return query;
        },

        InsertHouse: (house) => {
            const query = `INSERT INTO Houses(address, numberHouse) VALUES('${house.address}', ${house.numberHouse})`;
            return query;
        },
    },

    ResidentAccess: {
        GetAllResidentAccess: () => {
            const query = `SELECT  r.residentName, a.acessTime, a.exitTime FROM residentAccess a, Residents r WHERE a.idResident = r.idResidents`;
            return query;
        }

    },

    ResidentEvents: {
        GetAllResidentEvents: () => {
            const query = `SELECT residentName, lastName, nameEvent, startTime, endTime, numberAccess, state FROM residentevents re JOIN residents r ON re.idResident = r.idResidents`;
            return query;
        }
    },

    Residents: {
        GetResidentById: (id) => {
            const query = `SELECT * FROM Residents WHERE idResidents = ${id}`
            return query;
        },
        GetResidentByNameLastNameMotherName: (name, lastName, motherLastName) => {
            const query = `SELECT * FROM Residents WHERE residentName = '${name}' AND lastName = '${lastName}' AND motherLastName = '${motherLastName}'`;
            return query;
        },
        InsertResident: (resident) => {
            const query = `INSERT INTO Residents(residentName, lastName, motherLastName, age, idHouse, plates, telephone, faceModel,email) ` +
                          `VALUES('${resident.residentName}', '${resident.lastName}', '${resident.motherLastName}', '${resident.age}', '${resident.idHouse}', '${resident.plates}', '${resident.telephone}', '${resident.faceModel}','${resident.email}')`;
            return query;
        },
        GetAllResidents: () => {
            const query = `SELECT * FROM Residents`;
            return query;
        },
        GetResidentByEmail: (email) => {
            const query = `SELECT * FROM Residents WHERE email = ${email}`
            return query;
        },
        GetResidentByHouse: (idHouse) => {
            const query = `SELECT * FROM Residents WHERE idHouse = ${idHouse}`
            return query;
        }
    },

    ResidentServiceAccess: {
        GetAllResidentServiceAccess: () => {
            const query = `SELECT residentName, providerName, serviceName, cellphone, accessTime, exitTime FROM residentserviceaccess sa JOIN Services s ON sa.servicesId = s.idServices JOIN Residents r on sa.residentid = r.idResidents`;
            return query;
        }
    },

    Services: {
        GetAllServices: () => {
            const query = `SELECT * FROM Services`;
            return query;
        },

        InsertService: (service) => {
            const query = `INSERT INTO Services(serviceName) VALUES('${service.serviceName}')`;
            return query;
        },

        DeleteService: (idService) => {
            const query = `DELETE FROM Services WHERE id = ${idService}`;
            return query;
        }
    }
}

module.exports = Queries;