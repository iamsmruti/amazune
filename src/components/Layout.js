import { Box } from "@mui/material"
import Footer from "./Footer/Footer"

import Navbar from "./Navbar/Navbar"

import { useLocation } from "react-router-dom"
import Footer2 from "./Footer2"

const Layout = ({children}) => {
  const location = useLocation()
  return (
    <>

        {(location.pathname != '/forgot-password' || location.pathname != '/login' || location.pathname != '/create-account') ? <Navbar /> : null}
        <Box sx={{mt: 7.5}}>{children}</Box>
        {(location.pathname != '/' || location.pathname != '/forgot-password' || location.pathname != '/login' || location.pathname != '/create-account') ? null : <Footer />}
        {(location.pathname == '/forgot-password' || location.pathname == '/login' || location.pathname == '/create-account') ?  <Footer2 /> : null}
    </>
  )
}

export default Layout
