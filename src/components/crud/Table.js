import Table from 'react-bootstrap/Table';
import React, {Component, useRef} from "react";


const TableInput = ({data, editData, hapusData, bukti}) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>No</th>
          <th>Nama Pembeli</th>
          <th>Film</th>
          <th>Hari/Tanggal</th>
          <th>Jam Tayang</th>
          <th>Harga Film</th>
          <th>Jumlah Pesan</th>
          <th>Total Harga</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
      {data?.map((daftar, index) => {
            return (
        <tr key={index}>
          <td>{index + 1 }</td>
          <td>{daftar.namaPembeli}</td>
          <td>{daftar.film}</td>
          <td>{daftar.hariTanggal}</td>
          <td>{daftar.jamTayang}</td>
          <td>{daftar.hargaFilm}</td>
          <td>{daftar.jumlahPesanan}</td>
          <td>{daftar.totalHarga}</td>
          <td>
            <button className="btn btn-warning mr-1" onClick={() => editData(daftar.id)}>Edit</button>
            <button className="btn btn-danger mr-1" onClick={() => hapusData(daftar.id)}>Hapus</button>
            <button className="btn btn-danger mr-1" onClick={() => bukti()}>Bukti</button>
          </td>
        </tr>
            );
        })}
            
    </tbody>
    </Table>
  );
}

export default TableInput;