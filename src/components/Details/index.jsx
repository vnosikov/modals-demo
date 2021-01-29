import React, { useState } from 'react';
import { Button } from 'reactstrap';

import ComplexModal from '../modals/ComplexModal';

const Details = ({ openModal }) => {
  const [title, setTitle] = useState('Title');
  const [showSuccessMessage, setShowSuccessMessage] = useState(null);
  const onClick = () => {
    openModal(
      ComplexModal,
      (msg) => { setShowSuccessMessage(msg); },
      {
        title,
      },
    );
  };

  return (
    <div>
      <Button color="primary" onClick={onClick}>Show first</Button>
      <div style={{ marginTop: '8px' }}>
        {showSuccessMessage && (
        <p>
          {`Success! ${showSuccessMessage}`}
        </p>
        )}
        <input value={title} onChange={(e) => { setTitle(e.target.value); }} />
      </div>
    </div>
  );
};

export default Details;
