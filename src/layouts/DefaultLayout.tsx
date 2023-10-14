import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer";
import { Layout } from "./styles";


function DefaultLayout() {
  return (
    <Layout>
        <Header />
        <Outlet />
        <Footer />
    </Layout>
  )
}

export default DefaultLayout;