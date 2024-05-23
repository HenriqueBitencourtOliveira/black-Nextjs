import React, { useState } from 'react';
import PaymentMethods from "@/components/PaymentMethods/PaymentMethods";
import Header from "../components/Header";
import { NextPage } from "next";
import Head from "next/head";
import { Container } from "reactstrap";
import CreditCard from "@/components/CardCredit/CardCredit";
import Pix from '@/components/Pix';
import Ticket from '@/components/Ticket';

const Payment: NextPage = () => {
  const [showCreditCard, setShowCreditCard] = useState(false);
  const [showPix, setShowPix] = useState(false);
  const [showTicket, setShowTicket] = useState(false);

  const handleCreditCardClick = () => {
    setShowCreditCard(true);
    setShowPix(false);
    setShowTicket(false);
  };

  const handlePixClick = () => {
    setShowPix(true);
    setShowCreditCard(false);
    setShowTicket(false);
  };

  const handleTicketClick = () => {
    setShowTicket(true);
    setShowCreditCard(false);
    setShowPix(false);
  };

  return (
    <>
      <Head>
        <title>Carrinho</title>
        <meta name="description" content="Meu carrinho de compras" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Container className="mb-5">
          <div style={{ marginTop: "5rem" }} className="d-flex justify-content-center">
            <PaymentMethods 
              onCreditCardClick={handleCreditCardClick} 
              onPixClick={handlePixClick} 
              onTicketClick={handleTicketClick} 
            />
          </div>
          {showCreditCard && (
            <div className="d-flex justify-content-center">
              <CreditCard />
            </div>
          )}
          {showPix && (
            <div className="d-flex justify-content-center">
              <Pix />
            </div>
          )}
          {showTicket && (
            <div className="d-flex justify-content-center">
              <Ticket />
            </div>
          )}
        </Container>
      </main>
    </>
  )
}

export default Payment;
