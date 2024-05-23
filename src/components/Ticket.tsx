// pages/cart.tsx

import CartTotal from "../components/CartTotal";
import CartTable from "../components/CartTable";
import Header from "../components/Header";
import { NextPage } from "next";
import Head from "next/head";
import { Col, Container, FormGroup, Input, Label, Row } from "reactstrap";
import ButtonBuy from "../components/ButtonBuy/ButtonBuy";
import { useCart } from "@/hooks/useCart";
import Image from "next/image";

const Ticket: NextPage = () => {
  const { cart } = useCart()

  const totalValue = cart.reduce((total, product) => total + product.price, 0);
  const formattedTotal = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(totalValue);

  return (
    <>
      
  
    <main>
        <Container className="mb-5">
        <Row>
    <Col md={5}>
      <FormGroup>
        <Label for="Pagador">
          Pagador
        </Label>
        <Input
          id="PagadorPay"
          name="PagadorPay"
        />
      </FormGroup>
    </Col>
    <Col md={3}>
      <FormGroup>
        <Label for="DatePay">
          Data
        </Label>
        <Input
          id="DatePay"
          name="date"
          type="date"
        />
      </FormGroup>
    </Col>
    <Col md={4}>
      <FormGroup>
        <Label for="exampleZip">
          Total
        </Label>
        <Input
          id="exampleZip"
          name="zip"
          value={formattedTotal}
          readOnly
        />
      </FormGroup>
    </Col>
  </Row>
        <Image className="my-4" width={600} height={100} alt="" src='/barcode.png' layout="responsive"/>
        </Container>
      </main>
    </>
  )
}

export default Ticket