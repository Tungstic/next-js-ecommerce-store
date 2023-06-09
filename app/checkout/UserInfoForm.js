'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { emptyCart } from './emptyCart';
import styles from './form.module.scss';

export default function UserInfoForm() {
  const router = useRouter();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');
  const [creditCard, setCreditCard] = useState('');
  const [expDate, setExpDate] = useState('');
  const [securityCode, setSecurityCode] = useState('');

  function validate() {
    return (
      firstName.length &&
      lastName.length &&
      email.length &&
      address.length &&
      city.length &&
      postalCode.length &&
      country.length &&
      creditCard.length &&
      expDate.length &&
      securityCode.length
    );
  }

  const isValid = validate();

  return (
    <form className={styles.info}>
      <label>
        First name
        <input
          data-test-id="checkout-first-name"
          value={firstName}
          onChange={(e) => setFirstName(e.currentTarget.value)}
          required
        />
      </label>
      <label>
        Last name
        <input
          data-test-id="checkout-last-name"
          value={lastName}
          onChange={(e) => setLastName(e.currentTarget.value)}
          required
        />
      </label>
      <label>
        Email
        <input
          data-test-id="checkout-email"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
          required
        />
      </label>
      <label>
        Address
        <input
          data-test-id="checkout-address"
          value={address}
          onChange={(e) => setAddress(e.currentTarget.value)}
          required
        />
      </label>
      <label>
        City
        <input
          data-test-id="checkout-city"
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          required
        />
      </label>
      <label>
        Postal code
        <input
          data-test-id="checkout-postal-code"
          value={postalCode}
          onChange={(e) => setPostalCode(e.currentTarget.value)}
          required
        />
      </label>
      <label>
        Country
        <input
          data-test-id="checkout-country"
          value={country}
          onChange={(e) => setCountry(e.currentTarget.value)}
          required
        />
      </label>
      <label>
        Credit card
        <input
          data-test-id="checkout-credit-card"
          value={creditCard}
          onChange={(e) => setCreditCard(e.currentTarget.value)}
          required
        />
        <label>
          Expiration date
          <input
            data-test-id="checkout-expiration-date"
            value={expDate}
            onChange={(e) => setExpDate(e.currentTarget.value)}
            required
          />
        </label>
        <label>
          Security code
          <input
            data-test-id="checkout-security-code"
            value={securityCode}
            onChange={(e) => setSecurityCode(e.currentTarget.value)}
            required
          />
        </label>
      </label>
      <button
        type="button"
        data-test-id="checkout-confirm-order"
        disabled={!isValid}
        onClick={async () => {
          await emptyCart();
          router.push('/checkout/thank-you');
          router.refresh();
        }}
      >
        Confirm order
      </button>
    </form>
  );
}
