// FloatingPencilIcon.js
import React, { useEffect } from "react";
import { useState } from "react";
import "../Assets/css/floating.css"; // CSS for styling
import { Modal } from "react-bootstrap";
import axiosInstance from "../utils/axios";

const FloatingPencilIcon = ({ children, id, existing, content_type }) => {
  const [showModal, setShowModal] = useState(false);
  const [dataset, setDataset] = useState(null);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const handleFileChange = (e) => {
    setDataset(e.target.files[0]);
  };
  const updateContent = async (e) => {
    // console.log(dataset);
    e.preventDefault();
    if (content_type === "txt") {
      await axiosInstance.post(
        "/api/content/content",
        { id: id + 1, display_content: dataset, content_type },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      window.location.reload();
    } else {
      const formdata = new FormData();
      formdata.append("id", id + 1);
      formdata.append("file", dataset);
      formdata.append("content_type", content_type);
      await axiosInstance.post("/api/content/content", formdata, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        "Content-Type": "multipart/form-data",
      });
      window.location.reload();
    }
  };

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div className="floating-pencil-icon " style={{ zIndex: "0" }}>
      {children}
      <div
        className={`pencil-icon ${
          localStorage.getItem("token") ? "d-block" : "d-none"
        }`}
        onClick={handleShow}
      >
        <svg
          svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path d="M14.84 5.74l3.41 3.41L8.41 19.15l-3.41-3.41zM4.58 15.49l1.41 1.41-2.44.61.62-2.44zM18.17 7.16l-9 9L7 16l9-9-3.42-3.41-9 9L4 20l4-1 1 1 5.83-5.83-1-1 2.17-2.17 1.41 1.41L8.58 17l1.84-1.84 1.17 1.17L6 19l2-.5L18.5 8l-2.33-2.34 1.41-1.41z" />
        </svg>
      </div>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal {id}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={updateContent}>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Existing
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                value={existing}
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                This is currently shown.
              </div>
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Update with
              </label>
              {content_type === "img" ? (
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="form-control"
                  id="exampleInputPassword1"
                />
              ) : (
                <input
                  type="text"
                  value={dataset}
                  onChange={(e) => setDataset(e.target.value)}
                  className="form-control"
                  id="exampleInputPassword1"
                />
              )}
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default FloatingPencilIcon;
