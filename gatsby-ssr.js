const React = require("react")
exports.onRenderBody = ({
  setHeadComponents,
  setPreBodyComponents,
  setPostBodyComponents,
}) => {
  setPostBodyComponents([
    <script
      key="1"
      type="text/javascript"
      src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"
    />,
  ])
  setPostBodyComponents([
    <script
      key='2'
      type="text/javascript"
      src={'/lf.js'}
    />,
  ])
  
}