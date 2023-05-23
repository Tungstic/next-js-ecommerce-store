import ConfirmOrderButton from './ConfirmOrder';
import styles from './page.module.scss';

export default function CheckoutPage() {
  return (
    <main>
      <div>Your total is: total</div>
      <div>
        Please fill out and submit the form by clicking "Confirm order" button
      </div>

      <form className={styles.info}>
        <label>
          First name
          <input />
        </label>
        <label>
          Last name
          <input />
        </label>
        <label>
          Email
          <input />
        </label>
        <label>
          Address
          <input />
        </label>
        <label>
          City
          <input />
        </label>
        <label>
          Postal code
          <input />
        </label>
        <label>
          Country
          <input />
        </label>
        <label>
          Credit card
          <input />
          <label>
            Expiration date
            <input />
          </label>
          <label>
            Security code
            <input />
          </label>
        </label>
        <ConfirmOrderButton />
      </form>
    </main>
  );
}
