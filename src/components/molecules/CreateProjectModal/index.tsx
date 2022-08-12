import React from 'react';
import Modal from '../../layouts/Modal';

import { CreateProjectModalComponent } from '../CreateProjectModalComponent';

interface Props {
  show: boolean;
  hide: () => void;
}

export const CreateProjectModal: React.FC<Props> = ({ show, hide }) => {
  return (
    <Modal show={show} hide={hide}>
      <CreateProjectModalComponent />
    </Modal>
  );
};
