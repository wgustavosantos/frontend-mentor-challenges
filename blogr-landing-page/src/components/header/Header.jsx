import styles from './Header.module.css';
import Image from 'next/image';
import logo from '@images/logo.svg';
import Link from 'next/link';

export default function Header() {
  return (  
    <header className={styles.header}>
      <div className={`${styles.headerContainer} wrapper`}>

        <div className={styles.headerNavbar}>

          <Link href='#'><div><Image src={logo} alt='Logo'/></div></Link>

          <nav className={styles.navbar}>
            <ul>
              <li>Product</li>  
              <li>Company</li>
              <li>Connect</li>
            </ul>
          </nav>
          
          <div className={styles.headerButtonAuth}>
            <button>Login</button>
            <button>Sign Up</button>
          </div>

        </div>
     
        <div className={styles.headerText}>
          <h1>A modern publishing platform</h1>
          <h2>Grow your audience and build your online brand</h2>
          <div>
            <button>Start for Free</button>
            <button>Learn More</button>
          </div>
          
        </div>
   
      </div>
    </header>
  );
}