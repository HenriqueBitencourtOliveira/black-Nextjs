// src/components/CartTotal.tsx

import { Card, CardBody } from "reactstrap";
import { useCart } from "../hooks/useCart";

const CartTotal = () => {
  const { cart } = useCart()
  const totalValue = cart.reduce((total, product) => total + product.price, 0);
  const formattedTotal = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(totalValue);
  return (
    <Card className="ms-auto" style={{ maxWidth: '20rem' }}>
      <CardBody className="d-flex justify-content-between">
        <strong>
          Total:
        </strong>
        <span>
          {formattedTotal}
        </span>
      </CardBody>
    </Card>
  )
}

export default CartTotal