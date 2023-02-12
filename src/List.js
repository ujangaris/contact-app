import React from "react"
// didalam list akan menerima data props yang berupa data
export default function List({ data }) {
  return (
    <div className="list-group">
      {/* menampilkan data dengan map */}
      {data.map((contact) => {
        return (
          <div className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{contact.name}</h5>
              <div>
                <button className="btn btn-sm btn-link">Edit</button>
                <button className="btn btn-sm btn-link">Del</button>
              </div>
            </div>
            <p className="mb-1">{contact.telp}</p>
          </div>
        )
      })}
    </div>
  )
}
