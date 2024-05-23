// components/PaymentMethods.tsx

import React from 'react';
import styles from './PaymentMethods.module.css';

interface PaymentMethodsProps {
  onCreditCardClick: () => void;
  onPixClick: () => void;
  onTicketClick: () => void;
}
const PaymentMethods: React.FC<PaymentMethodsProps> = ({ onCreditCardClick, onPixClick, onTicketClick }) => {
  
  return (
    <ul className={styles.example2}>
      <li className={styles.iconContent}>
        <a href="#" aria-label="Boleto" data-social="boleto" onClick={onTicketClick}>
          <div className={styles.filled}></div>
          <svg fill="#000000" width="800px" height="800px" viewBox="-4 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <title>barcode</title>
            <path d="M0 25.281h0.781v-18.563h-0.781v18.563zM2.344 25.281h1.531v-18.563h-1.531v18.563zM5.406 25.281h1.563v-18.563h-1.563v18.563zM8.5 25.281h3.125v-18.563h-3.125v18.563zM13.156 25.281h2.344v-18.563h-2.344v18.563zM17.031 25.281h1.563v-18.563h-1.563v18.563zM20.125 25.281h0.781v-18.563h-0.781v18.563zM22.469 25.281h1.531v-18.563h-1.531v18.563z"></path>
          </svg>
        </a>
        <div className={styles.tooltip}><strong>Boleto</strong></div>
      </li>
      <li className={styles.iconContent}>
        <a href="#" aria-label="PIX" data-social="pix" onClick={onPixClick}>
          <div className={styles.filled}></div>
          <svg fill="#000000" width="800px" height="800px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.917 11.71a2.046 2.046 0 0 1-1.454-.602l-2.1-2.1a.4.4 0 0 0-.551 0l-2.108 2.108a2.044 2.044 0 0 1-1.454.602h-.414l2.66 2.66c.83.83 2.177.83 3.007 0l2.667-2.668h-.253zM4.25 4.282c.55 0 1.066.214 1.454.602l2.108 2.108a.39.39 0 0 0 .552 0l2.1-2.1a2.044 2.044 0 0 1 1.453-.602h.253L9.503 1.623a2.127 2.127 0 0 0-3.007 0l-2.66 2.66h.414z"/>
            <path d="m14.377 6.496-1.612-1.612a.307.307 0 0 1-.114.023h-.733c-.379 0-.75.154-1.017.422l-2.1 2.1a1.005 1.005 0 0 1-1.425 0L5.268 5.32a1.448 1.448 0 0 0-1.018-.422h-.9a.306.306 0 0 1-.109-.021L1.623 6.496c-.83.83-.83 2.177 0 3.008l1.618 1.618a.305.305 0 0 1 .108-.022h.901c.38 0 .75-.153 1.018-.421L7.375 8.57a1.034 1.034 0 0 1 1.426 0l2.1 2.1c.267.268.638.421 1.017.421h.733c.04 0 .079.01.114.024l1.612-1.612c.83-.83.83-2.178 0-3.008z"/>
          </svg>
        </a>
        <div className={styles.tooltip}><strong>PIX</strong></div>
      </li>
      <li className={styles.iconContent}>
        <a href="#" aria-label="Cartão de Crédito" data-social="credit-card" onClick={onCreditCardClick}>
          <div className={styles.filled}></div>
          <svg fill="#000000" width="800px" height="800px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <g>
              <path d="M127.633,215.98h215.568c29.315,0,53.166,23.851,53.166,53.166v14.873h38.061c22.735,0,41.166-18.432,41.166-41.167v-69.608H127.633V215.98z"/>
              <path d="M434.428,74.2H168.799c-22.735,0-41.166,18.431-41.166,41.166v17.479h347.961v-17.479C475.594,92.631,457.163,74.2,434.428,74.2z"/>
              <path d="M343.201,227.98H77.572c-22.735,0-41.166,18.431-41.166,41.166v127.487c0,22.735,18.431,41.166,41.166,41.166h265.629c22.736,0,41.166-18.431,41.166-41.166V269.146C384.367,246.412,365.938,227.98,343.201,227.98z M131.542,329.846c0,4.92-3.989,8.909-8.909,8.909H75.289c-4.92,0-8.908-3.989-8.908-8.909v-29.098c0-4.921,3.988-8.909,8.908-8.909h47.344c4.92,0,8.909,3.988,8.909,8.909V329.846z M300.961,413.039c-10.796,0-19.548-8.752-19.548-19.549s8.752-19.549,19.548-19.549c10.797,0,19.549,8.752,19.549,19.549S311.758,413.039,300.961,413.039z M345.271,413.039c-10.797,0-19.549-8.752-19.549-19.549s8.752-19.549,19.549-19.549c10.796,0,19.548,8.752,19.548,19.549S356.067,413.039,345.271,413.039z"/>
            </g>
          </svg>
        </a>
        <div className={styles.tooltip}><strong>Cartão</strong></div>
      </li>
    </ul>
  );
};

export default PaymentMethods;
