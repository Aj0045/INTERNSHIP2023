import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function App() {
  return (
    <div className="App">
      <h1>Hello,Good Morning</h1>
    </div>
  );
}

function Cards(){
  return(
    <Row xs={1} md={1} className="g-9">
    {Array.from({ length: 3 }).map((_, idx) => (
      <Col key={idx}>
    <div>
      <CardGroup>
      <Card>
        <Card.Img variant="top" src="/home/ajay/Desktop/Documents/int2023/reactbspage/my.jpeg"/>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
      </Card>
      
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
      </Card>
      
      
    </CardGroup>
    </div>
    </Col>
      ))}
    </Row>
  );
}


export default App;
export { Cards };