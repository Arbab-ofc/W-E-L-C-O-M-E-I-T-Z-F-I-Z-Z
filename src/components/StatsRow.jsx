export default function StatsRow({ stats }) {
  return (
    <div className="stats-row" role="list">
      {stats.map((stat) => (
        <div className={`stat-card ${stat.tone}`} role="listitem" key={stat.value}>
          <div className="stat-value">{stat.value}</div>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
