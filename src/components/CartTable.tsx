// src/components/CartTable.tsx

import Image from "next/image";
import { useEffect, useState } from "react";
import { Button, Col, Row, Table } from "reactstrap";
import { useCart } from "../hooks/useCart";
import { ProductType } from "../services/products";
import { useMediaQuery } from "react-responsive";
import CartResponsive from "./CartResponsive";

type CartEntry = {
  product: ProductType;
  quantity: number;
};

const CartTableRow = (props: { entry: CartEntry }) => {
  const { addProduct, removeProduct } = useCart();
  const formattedTotal = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(props.entry.product.price);

  const TotalQtd = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(props.entry.product.price * props.entry.quantity);
  
  return (
    <tr>
      <td>
        <Row className="align-items-center">
          <Col xs={4} md={2} lg={1}>
            <Image
              src={props.entry.product.imageUrl}
              alt={props.entry.product.name}
              height={500}
              width={600}
              layout="responsive"
            />
          </Col>
          <Col xs={8} md={10} lg={11}>
            {props.entry.product.name}
          </Col>
        </Row>
      </td>
      <td>R$ {formattedTotal}</td>
      <td>{props.entry.quantity}</td>
      <td>{TotalQtd}</td>
      <td>
        <Button
          color="primary"
          size="sm"
          onClick={() => addProduct(props.entry.product)}
        >
          +
        </Button>{" "}
        <Button
          color="danger"
          size="sm"
          onClick={() => removeProduct(props.entry.product.id)}
        >
          –
        </Button>
      </td>
    </tr>
  );
};

export default function CartTable() {
  const [cartEntries, setCartEntries] = useState<CartEntry[]>([]);
  const { cart } = useCart();
  const isMobile = useMediaQuery({ maxWidth: 768 });
  useEffect(() => {
    const entriesList = cart.reduce((list, product) => {
      const entryIndex = list.findIndex(
        (entry) => entry.product.id === product.id
      );

      if (entryIndex === -1) {
        return [
          ...list,
          {
            product,
            quantity: 1,
          },
        ];
      }

      list[entryIndex].quantity++;
      return list;
    }, [] as CartEntry[]);

    entriesList.sort((a, b) => a.product.id - b.product.id);
    setCartEntries(entriesList);
  }, [cart]);

  return (
    <div>
      {isMobile ? (
        <Row className="g-4">
        {cartEntries.map((entry) => (
          <Col key={`${entry.product.id}-col`} md={6} lg={4} xl={3}>
            <CartResponsive key={entry.product.id} entry={entry} />
          </Col>
        ))}
      </Row>
      ) : (
        <Table
          responsive
          className="align-middle"
          style={{ minWidth: "5rem" }}
        >
          <thead>
            <tr>
              <th>Produto</th>
              <th>Preço</th>
              <th>Qtd.</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cartEntries.map((entry) => (
              <CartTableRow key={entry.product.id} entry={entry} />
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
}
