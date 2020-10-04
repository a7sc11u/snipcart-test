import React, { useState } from "react"

export default props => {
  const { id, guid, title, description, price, licence, variants } = props

  // React.useEffect(() => {
  //   if (!window.Snipcart) return
  //   window.Snipcart.subscribe("item.added", function(item) {
  //     console.log(item)
  //   })
  // }, [])
  const options = variants.reduce((res, cur, index) => {
    let result = res + `${cur.name}[${cur.price}]`
    result += index < variants.length - 1 ? "|" : ""
    return result
  }, "")
  console.log(options)

  return (
    <div>
      <h3>{title}</h3>

      <button
        className="snipcart-add-item"
        data-item-id={id}
        data-item-price={price}
        data-item-name={title}
        data-item-description={description}
        data-item-custom1-name={licence}
        data-item-custom1-options={options}
        data-item-custom1-required="true"
        data-item-max-quantity="1"
        data-item-file-guid={guid}
      >
        Add to cart
      </button>
    </div>
  )
}
// index > 0 ? "|" : ""
