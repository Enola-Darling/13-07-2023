import styles from "../styles/index.module.scss"
import { Inter } from 'next/font/google'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div> 
      <Link href="/contacts">
        {/* <button> contacts</button> */}
      </Link>
      <Link href="/locations">
        {/* <button className={styles.button}> Locations</button> */}
      </Link>
    </div>
  )
}
