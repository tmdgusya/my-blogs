import React from 'react';

interface ReferenceModalProps {
    content: string;
}

const ReferenceModal = ({ content }: ReferenceModalProps) => {
  return (
    <div className="reference-modal">
      <div className="reference-modal-content">{content}</div>
    </div>
  );
};

export default ReferenceModal;
