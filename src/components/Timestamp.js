import React from 'react';
import moment from 'moment';

const Timestamp = (props) => {
  const time = moment(props.time);
  const absolute = time.format('h:mm a');

  return <span title={absolute}>{absolute}</span>;
};

export default Timestamp;