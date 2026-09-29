import { SvgIcon } from '@/components/common';
import { HelloWorld } from './components/hello-world';
import styles from './index.module.css';
import viteLogo from '/vite.svg';

export function Home() {
  return (
    <>
      <div>
        <a
          href="https://vite.dev"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={viteLogo}
            className={`${styles.logo} hover:filter-[drop-shadow(0_0_2em_#646cffaa)]`}
            alt="Vite logo"
          />
        </a>
        <a
          href="https://react.dev"
          target="_blank"
          rel="noreferrer"
          aria-label="React link"
        >
          <SvgIcon
            name="react"
            className={`${styles.logo} hover:filter-[drop-shadow(0_0_2em_#61dafbaa)] motion-safe:animate-logo-spin`}
          />
        </a>
      </div>

      <HelloWorld title="Vite + React" />
    </>
  );
}
