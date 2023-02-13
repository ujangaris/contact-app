import List from "./List"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { uid } from "uid"
import { useState } from "react"

function App() {
  // buat state untuk menyimpan data contact
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "John Doe",
      telp: "08815646413",
    },
    {
      id: 2,
      name: "Alex Pick",
      telp: "08815646413",
    },
  ])
  // buat dulu state untuk menyimpan data form
  const [formData, setFormData] = useState({
    name: "",
    telp: "",
  })
  // buat function ketika ada perubahan pada form
  function handleChange(e) {
    // clone data formnya
    let data = { ...formData }
    // ini seperti data['name'] = 'yang kita isi pada inputan'
    data[e.target.name] = e.target.value
    // update ke statenya
    setFormData(data)
  }

  // ketika submit data dipush kedalam view
  function handleSubmit(e) {
    e.preventDefault()
    alert("Data berhasil dibuat")
    // validasi
    if (formData.name === "") {
      return false
    }
    if (formData.telp === "") {
      return false
    }
    // menambahkan contact
    //copy data yang ada dicontact
    let data = [...contacts]
    // lakukan penambahan data
    data.push({ id: uid(), name: formData.name, telp: formData.telp })
    // simpan perubahan
    setContacts(data)
  }
  return (
    <div className="App">
      <h1 className="px-3 py-3">My Contact List</h1>
      {/* pasang handleSubmit */}
      <form onSubmit={handleSubmit} className="px-3 py-4">
        <div className="form-group">
          <label htmlFor="">Name</label>
          {/* sambungin data state form kedalam input form */}
          {/* memasang event onChange */}
          <input
            type="text"
            className="form-control"
            onChange={handleChange}
            value={formData.name}
            name="name"
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="">No. Telp</label>
          <input
            type="number"
            className="form-control"
            onChange={handleChange}
            value={formData.telp}
            name="telp"
          />
        </div>
        <div>
          <button type="submit" className="btn btn-primary w-100 mt-3">
            Save
          </button>
        </div>
      </form>
      {/* oper data props kedalam list  */}
      <List data={contacts} />
    </div>
  )
}

export default App
