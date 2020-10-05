import React from "react"

import StoreLayout from "../components/layout"
import SEO from "../components/seo"
import Item from "../components/item"

const IndexPage = () => {
  const webVariants = [
    {
      name: "1 user + 20k pageviews/month",
      price: "35",
    },
    {
      name: "Up to 2 users + 50k pageviews/month",
      price: "+50",
    },
    {
      name: "Up to 5 users + 100k pageviews/month",
      price: "+100",
    },
    {
      name: "Up to 15 users + 500k pageviews/month",
      price: "+400",
    },
    {
      name: "Up to 30 users + 1m pageviews/month",
      price: "+1000",
    },
    {
      name: "Up to 50 users + 2.5m pageviews/month",
      price: "+5000",
    },
    {
      name: "Up to 200 users + 10m pageviews/month",
      price: "+40000",
    },
  ]

  const servVariants = [
    {
      name: "1 server",
      price: "1500",
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
        title="Jali Web"
        data-item-url="https://f5-shop.netlify.app"
        description="Jali Regular"
        licence="Web + Desktop"
        price="35"
        variants={webVariants}
      />

      <Item
        id="p2o3t4c"
        guid="b22720d5-e761-443c-96f9-0502253b1892"
        title="Jali Server"
        data-item-url="https://f5-shop.netlify.app"
        description="Jali Regular"
        licence="Server"
        price="1500"
        variants={servVariants}
      />
    </StoreLayout>
  )
}

export default IndexPage
