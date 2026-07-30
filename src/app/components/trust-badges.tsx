import { ShieldCheck, Lock, Server, FileCheck } from "lucide-react"

const BADGES = [
  { icon: <ShieldCheck className="h-4 w-4" />, label: "FMCSA Official API" },
  { icon: <Lock className="h-4 w-4" />, label: "SSL Encrypted" },
  { icon: <Server className="h-4 w-4" />, label: "No Data Stored" },
  { icon: <FileCheck className="h-4 w-4" />, label: "Privacy First" },
]

interface Props {
  className?: string
  compact?: boolean
}

export default function TrustBadges({ className = "", compact = false }: Props) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {BADGES.map((b) => (
        <div
          key={b.label}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full"
          style={{
            background: "rgba(201,168,76,0.06)",
            border: "1px solid rgba(201,168,76,0.15)",
            color: "#8898AA",
          }}
        >
          <span style={{ color: "#C9A84C" }}>{b.icon}</span>
          {!compact && (
            <span className="text-xs font-medium whitespace-nowrap">{b.label}</span>
          )}
        </div>
      ))}
    </div>
  )
}
