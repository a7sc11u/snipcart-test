import React from "react"
import styled, { ThemeProvider } from "styled-components"
import { theme } from "../styles/theme"
import { GlobalStyle } from "../styles/globalStyle"

import Header from "./header"

const PageWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  width: 90%;
`

const MainSection = styled.main`
  margin: 30px 0;
  width: 100%;
`

class Layout extends React.Component {
  componentDidMount() {
    if (window.Snipcart) {
      // window.Snipcart.api.configure("show_continue_shopping", true)
    }
  }

  render() {
    const { children } = this.props
    const siteName = "F5"

    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <PageWrapper>
            <Header shopName={siteName}></Header>
            <MainSection>{children}</MainSection>
          </PageWrapper>
        </>
      </ThemeProvider>
    )
  }
}

export default Layout
