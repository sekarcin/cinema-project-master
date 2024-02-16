import React from 'react';

const Bukti = ({ data }) => {
  return (
    <div className="container">
      <h1>Tiket Bioskop</h1>
      <div className="row">
        <div className="col-md-6">
          <p>
            <strong>Nama Pembeli:</strong> {data.namaPembeli}
          </p>
          <p>
            <strong>Film:</strong> {data.film}
          </p>
          <p>
            <strong>Hari & Tanggal:</strong> {data.hariTanggal}
          </p>
          <p>
            <strong>Jam Tayang:</strong> {data.jamTayang}
          </p>
        </div>
        <div className="col-md-6">
          <p>
            <strong>Harga Film:</strong> Rp{data.hargaFilm}
          </p>
          <p>
            <strong>Jumlah Pesan:</strong> {data.jumlahPesan}
          </p>
          <p>
            <strong>Total Harga:</strong> Rp{data.totalHarga}
          </p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Bukti;
