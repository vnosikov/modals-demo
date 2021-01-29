import React, { useState } from 'react';
import { ModalBody, Button } from 'reactstrap';

const btnPanelStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  margin: '16px 0',
};

const ComplexModal = ({
  onConfirm,
  onHide,
  additionalData: { title },
}) => {
  const [response, setResponse] = useState('');
  return (
    <ModalBody>
      <h4>{title}</h4>
      <input
        placeholder="response"
        value={response}
        onChange={(e) => { setResponse(e.target.value); }}
      />
      <div style={btnPanelStyle}>
        <Button color="danger" onClick={onHide}>Cancel</Button>
        <Button color="info" onClick={() => { onConfirm(response); }}>OK</Button>
      </div>
    </ModalBody>
  );
};

export default ComplexModal;
