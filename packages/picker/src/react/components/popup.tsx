import { useEffect, useRef, type PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';

type Props = {
  teleport?: Element | DocumentFragment;
  show: boolean;
  onClose: () => void;
  onOpen?: () => void;
  onClosed?: () => void;
};

export function Popup({
  show,
  onClose,
  onOpen,
  onClosed,
  children,
  teleport = document.body,
}: PropsWithChildren<Props>) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const maskRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
      onOpen?.();
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [show]);

  function setContainerDisplay(value: string) {
    if (!containerRef.current) return;

    containerRef.current.style.setProperty('display', value);

    if (value === 'none') onClosed?.();
  }

  return createPortal(
    <>
      <CSSTransition
        in={show}
        timeout={300}
        nodeRef={maskRef}
        classNames="chook-picker-fade"
        unmountOnExit
      >
        <div
          ref={maskRef}
          role="presentation"
          className="chook-picker-mask"
          onClick={onClose}
          onKeyDown={event => {
            if (event.key === 'Escape') {
              onClose();
            }
          }}
        />
      </CSSTransition>

      <CSSTransition
        in={show}
        timeout={300}
        nodeRef={containerRef}
        classNames="chook-picker-slide"
        onEnter={() => setContainerDisplay('')}
        onExited={() => setContainerDisplay('none')}
      >
        <div
          ref={containerRef}
          className="chook-picker-container"
          style={{ display: 'none' }}
        >
          {children}
        </div>
      </CSSTransition>
    </>,
    teleport,
  );
}
