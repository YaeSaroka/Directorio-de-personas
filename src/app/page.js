"use client";
import React, { useEffect, useState } from 'react';
import { Navbar, NavbarContent, NavbarItem, Button } from '@nextui-org/react';
import styles from './styles/page.module.css';
import BUTON from './componente/button/index.jsx';
import Personas from './Personas.js'; 
import { Modal } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  const direcciones = ['Estadisticas', 'Contacto'];
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    // Si Personas es un archivo local con datos, importa los datos directamente
    setUsers(Personas.results);
  }, []);

  /*FUNCIONES PARA EL MODAL*/
  const openModal = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <main className={styles.main}>
      <Navbar isBordered isBlurred={false} className={styles.stickyNavbar}>
        <NavbarContent className={styles.navContent} justify="center">
          {direcciones.map((direccion, index) => (
            <NavbarItem key={index} className={styles.navbarItem}>
              <BUTON direccion={direccion} />
            </NavbarItem>
          ))}
        </NavbarContent>
      </Navbar>
      <div>
        <h1>Listado:</h1>
        {Personas.map((user, index) => (
          <div key={index} className={styles.user}>
            <h1>{user.nombre}</h1>
            <h1>{user.apellido}</h1>
            <Button className={styles.userButton} onClick={() => openModal(user)}>Click</Button>
          </div>
        ))}
        {selectedUser && (
          <Modal show={showModal} onHide={closeModal}>
            <Modal.Header className={styles.modalHeader} closeButton>
              <Modal.Title className={styles.modalTitle}>Más información</Modal.Title>
            </Modal.Header>
            <Modal.Body className={styles.modalBody}>
              <h1>{selectedUser.nombre}</h1>
              <h5>{selectedUser.apellido}</h5>
              <p>{selectedUser.email}</p>
              <p>{selectedUser.edad}</p>
            </Modal.Body>
            <Modal.Footer className={styles.modalFooter}>
              <Button variant="secondary" onClick={closeModal}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </div>
    </main>
  );
}
