import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component, useRef } from "react";
import {useReactToPrint} from 'react-to-print';
// import React, { useState } from 'react';
import TableInput from "./Table";
import Formulir from "./Form";
import Bukti from "./invoice";

export default class index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      namaPembeli: "",
      hariTanggal: "",
      film: "",
      jamTayang: "",
      hargaFilm: "",
      jumlahPesan: "",
      totalHarga: "",
      id: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleCalculateTotal = () => {
    const totalHarga = this.state.jumlahPesan * this.state.hargaFilm;
    this.setState({
      data : [
        ...this.setState.data,
        {
          totalHarga : this.state.totalHarga,
        },
      ],
      totalHarga,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    
    if (this.state.id === "") {
      this.setState({
        data: [
          ...this.state.data,
          {
            id: this.state.data.length + 1,
            namaPembeli: this.state.namaPembeli,
            film: this.state.film,
            hariTanggal: this.state.hariTanggal,
            jamTayang: this.state.jamTayang,
            hargaFilm: this.state.hargaFilm,
            jumlahPesan: this.state.jumlahPesan,
            totalHarga: this.state.totalHarga,
          },
        ],
      });
    } else {
      const filmSelainDipilih = this.state.data
        .filter((daftar) => daftar.id !== this.state.id)
        .map((filterDaftar) => {
          return filterDaftar;
        });
      this.setState({
        data: [
          ...filmSelainDipilih,
          {
            id: this.state.data.length + 1,
            namaPembeli: this.state.namaPembeli,
            hariTanggal: this.state.hariTanggal,
            film: this.state.film,
            jamTayang: this.state.jamTayang,
            hargaFilm: this.state.hargaFilm,
            jumlahPesan: this.state.jumlahPesan,
            totalHarga: this.state.totalHarga,
          },
        ],
      });
    }

    this.setState({
      namaPembeli: "",
      hariTanggal: "",
      film: "",
      jamTayang: "",
      hargaFilm: "",
      jumlahPesan: "",
      totalHarga: "",
      id: "",
    });
  };

  editData = (id) => {
    // console.log("10: ", id);
    const filmYangDipilih = this.state.data
      .filter((daftar) => daftar.id === id)
      .map((filterDaftar) => {
        return filterDaftar;
      });
    this.setState({
      namaPembeli: filmYangDipilih[0].namaPembeli,
      film: filmYangDipilih[0].film,
      hariTanggal: filmYangDipilih[0].hariTanggal,
      jamTayang: filmYangDipilih[0].jamTayang,
      hargaFilm: filmYangDipilih[0].hargaFilm,
      jumlahPesan: filmYangDipilih[0].jumlahPesan,
      totalHarga: filmYangDipilih[0].totalHarga,
      id: filmYangDipilih[0].id,
    });
  };

  hapusData = (id) => {
    // console.log("10: ", id);
    const filmBaru = this.state.data
      .filter((daftar) => daftar.id !== id)
      .map((filterDaftar) => {
        return filterDaftar;
      });
    this.setState({
      data: filmBaru,
    });
  };

  render() {
    return (
      <div>
        {/* <h2>haii</h2> */}
        <div className="container mt-4">
          <h4>Data Pemesanan</h4>
          <div className="container mt-4">
          <TableInput
            data={this.state.data}
            editData={this.editData}
            hapusData={this.hapusData}
            
          />
          </div>
          <hr />
        </div>
        
        <div className="container mt-4">
          <Formulir
            {...this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
        <Bukti/>
      </div>
    );
  }
}


