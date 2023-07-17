import HeaderLayout from "@/layouts/HeaderLayout";

export default function App({ Component, pageProps }) {

  return (
    <HeaderLayout>
      <Component {...pageProps} />
    </HeaderLayout>
  )
}