"use client"

import { TypeAnimation } from "react-type-animation"

export default function TypingText() {
  return (
    <TypeAnimation
      sequence={[
        "AI Chatbots", 2000,
        "AI Employees", 2000,
        "Web Applications", 2000,
        "Mobile Apps", 2000,
        "Your Digital Future", 2000,
      ]}
      wrapper="span"
      speed={50}
      className="gradient-text"
      repeat={Infinity}
    />
  )
}
