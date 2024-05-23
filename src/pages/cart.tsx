// pages/cart.tsx

import CartTotal from "../components/CartTotal";
import CartTable from "../components/CartTable";
import Header from "../components/Header";
import { NextPage } from "next";
import Head from "next/head";
import { Container } from "reactstrap";
import ButtonBuy from "../components/ButtonBuy/ButtonBuy";

const Cart: NextPage = () => {
  return (
    <>
      <Head>
        <title>Carrinho</title>
        <meta name="description" content="Meu carrinho de compras" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Header/>
    <main>
        <Container className="mb-5">
          <h1 className="my-5">
            Carrinho
          </h1>

          <CartTable />
          <div style={{marginTop:"20px"}}>
          <CartTotal/>
          </div>
          <div className="d-flex justify-content-end my-3">
          <ButtonBuy/>
          </div>

        </Container>
      </main>
    </>
  )
}

export default Cart