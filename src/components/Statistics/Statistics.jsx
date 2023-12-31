import css from './Statistics.module.css';
export const Statistics = ({ stats, title }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title}</h2>

      <ul className={css.statlist}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li className={css.item} key={id}>
              <span className={css.label}>{label}</span>
              <span className={css.percentage}>{`${percentage}%`}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
