import React from 'react';
import {useSubscribe} from "../hooks/subscribes";

const SubscribesModal = () => {
  const {subscribes} = useSubscribe();
  return (
    <div>
      {subscribes.length > 0
        ? subscribes.map(el => <p>{el.firstName} {el.lastName} ({el.email})</p>)
        : <p>no subscriptions</p>
      }
    </div>
  );
};

export default SubscribesModal;