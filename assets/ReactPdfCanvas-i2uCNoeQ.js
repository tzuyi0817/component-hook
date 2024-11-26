import{_ as t}from"./ComponentPdfCanvas.vue_vue_type_script_setup_true_lang-BGDk971_.js";import{d as n,c as a,u as e,o as r}from"./index-pRU3625_.js";import"./Demo-DrAyciBb.js";const s=`import { useState, type ChangeEvent } from 'react';
import PdfCanvas, { useFabric, type PDF } from '@component-hook/pdf-canvas/react';

export function DrawPdf() {
  const { loadFile } = useFabric();
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
`,o=`import { useState, useRef, type ChangeEvent } from 'react';
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
`,l=`import { lazy, useState, Suspense, type ChangeEvent } from 'react';
import { useFabric, type PDF } from '@component-hook/pdf-canvas/react';

const PdfCanvas = lazy(() => import('@component-hook/pdf-canvas/react'));

export function MultiplePdf() {
  const { loadFile } = useFabric();
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
`,c=`import { useState, useRef, type DragEvent, type ChangeEvent } from 'react';
import PdfCanvas, { useFabric, type PDF } from '@component-hook/pdf-canvas/react';

export function DropPdf() {
  const { loadFile } = useFabric();
  const [currentPdf, setCurrentPdf] = useState<PDF>();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

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
    const target = event.target as HTMLImageElement;

    event.dataTransfer.setData('image', target.src);
  };

  const dragText = (event: DragEvent<HTMLParagraphElement>) => {
    const target = event.target as HTMLParagraphElement;

    event.dataTransfer.setData('text', target.textContent || '');
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
      >
        Can drag the text onto canvas.
      </p>

      {currentPdf ? (
        <PdfCanvas
          file={currentPdf}
          canvasId="drop"
          dropImageOptions={{ scaleX: 0.1, scaleY: 0.1 }}
          dropTextOptions={{ fontSize: 20 }}
          isDrop
        />
      ) : (
        <p>Please select a PDF file or image.</p>
      )}

      <button>
        <input
          type="file"
          accept="application/pdf, .jpg, .png"
          ref={fileInputRef}
          onChange={uploadFile}
        />
        select file
      </button>
    </div>
  );
}
`,p=`import { useRef, useState, type ChangeEvent } from 'react';
import PdfCanvas, { useFabric, type PDF, type PdfCanvasHandle } from '@component-hook/pdf-canvas/react';

export function ManualPdf() {
  const { loadFile } = useFabric();
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
`,m=n({__name:"ReactPdfCanvas",setup(d){return(u,i)=>(r(),a(t,{description:"Rendering PDF documents onto a canvas with react component.","draw-source":e(s),"draw-playground":"","encrypted-source":e(o),"encrypted-playground":"","multiple-source":e(l),"multiple-playground":"","drop-source":e(c),"drop-playground":"","manual-source":e(p),"manual-playground":"",language:"tsx"},null,8,["draw-source","encrypted-source","multiple-source","drop-source","manual-source"]))}});export{m as default};
