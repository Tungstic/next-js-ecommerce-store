import Image from 'next/image';
import styles from './page.module.scss';

export default function HomePage() {
  return (
    <main>
      <h1>Welcome to our exquisite cake shop</h1>
      <div className={styles.heroSection}>
        <Image
          src="/main.jpg"
          alt="cake decorated with flowers"
          priority={true}
          width={600}
          height={400}
          unoptimized={true}
        />
        <p style={{ fontSize: '1.2rem' }}>
          ... where every bite is a celebration of flavor and artistry. Indulge
          your senses in a world of delightful confections that are as delicious
          as they are visually stunning. Our passion for crafting the perfect
          cake is evident in every creation that leaves our kitchen. We believe
          in the power of quality ingredients and expert craftsmanship. Our
          skilled bakers pour their heart and soul into each cake, ensuring that
          every slice is a moment of pure bliss. From classic flavors to unique
          and whimsical combinations, our menu is a symphony of taste that will
          captivate even the most discerning palates. What sets us apart is the
          meticulous attention to detail that goes into the design of our cakes.
          Each creation is a masterpiece, handcrafted with precision and care.
          Whether you're celebrating a birthday, wedding, or any special
          occasion, our cakes will be the centerpiece that leaves your guests in
          awe. Indulge yourself in the world of delectable flavors and artistic
          cakes that will leave a lasting impression; your celebrations will
          never be the same again.
        </p>
      </div>
    </main>
  );
}
