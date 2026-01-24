import "./StatusBadge.css";

function StatusBadge({ status }) {
  return (
    <div className={`badge ${status}`}>
      {status.toUpperCase()}
    </div>
  );
}

export default StatusBadge;
