import { statusConfig } from "../Data/Project_Card_Data/statusConfig"

function StatusBadge({ status }) {
    console.log(status)
    const config = statusConfig[status] ?? statusConfig.default
    // console.log(config.className)
    // console.log(config.label)
  return (
    <span className={`text-center px-2 py-2 rounded ${config.className}`}>
      {config.label || status}
    </span>
  )
}

export default StatusBadge
