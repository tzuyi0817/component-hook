import{_ as t}from"./ComponentPdfCanvas.vue_vue_type_script_setup_true_lang-3GjZncdm.js";import{d as n,c as a,u as e,o as r}from"./index-DFvhvX9c.js";import"./index-Qr6EIkqn.js";const o=`import PdfCanvas, { loadFile, type PDF } from '@component-hook/pdf-canvas/react';
import { useState, type ChangeEvent } from 'react';

export function DrawPdf() {
  const [currentPdf, setCurrentPdf] = useState<PDF>();

  const uploadFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const { files } = target;

    if (!files || files.length === 0) return;

    const file = files[0];
    const content = await loadFile(file);

    setCurrentPdf(content);
    target.value = '';
  };

  return (
    <div>
      {currentPdf ? <PdfCanvas file={currentPdf} /> : <p>Please select a PDF file or image.</p>}

      <button>
        <input
          type="file"
          accept="application/pdf, .jpg, .png"
          onChange={uploadFile}
        />
        select file
      </button>

      <div>
        <p>base64: {currentPdf?.PDFBase64 ? \`\${currentPdf.PDFBase64.slice(0, 30)}...\` : 'null'}</p>
        <p>file id: {currentPdf?.PDFId ?? 'null'}</p>
        <p>file name: {currentPdf?.name ?? 'null'}</p>
        <p>total pages: {currentPdf?.pages ?? 'null'}</p>
        <p>update date: {currentPdf?.updateDate ?? 'null'}</p>
      </div>
    </div>
  );
}
`,s=`import PdfCanvas, { loadFile, type PDF, type PdfCanvasHandle } from '@component-hook/pdf-canvas/react';
import { useRef, useState, type ChangeEvent, type DragEvent } from 'react';

export function DropPdf() {
  const [currentPdf, setCurrentPdf] = useState<PDF>();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const pdfCanvasRef = useRef<PdfCanvasHandle | null>(null);

  const uploadFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const { files } = target;

    if (!files || files.length === 0) return;

    const file = files[0];
    const content = await loadFile(file);

    setCurrentPdf(content);
    target.value = '';
  };

  const dragImage = (event: DragEvent<HTMLImageElement>) => {
    const { src, offsetHeight, offsetWidth } = event.target as HTMLImageElement;
    const offsetX = event.nativeEvent.offsetX / offsetWidth;
    const offsetY = event.nativeEvent.offsetY / offsetHeight;

    event.dataTransfer?.setData('text/uri-list', src);
    event.dataTransfer?.setData('custom/offset', JSON.stringify({ offsetX, offsetY }));
  };

  const dragText = (event: DragEvent<HTMLParagraphElement>) => {
    const { textContent, offsetHeight, offsetWidth } = event.target as HTMLParagraphElement;
    const offsetX = event.nativeEvent.offsetX / offsetWidth;
    const offsetY = event.nativeEvent.offsetY / offsetHeight;

    event.dataTransfer?.setData('text/plain', textContent ?? '');
    event.dataTransfer?.setData('custom/offset', JSON.stringify({ offsetX, offsetY }));
  };

  return (
    <div>
      <img
        src="https://pdf-signature-puce.vercel.app/cover.jpg"
        width="300"
        height="200"
        alt="PDF signature cover"
        onDragStart={dragImage}
      />

      <p
        draggable="true"
        onDragStart={dragText}
        style={{ width: 'fit-content' }}
      >
        Can drag the text onto canvas.
      </p>

      {currentPdf ? (
        <PdfCanvas
          ref={pdfCanvasRef}
          file={currentPdf}
          canvasId="drop"
          dropImageOptions={{ scaleX: 0.1, scaleY: 0.1 }}
          dropTextOptions={{ fontSize: 20 }}
          isDrop
        />
      ) : (
        <p>Please select a PDF file or image.</p>
      )}

      <div className="flex flex-wrap gap-3">
        <button>
          <input
            type="file"
            accept="application/pdf, .jpg, .png"
            ref={fileInputRef}
            onChange={uploadFile}
          />
          select file
        </button>

        <button onClick={() => pdfCanvasRef.current?.copyActiveFabric()}>copy</button>
        <button onClick={() => pdfCanvasRef.current?.deleteActiveFabric()}>delete</button>
      </div>
    </div>
  );
}
`,l=`import PdfCanvas, { loadFile, type PDF } from '@component-hook/pdf-canvas/react';
import { useRef, useState, type ChangeEvent } from 'react';
import ReactDOM from 'react-dom';

export function EncryptedPdf() {
  const [currentPdf, setCurrentPdf] = useState<PDF>();
  const [password, setPassword] = useState<string>('');
  const [isShowPasswordPopup, setIsShowPasswordPopup] = useState(false);
  const [modalPassword, setModalPassword] = useState<string>('');
  const currentFileRef = useRef<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const uploadFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const { files } = target;

    if (!files || files.length === 0) return;

    currentFileRef.current = files[0];
    renderFile(currentFileRef.current);
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
        console.log(\`\${error}\`);
        if (!\`\${error}\`.includes('PasswordException')) return;

        setIsShowPasswordPopup(true);
        if (\`\${error}\` === 'PasswordException: Incorrect Password') {
          alert('Incorrect password! Please try again.');
        }
      });
  };

  const submitPassword = () => {
    setIsShowPasswordPopup(false);
    renderFile(currentFileRef.current);
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
          {currentPdf?.PDFBase64 ? \`\${currentPdf.PDFBase64.slice(0, 30)}...\` : 'null'}
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
`,c=`import PdfCanvas, { loadFile, type PDF, type PdfCanvasHandle } from '@component-hook/pdf-canvas/react';
import { useRef, useState, type ChangeEvent } from 'react';

export function ManualPdf() {
  const [currentPdf, setCurrentPdf] = useState<PDF>();
  const pdfCanvasRef = useRef<PdfCanvasHandle | null>(null);

  const uploadFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const { files } = target;

    if (!files || files.length === 0) return;

    const file = files[0];
    const content = await loadFile(file);

    setCurrentPdf(content);
    target.value = '';
  };

  const addImage = () => {
    if (!pdfCanvasRef.current) return;

    pdfCanvasRef.current.addImage('https://pdf-signature-puce.vercel.app/cover.jpg');
  };

  const addText = () => {
    if (!pdfCanvasRef.current) return;

    pdfCanvasRef.current.addText('Can drag the text onto canvas.');
  };

  return (
    <div>
      {currentPdf ? (
        <PdfCanvas
          ref={pdfCanvasRef}
          file={currentPdf}
          canvasId="manual"
          dropImageOptions={{ scaleX: 0.1, scaleY: 0.1 }}
          dropTextOptions={{ fontSize: 20 }}
          isDrop
        />
      ) : (
        <p className="font-mono text-sm">Please select a PDF file or image.</p>
      )}

      <div>
        <button>
          <input
            type="file"
            accept="application/pdf, .jpg, .png"
            onChange={uploadFile}
          />
          select file
        </button>

        <button onClick={addImage}>add image</button>
        <button onClick={addText}>add text</button>
      </div>
    </div>
  );
}
`,d=`import { loadFile, type PDF } from '@component-hook/pdf-canvas/react';
import { lazy, Suspense, useState, type ChangeEvent } from 'react';

const PdfCanvas = lazy(() => import('@component-hook/pdf-canvas/react'));

export function MultiplePdf() {
  const [currentPdf, setCurrentPdf] = useState<PDF>();

  const uploadFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const { files } = target;

    if (!files || files.length === 0) return;

    const file = files[0];
    const content = await loadFile(file);

    setCurrentPdf(content);
    target.value = '';
  };

  return (
    <div>
      {currentPdf ? (
        <ul>
          {Array.from({ length: currentPdf.pages }, (_, index) => index + 1).map(page => (
            <li key={page}>
              <Suspense fallback={'loading...'}>
                <PdfCanvas
                  file={currentPdf}
                  canvasId="multiple"
                  page={page}
                />
              </Suspense>
            </li>
          ))}
        </ul>
      ) : (
        <p>Please select a multiple page PDF file.</p>
      )}

      <button>
        <input
          type="file"
          accept="application/pdf"
          onChange={uploadFile}
        />
        select file
      </button>

      {currentPdf && (
        <div>
          <p>base64: {currentPdf.PDFBase64 ? \`\${currentPdf.PDFBase64.slice(0, 30)}...\` : 'null'}</p>
          <p>file id: {currentPdf.PDFId ?? 'null'}</p>
          <p>file name: {currentPdf.name ?? 'null'}</p>
          <p>total pages: {currentPdf.pages ?? 'null'}</p>
          <p>update date: {currentPdf.updateDate ?? 'null'}</p>
        </div>
      )}
    </div>
  );
}
`,i="#### Events\n\n| Event              | Description                                    | Type                                                    |\n| :----------------- | :--------------------------------------------- | :------------------------------------------------------ |\n| onLoaded           | Callback when the canvas rendering is complete | `Function () => void`                                   |\n| onReload           | Callback when the canvas reload                | `Function () => void`                                   |\n| onPointerDown      | Triggered when pointer down the canvas         | `Function (event: FabricPointerEvent) => void`          |\n| onPointerMove      | Triggered when pointer move the canvas         | `Function (event: FabricPointerEvent) => void`          |\n| onPointerUp        | Triggered when pointer up the canvas           | `Function (event: FabricPointerEvent) => void`          |\n| onSelectionCreated | Triggered when selection the fabric            | `Function (event: FabricSelectionCreatedEvent) => void` |\n| onSelectionCleared | Triggered when clear selection the fabric      | `Function (event: FabricSelectionClearedEvent) => void` |\n",m=n({__name:"ReactPdfCanvas",setup(f){return(p,u)=>(r(),a(t,{"front-end-frame":"react","draw-source":e(o),"draw-playground":"675f9a7a08325367664ebf7a","encrypted-source":e(l),"encrypted-playground":"675f9e9b4b3b90d00991becc","multiple-source":e(d),"multiple-playground":"675fbbb198c7cde44e724bae","drop-source":e(s),"drop-playground":"675fbf06bf0c4e6c39359d60","manual-source":e(c),"manual-playground":"675fbfdcbf0c4e6c39359d7d",language:"tsx","event-md":e(i)},null,8,["draw-source","encrypted-source","multiple-source","drop-source","manual-source","event-md"]))}});export{m as default};
