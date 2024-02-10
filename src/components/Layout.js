import React from "react"
import SplashFilterIcon from "../resources/icons/SplashFilterIcon"
import Footer from "./Footer"
import Header from "./Header"

const data = {
  copyRight: `© ${new Date().getFullYear()}. La Maison Des Délices.Made With Love by.`,
  dev: "Datum Services",
  link: "https://www.datumservices.ma/",
}

export default function Layout({ children }) {
  return (
    <>
      <Header data={data} />
      {children}
      <SplashFilterIcon />
      <Footer data={data} />
    </>
  )
}
