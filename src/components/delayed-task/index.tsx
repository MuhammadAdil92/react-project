import { ArrowRight, CircleAlert } from "lucide-react";
import hajjGroupsProject from "../../data/hajj-groups-project.json";

const { delayedTasks } = hajjGroupsProject;

const statusStyles: Record<string, string> = {
  Delayed: "bg-red-50 text-red-700",
  "In Progress": "bg-orange-50 text-orange-700",
  "On Track": "bg-emerald-50 text-emerald-700",
};

const priorityStyles: Record<string, string> = {
  High: "bg-red-50 text-red-700",
  Medium: "bg-orange-50 text-orange-700",
  Low: "bg-emerald-50 text-emerald-700",
};

const DelayedTask: React.FC = () => (
  <section className="min-w-0 rounded-xl border border-slate-200 bg-white p-2 shadow-sm">
    <header className="mb-1.5 flex flex-wrap items-center justify-between gap-1.5">
      <h2 className="flex items-center gap-2 text-base font-bold tracking-[-0.02em] text-red-600">
        <CircleAlert className="h-6 w-6 fill-red-600 text-white" strokeWidth={2.5} />
        <span>{delayedTasks.title} ({delayedTasks.count})</span>
      </h2>
      <button
        type="button"
        className="inline-flex cursor-pointer items-center gap-1 rounded-md border border-slate-200 px-2 py-1 text-[10px] font-semibold text-blue-950 shadow-sm transition-colors hover:bg-blue-50"
      >
        {delayedTasks.actionLabel}
        <ArrowRight className="h-3 w-3" />
      </button>
    </header>

    <div className="overflow-x-auto">
      <table className="w-full min-w-[520px] border-collapse text-left text-[10px] leading-[13px] xl:table-fixed xl:min-w-0">
        <colgroup>
          <col className="w-[14%]" />
          <col className="w-[16%]" />
          <col className="w-[29%]" />
          <col className="w-[29%]" />
          <col className="w-[12%]" />
        </colgroup>
        <thead>
          <tr className="border-y border-slate-200 bg-slate-50/80 text-blue-950">
            <th className="whitespace-nowrap px-2 py-1.5 font-semibold">Status</th>
            <th className="whitespace-nowrap px-2 py-1.5 font-semibold">Due Date</th>
            <th className="whitespace-nowrap px-2 py-1.5 text-[9px] font-semibold">Responsible Department</th>
            <th className="whitespace-nowrap px-2 py-1.5 font-semibold">Task</th>
            <th className="whitespace-nowrap px-2 py-1.5 text-center font-semibold">Priority</th>
          </tr>
        </thead>
        <tbody>
          {delayedTasks.tasks.map((task) => (
            <tr key={task.id} className="border-b border-slate-100 last:border-b-0">
              <td className="whitespace-nowrap px-2 py-1">
                <span className={`inline-block min-w-[58px] whitespace-nowrap rounded-md px-2 py-1 text-center font-semibold ${statusStyles[task.status]}`}>
                  {task.status}
                </span>
              </td>
              <td className="whitespace-nowrap px-2 py-1 text-slate-700">{task.dueDate}</td>
              <td className="whitespace-nowrap px-2 py-1 text-slate-700">{task.department}</td>
              <td className="whitespace-nowrap px-2 py-1 text-slate-700">{task.task}</td>
              <td className="whitespace-nowrap px-2 py-1 text-center">
                <span className={`inline-block min-w-[58px] whitespace-nowrap rounded-md px-2 py-1 font-semibold ${priorityStyles[task.priority]}`}>
                  {task.priority}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </section>
);

export default DelayedTask;
