'use client'
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import axios from "axios";
import { Wrapper } from "./components/Wrapper/Wrapper";

export default function Home() {
   return (
    <div className={styles.page}>
      <Wrapper/>
    </div>
  );
}
