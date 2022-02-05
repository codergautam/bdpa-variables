import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useState} from 'react';
import Link from 'next/link';

function calcGrade(num) {
  if(num >= 90) return "A"
  else if(num >= 80) return "B"
  else if(num >= 70) return "C"
  else if(num >= 60) return "D"
  else return "F"
}


function GradeSolver() {
  var [grade, setGrade] = useState("")
  var [num, setNum] = useState("")
  return (
    <div>
    <br/>
     <TextField id="outlined-basic" onChange={(e)=>setNum(e.target.value)} label="Enter score" variant="outlined" fullWidth/>
     <br/><br/>
    <center><Button onClick={()=>setGrade(calcGrade(num))} variant="outlined">Calculate</Button></center>
    <br/>
    <br/>
    <br/>
    <center>Your grade is: <b>{grade}</b></center>
    </div>
  )
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>Will
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
         Grades
        </h1>

        <GradeSolver/>
      </main>

      <footer className={styles.footer}>

          <p><Link href="/">Go home</Link></p>
 
      </footer>
    </div>
  )
}
