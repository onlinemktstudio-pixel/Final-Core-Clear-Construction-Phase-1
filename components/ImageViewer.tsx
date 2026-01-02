
import React from 'react';
import { X } from 'lucide-react';

interface ImageViewerProps {
  url: string;
  onClose: () => void;
}

const ImageViewer: React.FC<ImageViewerProps> = ({ url, onClose }) => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4" onClick={onClose}>
      <button 
        className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
        onClick={onClose}
      >
        <X size={28} />
      </button>
      <img 
        src={url} 
        alt="Full size" 
        className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
};

export default ImageViewer;
