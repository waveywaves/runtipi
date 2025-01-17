import clsx from 'clsx';
import React from 'react';

interface IProps {
  children: React.ReactNode;
  className?: string;
}

export const ModalBody: React.FC<IProps> = ({ children, className }) => (
  <div data-testid="modal-body" className={clsx('modal-body', className)}>
    {children}
  </div>
);
