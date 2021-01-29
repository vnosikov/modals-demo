import React from 'react';
import { Modal } from 'reactstrap';

class ModalsManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      Content: () => null,
      onConfirmCallback: () => {},
      additionalData: null,
    };
  }

  open = (
    Content,
    onConfirm = () => {},
    additionalData = null,
  ) => {
    this.setState({
      isOpen: true,
      Content,
      onConfirmCallback: onConfirm,
      additionalData,
    });
  }

  onConfirm = (...params) => {
    const { onConfirmCallback } = this.state;
    onConfirmCallback(...params);
    // Realistically you should use promises here as confirm callback could be asynchronous
    this.onHide();
  }

  onHide = () => {
    this.setState({ isOpen: false });
  }

  render() {
    const {
      isOpen, Content, additionalData,
    } = this.state;

    return (
      <Modal
        centered
        isOpen={isOpen}
        toggle={this.onHide}
      >
        <Content
          onConfirm={this.onConfirm}
          onHide={this.onHide}
          additionalData={additionalData}
        />
      </Modal>
    );
  }
}

export default ModalsManager;

export const ModalsManagerContext = React.createContext();
