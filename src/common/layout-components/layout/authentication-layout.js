import React, { useEffect } from 'react'
const Customswitcher = React.lazy(() => import("../../../shared/layout-components/switcher/Customswitcher"), { ssr: false, });



const Authenticationlayout = ({ children }) => {
  useEffect(() => {
    document.querySelector("body").classList.add("ltr", "main-body", "leftmenu", "error-1")
  })
  return (
    <>
      <div>{children}</div>
      <Customswitcher />
    </>
  )
}

export default Authenticationlayout