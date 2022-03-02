import { Button, Container, Form } from 'react-bootstrap';

export default function CardPost({ forms, onSubmitChange, onSubmitClick }) {
  return (
    <Container>
      <Form className="m-3">
        <Form.Group className="mb-3" controlId="Title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            name="title"
            type="text"
            placeholder="React Redux"
            value={forms.title}
            onChange={onSubmitChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            name="body"
            as="textarea"
            placeholder="React Redux is state management."
            rows={3}
            value={forms.body}
            onChange={onSubmitChange}
          />
        </Form.Group>
      </Form>
      <div className="d-flex flex-wrap justify-content-center">
        <Button variant="success" onClick={onSubmitClick}>
          Post
        </Button>
      </div>
    </Container>
  );
}
