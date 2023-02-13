import React from "react"
// didalam list akan menerima data props yang berupa data
// panggil event handler yang kita buat pada button edit dan delete
export default function List({ data, handleEdit, handleDelete }) {
  return (
    <div className="list-group">
      {/* menampilkan data dengan map */}
      {data.map((contact) => {
        return (
          <div className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{contact.name}</h5>
              <div>
                {/* pasang event handler */}
                <button
                  onClick={() => handleEdit(contact.id)}
                  className="btn btn-sm btn-link"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(contact.id)}
                  className="btn btn-sm btn-link"
                >
                  Del
                </button>
              </div>
            </div>
            <p className="mb-1">{contact.telp}</p>
          </div>
        )
      })}
    </div>
  )
}
