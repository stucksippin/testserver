'use client'

export default function Home() {
  async function sendMsg() {
    const resp = await fetch("http://localhost:3000/api/test?msg=123123&item=asf")
  }
  return (
    <button className="border" onClick={sendMsg}>SEND FORWARDER MESSAGE</button>
  )

}
