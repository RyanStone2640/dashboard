import { useNavigate } from 'react-router-dom';

function Error() {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate('/');
  }, 3000);

  return (
    <div className="h-screen flex justify-center items-center" id="error-page">
      <div>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>will reload to home page 3 seconds.</p>
      </div>
    </div>
  );
}

export default Error;
