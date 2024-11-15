import { useState, useRef, type ChangeEvent } from 'react';
import ReactDOM from 'react-dom';
import PdfCanvas, { useFabric, type PDF } from '@component-hook/pdf-canvas/react';

let currentFile: File | null = null;

export function EncryptedPdf() {
  const { loadFile } = useFabric();
  const [currentPdf, setCurrentPdf] = useState<PDF>();
  const [password, setPassword] = useState<string>('');
  const [isShowPasswordPopup, setIsShowPasswordPopup] = useState(false);
  const [modalPassword, setModalPassword] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const uploadFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const { files } = target;

    if (!files || files.length === 0) return;

    currentFile = files[0];
    renderFile(currentFile);
    target.value = '';
  };

  const renderFile = (file: File | null) => {
    if (!file) return;

    loadFile(file, modalPassword)
      .then(content => {
        setPassword(modalPassword);
        setCurrentPdf(content);
        setModalPassword('');
      })
      .catch(error => {
        console.log(`${error}`);
        if (!`${error}`.includes('PasswordException')) return;

        setIsShowPasswordPopup(true);
        if (`${error}` === 'PasswordException: Incorrect Password') {
          alert('Incorrect password! Please try again.');
        }
      });
  };

  const submitPassword = () => {
    setIsShowPasswordPopup(false);
    renderFile(currentFile);
  };

  return (
    <div>
      {currentPdf ? (
        <PdfCanvas
          file={currentPdf}
          password={password}
          canvasId="encrypted"
        />
      ) : (
        <p>Please select an encrypted PDF file.</p>
      )}

      <button>
        <input
          type="file"
          accept="application/pdf"
          ref={fileInputRef}
          onChange={uploadFile}
        />
        select file
      </button>

      <div>
        <p>
          base64:
          {currentPdf?.PDFBase64 ? `${currentPdf.PDFBase64.slice(0, 30)}...` : 'null'}
        </p>
        <p>file id: {currentPdf?.PDFId ?? 'null'}</p>
        <p>file name: {currentPdf?.name ?? 'null'}</p>
        <p>total pages: {currentPdf?.pages ?? 'null'}</p>
        <p>update date: {currentPdf?.updateDate ?? 'null'}</p>
      </div>

      {isShowPasswordPopup &&
        ReactDOM.createPortal(
          <div
            role="presentation"
            className="dialog"
            onClick={() => setIsShowPasswordPopup(false)}
            onKeyDown={event => {
              if (event.key === 'Escape') {
                setIsShowPasswordPopup(false);
              }
            }}
          >
            <div
              onClick={e => e.stopPropagation()}
              aria-hidden="true"
            >
              <span
                role="button"
                className="dialog-close"
                tabIndex={0}
                onClick={() => setIsShowPasswordPopup(false)}
                onKeyDown={event => {
                  if (event.key === 'enter') {
                    setIsShowPasswordPopup(false);
                  }
                }}
              >
                &times;
              </span>
              <h3>Enter Your Password</h3>
              <input
                type="password"
                value={modalPassword}
                onChange={e => setModalPassword(e.target.value)}
                placeholder="Please enter password"
              />
              <button
                className="float-right"
                onClick={submitPassword}
              >
                Submit
              </button>
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
}
