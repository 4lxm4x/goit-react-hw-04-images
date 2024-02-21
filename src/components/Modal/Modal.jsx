import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import '../../styles.css';

export default function Modal (onClose, onOverlayClick,largeImage,alt) {
  
  const modalRootEl = document.getElementById('modal-root');

useEffect(() => {
  console.log("🚀 ~ Modal ~ largeImage:", largeImage)
  

  window.addEventListener('keydown', key => {
    if (key.code === 'Escape') {
      return onClose(false);
    }
  });
}, []);

  // componentDidMount() {
  //   window.addEventListener('keydown', key => {
  //     if (key.code === 'Escape') {
  //       return this.props.onClose(false);
  //     }
  //   });
  // }

  const overlayClick = e => {
    if (e.currentTarget === e.target) {
return onOverlayClick();
    }
  };

  
    return createPortal(
      <div className="Overlay" onClick={overlayClick}>
        <div className="Modal" onClick={overlayClick}>
          <img
            src={largeImage}
            className="modalImage"
            alt={alt}
          />
        </div>
      </div>,
      modalRootEl
    );
  }


