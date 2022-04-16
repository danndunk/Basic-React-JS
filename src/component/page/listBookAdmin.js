import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import NavbarComponent from "../componentPage/narvbar/navbarComponent";
import ModalDeleteBook from "../componentPage/modals/deleteBook";

import { Container, Button } from "react-bootstrap";
import NoBook from "../Assets/nobook.png";

import { API } from "../config/api";

function ListBookAdmin() {
  const navigate = useNavigate();

  const [books, setBooks] = useState();
  const [message, setMessage] = useState();
  const [show, setShow] = useState(false);
  const [idDelete, setIdDelete] = useState(null);

  const getBooks = async () => {
    try {
      const response = await API.get("/books");

      setBooks(response.data.data);

      if (response.data.data.length === 0) {
        const message = (
          <div style={{ textAlign: "center", margin: "auto" }}>
            <h2>No Book in Book List</h2>
            <img
              src={NoBook}
              alt="Book"
              style={{ width: "300px", marginTop: "30px" }}
            />
          </div>
        );
        setMessage(message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  const handleDelete = (id) => {
    setShow(true);
    setIdDelete(id);
  };

  const handleEdit = (id) => {
    navigate("/edit-book/" + id);
  };

  return (
    <Container fluid>
      <NavbarComponent />
      <div style={styles.containerList}>
        {message}
        {books?.map((item, index) => (
          <div
            className="d-flex justify-content-between align-items-center mb-4"
            key={index}
          >
            <div>
              <img src={item.bookCover} alt="Book Cover" style={styles.image} />
              <p style={styles.title}>{item.title}</p>
            </div>
            <div>
              <Button
                variant="secondary"
                className="me-4"
                style={{ width: "80px" }}
                onClick={() => handleEdit(item.id)}
              >
                Edit
              </Button>
              <Button
                variant="danger"
                style={{ width: "80px" }}
                onClick={() => handleDelete(item.id)}
              >
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>
      <ModalDeleteBook show={show} setShow={setShow} idDelete={idDelete} />
    </Container>
  );
}

const styles = {
  containerList: {
    width: "70%",
    margin: "180px auto 130px auto",
  },
  list: {
    padding: "10px",
    backgroundColor: "#F2F2F2",
    borderRadius: "10px",
  },
  image: {
    maxWidth: "50px",
    marginRight: "15px",
  },
  title: {
    display: "inline",
    fontWeight: "bold",
    fontSize: "20px",
  },
};

export default ListBookAdmin;
