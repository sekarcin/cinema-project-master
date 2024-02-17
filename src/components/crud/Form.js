import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const Formulir = ({
  namaPembeli,
  film,
  hariTanggal,
  jamTayang,
  hargaFilm,
  jumlahPesan,
  totalHarga,
  handleChange,
  handleSubmit,
  // notifySuccess,
  id,
}) => {
  const [submitSuccess, setSubmitSuccess] = React.useState(false);

  const handleFormSubmit = (event) => {
    handleSubmit(event);
    setSubmitSuccess(true);
  };
  console.log("namaPembeli", namaPembeli);
  return (
    <div className="mt-5">
      <h4>{id ? "Edit Data" : "Tambah Data"}</h4>
      <hr />
      <Form onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3" controlId="namaPembeli">
          <Form.Label>Nama Pembeli</Form.Label>
          <Form.Control
            type="Text"
            placeholder="Masukan Nama"
            name="namaPembeli"
            value={namaPembeli}
            onChange={(event) => handleChange(event)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="film">
          <Form.Label>Nama Film</Form.Label>
          <Form.Control
            type="Text"
            placeholder="Masukan Nama Film"
            name="film"
            value={film}
            onChange={(event) => handleChange(event)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="hariTanggal">
          <Form.Label>Hari/Tanggal</Form.Label>
          <Form.Control
            type="date"
            name="hariTanggal"
            value={hariTanggal}
            onChange={(event) => handleChange(event)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="jamTayang">
          <Form.Label>Jam Tayang</Form.Label>
          <Form.Control
            type="time"
            name="jamTayang"
            value={jamTayang}
            onChange={(event) => handleChange(event)}
          />
        </Form.Group>

        <InputGroup className="mb-3" controlId="hargaFilm">
          <InputGroup.Text>Rp</InputGroup.Text>
          <Form.Control
            name="hargaFilm"
            value={hargaFilm}
            onChange={(event) => handleChange(event)}
          />
          <InputGroup.Text>,00</InputGroup.Text>
        </InputGroup>

        <Form.Group className="mb-3" controlId="jumlahPesan">
          <Form.Label>Jumlah Pesan</Form.Label>
          <Form.Control
            type="number"
            placeholder="Masukan Jumlah"
            name="jumlahPesan"
            value={jumlahPesan}
            onChange={(event) => handleChange(event)}
          />
        </Form.Group>

        <InputGroup className="mb-3" controlId="totalHarga">
          <InputGroup.Text>Rp</InputGroup.Text>
          <Form.Control
            name="totalHarga"
            value={totalHarga}
            onChange={(event) => handleChange(event)}
          />
          <InputGroup.Text>,00</InputGroup.Text>
        </InputGroup>

        <Button variant="primary" type="submit">
          Submit
        </Button>
        {/* Notifikasi berhasil */}
        {submitSuccess && (
          <div className="alert alert-success mt-3" role="alert">
            Submit berhasil! Tiket Bioskop Atas Nama {namaPembeli} Telah Berhasil Diinput, Silahkan Cetak Tiket.
          </div>
        )}
      </Form>
    </div>
  );
};

export default Formulir;
