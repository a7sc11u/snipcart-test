import React from "react"

import StoreLayout from "../components/layout"
import SEO from "../components/seo"
import Item from "../components/item"

const IndexPage = () => {
  const webVariants = [
    {
      name: "20k pageviews/month",
      price: "",
    },
    {
      name: "50k pageviews/month",
      price: "+10",
    },
    {
      name: "100k pageviews/month",
      price: "+20",
    },
    {
      name: "500k pageviews/month",
      price: "+30",
    },
    {
      name: "1m pageviews/month",
      price: "+50",
    },
    {
      name: "2.5m pageviews/month",
      price: "+60",
    },
    {
      name: "10m pageviews/month",
      price: "+70",
    },
  ]

  const deskVariants = [
    {
      name: "1 user",
      price: "",
    },
    {
      name: "Up to 2 users",
      price: "+50",
    },
    {
      name: "Up to 5 users",
      price: "+100",
    },
    {
      name: "Up to 15 users",
      price: "+400",
    },
    {
      name: "Up to 30 users",
      price: "+1000",
    },
    {
      name: "Up to 50 users",
      price: "+5000",
    },
    {
      name: "Up to 200 users",
      price: "+40000",
    },
  ]

  const servVariants = [
    {
      name: "1 server",
      price: "",
    },
    {
      name: "2 servers",
      price: "+5000",
    },
    {
      name: "3 Servers",
      price: "+10000",
    },
  ]

  return (
    <StoreLayout>
      <Item
        id="x1p2q4r"
        guid="bd27e032-e05f-4766-96d2-0881e819f82c"
        title="Jali Regular - Web Licence"
        data-item-url="/"
        description="Jali Regular"
        licence="Web Licence"
        price="25"
        variants={webVariants}
      />
      <br />
      <br />
      <br />

      <Item
        id="r8y5w3b"
        guid="b22720d5-e761-443c-96f9-0502253b1892"
        title="Jali Regular - Desktop Licence"
        data-item-url="/"
        description="Jali Regular"
        licence="Desktop"
        price="55"
        variants={deskVariants}
      />

      <br />
      <br />
      <br />

      <Item
        id="p2o3t4c"
        guid="b22720d5-e761-443c-96f9-0502253b1892"
        title="Jali Regular - Server Licence"
        data-item-url="/"
        description="Jali Regular"
        licence="Server"
        price="1500"
        variants={servVariants}
      />
    </StoreLayout>
  )
}

export default IndexPage
