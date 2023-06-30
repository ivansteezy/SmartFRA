const Queries = {
    GeneralServiceAccess: {
        GetAllGeneralServiceAccess: () => {
            const query = `SELECT residentName, providerName, serviceName, cellphone, accessTime, exitTime FROM ResidentServiceAccess sa JOIN Services s ON sa.servicesId = s.idServices JOIN Residents r on sa.residentid = r.idResidents;`;
            return query;
        },
        InsertGeneralServiceAccess: (generalserviceaccess) => {
            const query = `INSERT INTO generalserviceaccess(accessTime, exitTime, providerName, companyName, cellPhone, cicNumber, conceptName) ` +
                          `VALUES('${generalserviceaccess.accessTime}', '${generalserviceaccess.exitTime}', '${generalserviceaccess.providerName}', '${generalserviceaccess.companyName}', '${generalserviceaccess.cellPhone}', '${generalserviceaccess.cicNumber}', '${generalserviceaccess.conceptName}')`;
            return query;
        },
    },

    GuestAccess: {
        GetAllGuestAccess: () => {
            const query = `SELECT name, telephone, accessTime, exitTime FROM guestaccess ga JOIN guests g ON ga.IdGuest = g.idGuest`;
            return query;
        },
        InsertGuestAccess: (guestaccess) => {
            const query = `INSERT INTO guestaccess(idGuest, accessTime, exitTime) ` +
                          `VALUES('${guestaccess.idGuest}', '${guestaccess.accessTime}', '${guestaccess.exitTime}')`;
            return query;
        },
        UpdateExitTime: (exitTime, idGuest) => {
            const query = `UPDATE guestaccess SET exitTime = ${exitTime} WHERE idGuest = '${idGuest}'`;
            return query;
        },
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
        },

        GetAllVisits: () => {
            const query = `SELECT * from guests g, residents r, guestaccess a, residentevents e WHERE e.IdResident = r.idResidents AND e.idEvent = g.IdEvent AND a.IdGuest = g.idGuest`
            return query;
        },
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

        GetHouseIDByResidentEmail: (email) => {
            const query = `SELECT idHouse from residents WHERE email = ${email}`
            return query;
            //h.idHouse, h.address, h.numberHouse, r.idResidents
        },
    },

    ResidentAccess: {
        GetAllResidentAccess: () => {
            const query = `SELECT  r.residentName, a.acessTime, a.exitTime FROM residentAccess a, Residents r WHERE a.idResident = r.idResidents`;
            return query;
        },
        InsertResidentAccess: (residentaccess) => {
            const query = `INSERT INTO residentaccess(IdResident, acessTime, exitTime) ` +
                          `VALUES('${residentaccess.IdResident}', '${residentaccess.acessTime}', '${residentaccess.exitTime}')`;
            return query;
        },

    },

    ResidentEvents: {
        GetAllResidentEvents: () => {
            const query = `SELECT residentName, lastName, nameEvent, startTime, endTime, numberAccess, state FROM residentevents re JOIN residents r ON re.idResident = r.idResidents`;
            return query;
        },
        InsertResidentEvent: (residentevents) => {
            const query = `INSERT INTO residentevents(IdResident, nameEvent, startTime, endTime, state, numberAccess) ` +
                          `VALUES('${residentevents.IdResident}', '${residentevents.nameEvent}', '${residentevents.startTime}', '${residentevents.endTime}', '${residentevents.state}', '${residentevents.numberAccess}')`;
            return query;
        },
        UpdateState: (state, idEvent) => {
            const query = `UPDATE residentevents SET state = ${state} WHERE idEvent = '${idEvent}'`;
            return query;
        },
        GetEventByResidentId: (IdResident) => {
            const query = `SELECT r.idResidents, r.residentName, r.lastName, r.motherLastName, e.idEvent, e.nameEvent, e.startTime, e.endTime, e.state, e.numberAccess 
            FROM residents r, residentevents e WHERE r.idResidents = e.IdResident AND r.idResidents = ${IdResident} `;
            return query;
        },
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
            const query = `INSERT INTO Residents(residentName, lastName, motherLastName, age, idHouse, plates, telephone, faceModel) ` +
                          `VALUES('${resident.residentName}', '${resident.lastName}', '${resident.motherLastName}', '${resident.age}', '${resident.idHouse}', '${resident.plates}', '${resident.telephone}', '${resident.faceModel}')`;
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
        },
    },

    ResidentServiceAccess: {
        GetAllResidentServiceAccess: () => {
            const query = `SELECT residentName, providerName, serviceName, cellphone, accessTime, exitTime FROM residentserviceaccess sa JOIN Services s ON sa.servicesId = s.idServices JOIN Residents r on sa.residentid = r.idResidents`;
            return query;
        },
        InsertResidentServiceAccess: (residentserviceaccess) => {
            const query = `INSERT INTO residentserviceaccess(ResidentId, accessTime, exitTime, providerName, cellPhone, cicNumber) 
                           VALUES('${residentserviceaccess.ResidentId}', '${residentserviceaccess.accessTime}', '${residentserviceaccess.exitTime}', '${residentserviceaccess.providerName}', '${residentserviceaccess.cellPhone}', '${residentserviceaccess.cicNumber}')`;
            return query;
        },
        UpdateExitTime: (exitTime, ResidentId) => {
            const query = `UPDATE residentserviceaccess SET exitTime = ${exitTime} WHERE ResidentId = '${ResidentId}'`;
            return query;
        },
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
        },
        GetAllServicesWAccess: () => {
            const query = `SELECT * FROM services s, residentserviceaccess r WHERE r.ServicesId = s.idServices `;
            return query;
        },
    }
}

module.exports = Queries;