import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { ShoppingCart } from "styled-icons/material/ShoppingCart"

const HeaderMinorStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ShopName = styled.h1`
  font-size: 2em;
  font-weight: 700;
`

const LinkStyled = styled(Link)`
  box-shadow: none;
  text-decoration: none;
  color: inherit;
`

const CartSummary = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 10px;
  font-weight: bold;
`

export default () => {
  const [snpReady, setSnpReady] = React.useState(false)

  React.useEffect(() => {
    console.log("add")

    // setTimeout(() => {
    window.Snipcart.events.on("item.added", cartItem => {
      console.log(cartItem)
    })
    // }, 1000)
    // document.addEventListener("snipcart.ready", function() {
    //   var count = window.Snipcart.api.items.count()
    //   console.log("ready")
    // })
  }, [])

  return (
    <HeaderMinorStyled>
      <ShopName>
        <LinkStyled to="/">F5</LinkStyled>
      </ShopName>
      <CartSummary className="snipcart-summary">
        <a href="#" className="snipcart-checkout">
          <ShoppingCart size="40px" />
        </a>

        <div>
          <span className="snipcart-items-count"></span> |
          <span className="snipcart-total-price"></span>
        </div>
      </CartSummary>
    </HeaderMinorStyled>
  )
}
