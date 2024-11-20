import * as jsonfile from "jsonfile";

class Contact {
  id?: number = undefined;
  name: string = "";
}

class ContactsCollection {
  data: Contact[] = [];
  load() {
    // usar la version Async (readFile)
    const promesa = jsonfile.readFile(__dirname + "/contacts.json");
    promesa
      .then((json) => {
        this.data = json;
      })
      .catch((error) => {
        console.log("Error en la lectura de los datos");
      });
    return promesa;
  }
  getAll() {
    return this.data;
  }
  addOne(contact: Contact) {
    this.data.push(contact);
  }
  save() {
    // usar la version Async (writeFIle)
    const promesa = jsonfile.writeFile(__dirname + "/contacts.json", this.data);
    promesa
      .then((json) => {
        console.log("Se han guardado los datos correctamente");
      })
      .catch((error) => {
        console.log("Error en el guardado de datos", error);
      });
  }
  getOneById(id) {
    const encontrado = this.data.find((contacto) => {
      if (contacto?.id == id) {
        return true;
      }
    });

    return encontrado;
  }
}
export { ContactsCollection, Contact };
