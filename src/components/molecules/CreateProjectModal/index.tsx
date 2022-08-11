import React from 'react';
import { Modal } from '../../layouts/Modal';
import { CreateProjectModalComponent } from '../CreateProjectModalComponent';

interface Props {
  onClose?: () => void;
  isShown?: boolean;
}

export const CreateProjectModal: React.FC<Props> = ({ onClose, isShown }) => {
  return (
    <Modal header='Create a New Project' isShown={isShown} hide={onClose}>
      <CreateProjectModalComponent />
    </Modal>
  );
};
