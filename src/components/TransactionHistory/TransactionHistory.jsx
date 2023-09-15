import css from './TransactionHistory.module.css';
export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionhistory}>
      <thead className={css.thead}>
        <tr className={css.theaditem}>
          <th className={css.theaditemlist}>Type</th>
          <th className={css.theaditemlist}>Amount</th>
          <th className={css.theaditemlist}>Currency</th>
        </tr>
      </thead>

      <tbody className={css.tbody}>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id} className={css.tbodyitem}>
              <td className={css.tbodyitemlist}>{type}</td>
              <td className={css.tbodyitemlist}>{amount}</td>
              <td className={css.tbodyitemlist}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
