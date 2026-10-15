import { CalendarDays } from "lucide-react";
import hajjGroupsProject from "../../data/hajj-groups-project.json";

const { projectScheduleProgress } = hajjGroupsProject;

const chart = {
  left: 34,
  right: 406,
  top: 12,
  bottom: 105,
};

const xPosition = (index: number) =>
  chart.left +
  (index * (chart.right - chart.left)) /
    (projectScheduleProgress.periods.length - 1);

const yPosition = (value: number) =>
  chart.bottom - (value / 100) * (chart.bottom - chart.top);

const ProjectScheduleProgress: React.FC = () => (
  <section className="min-w-0 rounded-xl border border-slate-200 bg-white p-2 shadow-sm">
    <header className="mb-1 flex flex-wrap items-center justify-between gap-1.5">
      <h2 className="flex items-center gap-1.5 text-[13px] font-bold text-blue-950">
        <CalendarDays className="h-4 w-4" strokeWidth={2.5} />
        {projectScheduleProgress.title}
      </h2>
      <div className="flex items-center gap-2 text-[9px] font-semibold text-slate-600">
        {projectScheduleProgress.series.map((series) => (
          <span key={series.id} className="flex items-center gap-1">
            <span
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: series.color }}
            />
            {series.name}
          </span>
        ))}
      </div>
    </header>

    <div className="w-full overflow-hidden">
      <svg
        viewBox="0 0 420 130"
        className="h-auto w-full"
        role="img"
        aria-label="Planned and actual project progress by season period"
      >
        {[0, 25, 50, 75, 100].map((tick) => {
          const y = yPosition(tick);
          return (
            <g key={tick}>
              <text
                x="26"
                y={y + 3}
                textAnchor="end"
                className="fill-slate-500"
                fontSize="10"
              >
                {tick}%
              </text>
              <line
                x1={chart.left}
                y1={y}
                x2={chart.right}
                y2={y}
                stroke="#e8edf3"
                strokeWidth="1"
              />
            </g>
          );
        })}

        {projectScheduleProgress.periods.map((period, index) => (
          <g key={period}>
            <line
              x1={xPosition(index)}
              y1={chart.top}
              x2={xPosition(index)}
              y2={chart.bottom}
              stroke="#f1f4f7"
              strokeWidth="1"
            />
            <text
              x={xPosition(index)}
              y="119"
              textAnchor="middle"
              className="fill-slate-600"
              fontSize="9"
            >
              {period}
            </text>
          </g>
        ))}

        {projectScheduleProgress.series.map((series) => {
          const points = series.values
            .map((value, index) => `${xPosition(index)},${yPosition(value)}`)
            .join(" ");
          const areaPoints =
            `${xPosition(0)},${chart.bottom} ${points} ` +
            `${xPosition(series.values.length - 1)},${chart.bottom}`;

          return (
            <g key={series.id}>
              {series.id === "planned" && (
                <polygon points={areaPoints} fill={series.color} opacity="0.08" />
              )}
              <polyline
                points={points}
                fill="none"
                stroke={series.color}
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {series.values.map((value, index) => (
                <circle
                  key={`${series.id}-${index}`}
                  cx={xPosition(index)}
                  cy={yPosition(value)}
                  r="3"
                  fill="white"
                  stroke={series.color}
                  strokeWidth="2"
                />
              ))}
            </g>
          );
        })}
      </svg>
    </div>
  </section>
);

export default ProjectScheduleProgress;
