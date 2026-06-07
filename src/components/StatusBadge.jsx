import { statusConfig } from "../Data/Project_Card_Data/statusConfig.js"

function StatusBadge({ status }) {
    const config = statusConfig[status] ?? statusConfig.default
  return (
    <span className={`text-center px-2 py-2 rounded ${config.className}`}>
      {config.label || status}
    </span>
  )
}

export default StatusBadge
