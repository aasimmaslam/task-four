import type React from "react";
import { issues } from "../../data/issues";

type IssueTableProps = {
  onselect: (id: string) => void;
};

const badgeColors = {
  status: {
    Backlog: "bg-gray-200 text-gray-500",
    "In Progress": "bg-emerald-500 text-white",
    "In Review": "bg-emerald-500 text-white",
  },
  priority: {
    Low: "bg-gray-200 text-gray-500",
    Medium: "bg-gray-200 text-gray-500",
    High: "bg-orange-500 text-white",
  },
};

const IssuesTable: React.FC<IssueTableProps>  = ({onselect}) => {
  return (
    <div className="bg-white border border-gray-200 shadow- rounded-xl p-4">
      <h2 className="text-lg font-semibold mb-2">All Issues</h2>
      <div className="border border-gray-200 rounded-xl overflow-hidden">
        <table className="w-full text-left ">
          <thead className="text-gray-500 font-normal bg-gray-100 rounded-2xl">
            <tr className="text-sm ">
              <th className="p-3 font-medium">Title</th>
              <th className="p-3 font-medium">Assignee</th>
              <th className="p-3 font-medium">Status</th>
              <th className="p-3 font-medium">Priority</th>
              <th className="p-3 font-medium">Due</th>
            </tr>
          </thead>
          <tbody>
            {issues.map((issue) => (
              <tr key={issue.id} className="border-y border-gray-200">
                <td className="px-3 pb-4 pt-3 text-gray-800 ">
                  <button onClick={() => onselect(issue.id)}>
                  {issue.id} • {issue.title}

                  </button>
                </td>

                <td className="p-3 flex items-center gap-2">
                  <img
                    src={issue.assignee.avatar}
                    alt={issue.assignee.name}
                    className="w-10 h-10 rounded-full"
                  />
                  {issue.assignee.name}
                </td>

                <td className="p-3">
                  <span
                    className={`px-3 py-[6px] rounded-full text-xs font-medium ${
                      badgeColors.status[issue.status]
                    }`}
                  >
                    {issue.status}
                  </span>
                </td>

                <td className="p-3">
                  <span
                    className={`px-3 py-[6px] rounded-full text-xs font-medium ${
                      badgeColors.priority[issue.priority]
                    }`}
                  >
                    {issue.priority}
                  </span>
                </td>

                <td className="p-3 text-gray-800">{issue.due}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IssuesTable;
