export const ContactItem = ({ name, number, id, deleted }) => {
  return (
    <li>
      {name}: {number}
      <button onClick={e => deleted(e.target.value)} value={id} type="button">
        Delete
      </button>
    </li>
  );
};
