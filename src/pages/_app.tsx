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
        <title>My App</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
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
