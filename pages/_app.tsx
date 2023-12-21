import '../style.css';
import 'kl-design-system/index.css';
import type { AppProps } from 'next/app';
import '../public/arduino-light.min.css';
import { MenuProvider } from '~/app/utils/use-menu';
import { SearchProvider } from '~/app/utils/use-search';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MenuProvider>
      <SearchProvider>
        <Component {...pageProps} />
      </SearchProvider>
    </MenuProvider>
  );
}
