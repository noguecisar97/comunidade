import React, { useEffect, useMemo } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../themes/global'
import { theme } from '../themes/theme'
import Head from 'next/head'
import { Header } from 'components/header'

import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { applyMiddleware, compose, createStore, Store } from 'redux'
import { allReducers, ApplicationState, rootSaga } from 'stores'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles)
    }
  }, [])

  const composeEnhancers =
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (typeof window !== 'undefined' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose

  const { store } = useMemo<{ store: Store<ApplicationState> }>(() => {
    const sagaMiddleware = createSagaMiddleware()
    const storage: Store<ApplicationState> = createStore(
      allReducers,
      composeEnhancers(applyMiddleware(sagaMiddleware))
    )
    sagaMiddleware.run(rootSaga)

    return {
      store: storage,
    }
  }, [composeEnhancers])

  return (
    <>
      <Head>
        <title>Unnameds</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta
          name="description"
          // eslint-disable-next-line max-len
          content="Focados em desenvolvimento de websites e aplicativos utilizando bibliotecas e frameworks, além de compartilhamento de conhecimentos"
        />
        <meta name="author" content="UNNAMEDS" />
        <meta httpEquiv="cache-control" content="no-cache" />
        <meta httpEquiv="content-language" content="pt-br, en-US" />
        <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
        <meta name="copyright" content="© 2021 Unnameds" />
        <meta
          name="keywords"
          // eslint-disable-next-line max-len
          content="unnameds, javascript, html, css, react, api, documentação, lib de components, startup"
        />
        <meta httpEquiv="pragma" content="no-cache" />
        <meta httpEquiv="refresh" content="300" />
        <meta name="robots" content="index,follow" />
        <meta httpEquiv="imagetoolbar" content="no" />
        <meta name="generator" content="Next.js" />
        <meta name="revisit-after" content="30 days" />
        <meta name="rating" content="general" />
      </Head>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Header />
          <Component {...pageProps} />
          <GlobalStyle />
        </ThemeProvider>
      </Provider>
    </>
  )
}

export default MyApp
