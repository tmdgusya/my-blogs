import React from 'react';
import ReferenceModal from './ReferenceModal';

interface HoverModalProps {
    tag: string;
    content: string;
}

const HoverModal = ({ tag, content }: HoverModalProps) => {
  return (
    <sup className="hover-modal">
        <span className="underline text-blue-500">{tag}</span>
        <ReferenceModal content={content} />
    </sup>
  );
};

export default HoverModal;
