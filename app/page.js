/*import Image from "next/image";*/
import Link from 'next/link';



import classes from "./page.module.css";


export default function Home() {
  return (
    <div className={classes.container}>
      <h1 className={classes.header}>Neo IoT</h1>
      <div className={classes.content}>
        <p>
          Welcome to the Next Era of Internet of Things!
        </p>
        <br />
        <br />
        <p className={classes.bold}>
        <Link  href='/login'>Please Log In!</Link>
        </p>
      </div>
    </div>
  );
}
