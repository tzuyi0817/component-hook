import { useEffect, type PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';

type Props = {
  teleport?: Element | DocumentFragment;
  isOpen: boolean;
  onClose: () => void;
  onOpen?: () => void;
  onClosed?: () => void;
};

function Popup({ isOpen, onClose, onOpen, onClosed, children, teleport = document.body }: PropsWithChildren<Props>) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      onOpen?.();
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return createPortal(
    <>
      <CSSTransition
        in={isOpen}
        timeout={300}
        classNames="chook-picker-fade"
        unmountOnExit
      >
        <div
          className="chook-picker-mask"
          onClick={onClose}
        />
      </CSSTransition>

      <CSSTransition
        in={isOpen}
        timeout={300}
        classNames="chook-picker-slide"
        onExited={onClosed}
      >
        <div className="chook-picker-container">{children}</div>
      </CSSTransition>
    </>,
    teleport,
  );
}

export default Popup;
