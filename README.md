# CRUD - Contact App

## Desain aplikasi dengan bootstrap

    Todo :
        1. install react-bootstrap
            npm install react-bootstrap bootstrap
        2.  pasang react-bootstrap pada App.js
            import "bootstrap/dist/css/bootstrap.min.css"
        3.  App.css

## State untuk menampilkan dan mengoper data dengan props

    Todo :
        1.  App.js
            - buat state untuk menyimpan data contact
            - oper data props kedalam list
        2.  List.js
            - didalam list akan menerima data props yang berupa data
            - menampilkan data dengan map

## Menambahkan Data (Create Data)

    Todo :
        1.  List.js
            - pasang event handler pada button edit & delete
            - panggil event handler yang kita buat pada button edit dan delete
        2.  install uid
            - npm isntall uid
        3.  App.js
            - buat dulu state untuk menyimpan data form
            - sambungin data state form kedalam input form
            - buat function ketika ada perubahan pada form
            - memasang event onChange
            - menambahkan contact
            - validasi
            - import uid
        3.  pengujian pada browser:
            - coba lakukan penambahan data,jika setup yang kita lakukan berhasil akan ada data yang tampil ketika data di create
