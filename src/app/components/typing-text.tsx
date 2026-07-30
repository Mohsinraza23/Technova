"use client"

import { TypeAnimation } from "react-type-animation"

export default function TypingText() {
  return (
    <TypeAnimation
      sequence={[
        "AI Products", 2000,
        "AI Automation", 2000,
        "Custom Software", 2000,
        "AI Agents", 2000,
        "Intelligent Solutions", 2000,
      ]}
      wrapper="span"
      speed={50}
      className="gradient-text"
      repeat={Infinity}
    />
  )
}
