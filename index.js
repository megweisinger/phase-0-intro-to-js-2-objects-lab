// Write your solution in this file!
const employee = {
    name: "Meg",
    streetAddress: "12 Aste",
};
employee
function updateEmployeeWithKeyAndValue (employee, key, value){
    return {...employee,...{ [key]: value}}
};
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
function deleteFromEmployeeByKey (employee, key, value){
    const newObject = {...employee};
    delete newObject[key];
    return newObject;
}
function destructivelyDeleteFromEmployeeByKey (employee, key, value) {
    delete employee[key];
    return employee
}