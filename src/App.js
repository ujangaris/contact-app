import List from "./List"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

function App() {
  return (
    <div className="App">
      <h1 className="px-3 py-3">My Contact List</h1>

      <form className="px-3 py-4">
        <div className="form-group">
          <label htmlFor="">Name</label>
          <input type="text" className="form-control" name="name" />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="">No. Telp</label>
          <input type="text" className="form-control" name="telp" />
        </div>
        <div>
          <button type="submit" className="btn btn-primary w-100 mt-3">
            Save
          </button>
        </div>
      </form>

      <List />
    </div>
  )
}

export default App
