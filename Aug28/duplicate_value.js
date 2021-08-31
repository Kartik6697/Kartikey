//Task: Create function which return true/false if list has ducplicate values.

const list = [
    {
      guardianId: "67a33f9a-bce6-42e2-b147-0e2882babf1c",
      modeOfContactId: "986a8946-272a-4d4e-824b-cc8181286748",
      dateTimeOfContact: "",
    },
    {
      guardianId: "67a33f9a-bce6-42e2-b147-0e2882babf1c",
      modeOfContactId: "986a8946-272a-4d4e-824b-cc8181286748",
      dateTimeOfContact: "",
    },
    {
      guardianId: "67a33f9a-bce6-42e2-b147-0e2882babf1c",
      modeOfContactId: "986a8946-272a-4d4e-824b-cc8181286748",
      dateTimeOfContact: "",
    },
    {
      guardianId: "67a33f9a-bce6-42e2-b147-0e2882babf1c",
      modeOfContactId: "986a8946-272a-4d4e-824b-cc8181286748",
      dateTimeOfContact: "",
    },
  ];

let list2 = list.map((element) =>{
    return element.guardianId && element.modeOfContactId && element.dateTimeOfContact
});
let duplicete = list2.some((element, index)=>{
    return list2.indexOf(element) !== index
});
console.log(`list has duplicate value: ${duplicete}`);

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}
