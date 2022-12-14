import PropTypes from 'prop-types';
import { Table, Thead, ListItems } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
  <Table>
    <Thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </Thead>

  {items.map(({ id, type, amount, currency}) => (
    <tbody key={id}>
      <ListItems>
          <td>{type}</td>
          <td>{amount}</td>
          <td>{currency}</td>
      </ListItems>
    </tbody>
    ))}
  </Table>
);
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};


