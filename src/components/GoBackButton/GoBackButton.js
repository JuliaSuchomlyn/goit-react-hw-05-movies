import { BsArrowLeftShort } from 'react-icons/bs';
import { Button } from './GoBackButton.styled';

const GoBackButton = ({ backLinkHref }) => {
  return (
    <div className='container__element'>
      <Button to={backLinkHref}>
        <BsArrowLeftShort size={20} />
        Go back
      </Button>
    </div>
  );
};

export default GoBackButton;