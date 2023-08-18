import { ContItemEl, ContactBtn } from './PhoneBook.styled';

export const ContactItem = ({ name, number, id, deleted }) => {
  return (
    <ContItemEl>
      {name}: {number}
      <ContactBtn
        onClick={e => deleted(e.target.value)}
        value={id}
        type="button"
      >
        Delete
      </ContactBtn>
    </ContItemEl>
  );
};
