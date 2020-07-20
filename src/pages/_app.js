import '../eui-theme.scss'

import dynamic from 'next/dynamic'
const EuiErrorBoundary = dynamic(
  () => import('@elastic/eui').then(module => module.EuiErrorBoundary),
  { ssr: false }
)

import { DashboardWrapper } from '../wrappers/Dashboard'

export default function MyApp({ Component, pageProps }) {
  const isSignedIn = true

  let Wrapper

  if (isSignedIn) {
    Wrapper = DashboardWrapper
  } else {
    Wrapper = React.Fragment
  }

  return (
    <EuiErrorBoundary>
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </EuiErrorBoundary>
  )
}
