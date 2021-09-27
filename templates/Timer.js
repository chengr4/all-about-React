import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

function Timer(props) {
  useEffect(() => {
    const CHECK_NOTIFICATIONS_INTERVAL = 10000; // every five minutes

    const timeoutId = setInterval(
        props.dispatchAction, CHECK_NOTIFICATIONS_INTERVAL);

    return () => {
      clearInterval(timeoutId);
    };
  }, []);

  return (
    <></>
  );
}

Timer.propTypes = {
  dispatchAction: PropTypes.func,
};

export default Timer;
