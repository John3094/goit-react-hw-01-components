import PropTypes from 'prop-types';
import { CardPage, Title, StatList, StatItem, Label, Percentage } from './Statistics.styled';
import { rendomColor } from 'components/utils/randomColor';

export const Statistics = ({ stats, title }) => {
  return ( <CardPage>
  {title && <Title>{title}</Title>}

    <StatList>

      {stats.map(( {id, label, percentage} ) => (

        <StatItem color={rendomColor()} key={id}>
        <Label>{label}</Label>
        <Percentage>{percentage}</Percentage>
      </StatItem>
      ))}
    </StatList>
  </CardPage>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf( 
    PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
  ).isRequired,
};
