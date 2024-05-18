// src/components/ProductCard.tsx

import Image from "next/image";

import React, { useState } from "react";
import { Button, Card, CardBody, CardSubtitle } from "reactstrap";
import { ProductType } from "../services/products";
import SuccessToast from "./SuccessToast";
import { useCart } from "../hooks/useCart";

type CartEntry = {
    product: ProductType;
    quantity: number;
  };

const CartResponsive = (props: { entry: CartEntry }) => {
  const [toastIsOpen, setToastIsOpen] = useState(false);
 
  const { addProduct, removeProduct} = useCart()
  return (
    <>
      <Card>
        
        <Image
              src={props.entry.product.imageUrl}
              alt={props.entry.product.name}
              height={500}
              width={600}
              layout="responsive"
            />
        
        <CardBody>
          

          <CardSubtitle className="mb-3 text-muted" tag="h6">
           Valor Unid.: R$ {props.entry.product.price}
          </CardSubtitle>
          <CardSubtitle className="mb-3 text-muted" tag="h6">
           Qtd.: {props.entry.quantity}
          </CardSubtitle>
          <CardSubtitle className="mb-3 text-muted" tag="h6">
           Total: R$ {props.entry.product.price * props.entry.quantity}
          </CardSubtitle>

          <Button
          color="primary"
          size="sm"
          onClick={() => addProduct(props.entry.product)}
        >
          +
        </Button>{"  "}
        <Button
          color="danger"
          size="sm"
          onClick={() => removeProduct(props.entry.product.id)}
        >
          –
        </Button>
        </CardBody>
      </Card>

      <SuccessToast toastIsOpen={toastIsOpen} setToastIsOpen={setToastIsOpen} />
    </>
  );
};

export default CartResponsive;
