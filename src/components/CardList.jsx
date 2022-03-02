import { Button, Card } from 'react-bootstrap';

export default function CardList({ id, title, body }) {
  return (
    <Card style={{ width: '18rem' }} className="m-3" key={id}>
      <Card.Body>
        <Card.Title className="text-center">{title}</Card.Title>
        <Card.Text>{body}</Card.Text>
        <div className="d-flex justify-content-center gap-3">
          <Button variant="warning">Edit</Button>
          <Button variant="danger">Delete</Button>
        </div>
      </Card.Body>
    </Card>
  );
}
