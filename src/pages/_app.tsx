// Import the global style sheet
import '@/sass/globalstyle.scss'

import { AppContext, AppInitialProps, AppProps } from 'next/app'

import { AppearanceProvider } from '@/context/appearance-context'
import { NextComponentType } from 'next'

const JHaemin: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
  Component,
  pageProps,
}) => {
  return (
    <AppearanceProvider>
      <Component {...pageProps} />
    </AppearanceProvider>
  )
}

JHaemin.getInitialProps = async ({
  Component,
  ctx,
}: AppContext): Promise<AppInitialProps> => {
  let pageProps = {}

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }

  return { pageProps }
}

export default JHaemin
