import "../styles/progressbar.css";

function ProgressBar({ progress }) {
  return (
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${progress}%` }} />
    </div>
  );
}

export default ProgressBar;
