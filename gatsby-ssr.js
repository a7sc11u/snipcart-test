const React = require("react")

exports.onRenderBody = ({ setPostBodyComponents }, options = {}) => {
  const components = [
    <script
      async
      key="snipcartjs"
      src="https://cdn.snipcart.com/themes/v3.0.22/default/snipcart.js"
    ></script>,
    <div
      hidden
      id="snipcart"
      key="snipcartconfig"
      data-api-key="MjQxNzVjMWItMTk4NC00NTE0LWI3ZjctZWY2NTJkNjgzYzk1NjM3MzQ1MDQxMTEyODQ4OTQy"
      data-config-add-product-behavior="none"
    ></div>,

    <link
      rel="stylesheet"
      key="snipcartcss"
      href="https://cdn.snipcart.com/themes/v3.0.22/default/snipcart.css"
    />,
  ]

  // if (options.styles){
  // 	components.push(<link key='snipcartStyle' href={options.styles} type="text/css" rel="stylesheet" />)
  // }
  return setPostBodyComponents(components)
}
