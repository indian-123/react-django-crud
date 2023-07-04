import axios from "axios";

export  function getpatient() {
  return axios.get('http://indiandeveloper321.pythonanywhere.com/patient/')
  .then(res => {
    return res.data
  })}

export  function addpatient(patient) {
return axios.post('http://indiandeveloper321.pythonanywhere.com/patient/',
{
    patient_id: null,
    first_name: patient.first_name.value,
    last_name: patient.last_name.value,
    blood: patient.blood.value,
})
.then(res => {
    return res.data
})}

export  function editpatient(id, patient) {
    return axios.put('http://indiandeveloper321.pythonanywhere.com/patient/'+id+'/',
    {
        first_name: patient.first_name.value,
        last_name: patient.last_name.value,
        blood: patient.blood.value,
    })
    .then(res => {
        return res.data
    })}

export  function deletepatient(id) {
    return axios.delete('http://indiandeveloper321.pythonanywhere.com/patient/'+id+'/')
    .then(res => {
        return res.data
    })}