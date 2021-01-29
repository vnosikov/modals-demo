import React from 'react';
import { ModalBody, Button } from 'reactstrap';

const SimpleModal = ({
  onHide,
}) => (
  <ModalBody>
    <h4>I am the simplest alert</h4>
    <Button color="info" onClick={onHide}>OK</Button>
  </ModalBody>
);

export default SimpleModal;
