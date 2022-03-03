import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editData } from '../redux/actions';
import { Button, Card } from 'react-bootstrap';
import ModalEdit from './ModalEdit';

export default function CardList({ userId, id, title, body, onDeleteClick }) {
  const dispatch = useDispatch();
  const [modalShow, setModalShow] = useState(false);
  const [forms, setForms] = useState({
    id,
    title,
    body,
    userId,
  });

  const toggle = () => {
    setModalShow(false);
  };

  const onEditChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForms({ ...forms, [name]: value });
  };

  const onEditSubmit = () => {
    if (forms.title === '' || forms.body === '') {
      return alert('Please fill the forms!');
    }
    dispatch(editData({ id: id, body: forms }));
    toggle();
  };

  return (
    <div>
      <Card style={{ width: '18rem' }} className="m-3">
        <Card.Body>
          <Card.Title className="text-center">{title}</Card.Title>
          <Card.Text>{body}</Card.Text>
          <div className="d-flex justify-content-center gap-3">
            <Button variant="warning" onClick={() => setModalShow(true)}>
              Edit
            </Button>
            <Button id={id} variant="danger" onClick={onDeleteClick}>
              Delete
            </Button>
          </div>
        </Card.Body>
      </Card>
      <ModalEdit
        id={forms.id}
        title={forms.title}
        body={forms.body}
        show={modalShow}
        onHide={() => setModalShow(false)}
        onEditChange={onEditChange}
        onEditSubmit={onEditSubmit}
      />
    </div>
  );
}
