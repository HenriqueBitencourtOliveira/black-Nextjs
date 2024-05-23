import React, { ChangeEvent, useState } from "react";
import styles from "./CreditCard.module.css";
import { Button } from "reactstrap";

const CardCredit = () => {
  const [cardNumber, setCardNumber] = useState("");

  const formatCardNumber = (input: string) => {
    const formattedInput = input.replace(/\D/g, "");

    const formattedGroups = formattedInput.match(/.{1,4}/g) || [];

    const formattedNumber = formattedGroups.join(" ");

    return formattedNumber;
  };

  const [expiry, setExpiry] = useState("");

  const formatExpiry = (input: string) => {
    // Remove todos os caracteres não numéricos
    const formattedInput = input.replace(/\D/g, "");

    // Adiciona a barra após os primeiros dois caracteres
    if (formattedInput.length > 2) {
      return `${formattedInput.slice(0, 2)}/${formattedInput.slice(2)}`;
    } else {
      return formattedInput;
    }
  };

  const handleExpiryChange = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    const formattedExpiry = formatExpiry(input);
    setExpiry(formattedExpiry);
  };

  const handleCardNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    const formattedNumber = formatCardNumber(input);
    setCardNumber(formattedNumber);
  };

  return (
   <>
    <div className={styles.visaCard}>
      <div className={styles.logoContainer}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="23"
          height="23"
          viewBox="0 0 48 48"
          className={styles.svgLogo}
        >
          <path
            fill="#ff9800"
            d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z"
          ></path>
          <path
            fill="#d50000"
            d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z"
          ></path>
          <path
            fill="#ff3d00"
            d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z"
          ></path>
        </svg>
      </div>
      <div className={styles.numberContainer}>
        <label className={styles.inputLabel} htmlFor="cardNumber">
          Número do cartão
        </label>
        <input
          className={styles.inputStyle}
          id="cardNumber"
          placeholder="XXXX XXXX XXXX XXXX"
          maxLength={19} // 16 caracteres + 3 espaços
          name="cardNumber"
          type="text"
          value={cardNumber}
          onChange={handleCardNumberChange}
        />
      </div>

      <div className={styles.nameDateCvvContainer}>
        <div className={styles.nameWrapper}>
          <label className={styles.inputLabel} htmlFor="holderName">
            CARD HOLDER
          </label>
          <input
            className={styles.inputStyle}
            id="holderName"
            placeholder="NAME"
            type="text"
          />
        </div>

        <div className={styles.expiryWrapper}>
          <label className={styles.inputLabel} htmlFor="expiry">
            VALID THRU
          </label>
          <input
            className={styles.inputStyle}
            id="expiry"
            placeholder="MM/YY"
            maxLength={5} // MM/YY
            type="text"
            value={expiry}
            onChange={handleExpiryChange}
          />
        </div>
        <div className={styles.cvvWrapper}>
          <label className={styles.inputLabel} htmlFor="cvv">
            CVV
          </label>
          <input
            className={styles.inputStyle}
            placeholder="***"
            maxLength={3}
            id="cvv"
            type="password"
          />
        </div>
      </div>
    </div>
      
   </>
  
  );
};

export default CardCredit;
