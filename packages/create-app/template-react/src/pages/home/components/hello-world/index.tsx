import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useConfigStore } from '@/stores';

interface Props {
  title?: string;
}

export function HelloWorld({ title = '' }: Props) {
  const [count, setCount] = useState(0);
  const { t, i18n } = useTranslation();
  const { version } = useConfigStore();

  function changeLanguage() {
    const language = i18n.language === 'zh-TW' ? 'en-US' : 'zh-TW';

    i18n.changeLanguage(language);
  }

  return (
    <>
      <h1>{title}</h1>

      <div className="p-8">
        <button
          className="mb-4"
          onClick={() => setCount(originCount => originCount + 1)}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <p className="text-[#888]">Click on the Vite and React logos to learn more</p>
      <p className="text-[#888]">{version}</p>

      <button
        className="my-4"
        onClick={() => changeLanguage()}
      >
        {t('language')}
      </button>
    </>
  );
}
