import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';

const Welcome = function () {
  return (
    <div className='bg-body-secondary pt-2 pb-3'>
      <Container>
        <Alert variant={'success'} className='my-0 mx-auto'>
          Ciao Gianluca, bentornato!!
        </Alert>

        <h1 className='mt-2'>EpiBooks</h1>
      </Container>
    </div>
  );
};

export default Welcome;
