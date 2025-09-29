import React from "react";
import Tabs from "../tabs/Tabs";

type Assignee = {
  name: string;
  avatar: string;
};

type IssueDetailsProps = {
  id: string;
  title: string;
  status: string;
  priority: string;
  assignee: Assignee;
  due: string;
  description: string;
};

const IssueDetails: React.FC<IssueDetailsProps> = ({
  id,
  title,
  status,
  priority,
  assignee,
  due,
  description,
}) => {
  return (
    <div className="bg-white border border-gray-200 shadow rounded-xl p-4">
      <h2 className="text-lg font-semibold mb-4">Issue Details</h2>

      <div className="flex w-full gap-4">
        {/* Issue details */}
        <div className="w-2/3 bg-white border border-gray-200 shadow rounded-xl p-4">
          <div className="flex items-center gap-4 mb-4">
            <span className="px-[10px] py-1 bg-gray-100 rounded-full text-gray-600 border border-gray-200 text-sm">
              {id}
            </span>
            <h3 className="font-bold text-lg">{title}</h3>
          </div>

          <div className="flex items-center gap-4 mb-2 text-lg">
            <p>Label: Checkout</p>
            <p>
              <span>Status:</span>{" "}
              <span className="px-3 py-[6px] rounded-full text-xs font-medium bg-emerald-500 text-white">
                {status}
              </span>
            </p>
            <p>
              <span>Priority:</span>{" "}
              <span className="px-3 py-[6px] rounded-full text-xs font-medium bg-orange-500 text-white">
                {priority}
              </span>
            </p>
            <p className="flex items-center gap-2">
              <span>Assigned:</span>
              <img
                src={assignee.avatar}
                alt={assignee.name}
                className="w-9 h-9 rounded-full"
              />
              {assignee.name}
            </p>
            <p>Due: {due}</p>
          </div>

          <div className="bg-white border border-gray-200 shadow rounded-xl p-4 mb-4">
            <h4 className="font-semibold text-lg">Description</h4>
            <p className="">{description}</p>
          </div>

          {/* Comments */}
          <div className=" bg-white border border-gray-200 shadow rounded-xl p-4 mb-4 space-y-4">
            <Tabs tabs={["Comments", "Attachments"]} defaultTab="Comments" />

            <div className="bg-white border border-gray-200 shadow rounded-xl p-4 mb-1 space-y-5">
              <div className="flex justify-between">
                <div className="flex font-normal gap-3">
                  <img
                    src={assignee.avatar}
                    alt={assignee.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <input className="text-md border-none outline-none" type="text" placeholder="Write a comment" name="" id="" />
                </div>
                <button className="bg-blue-600 px-3 py-[6px] font-normal shadow rounded-xl cursor-pointer text-white" >
                  Comment
                </button>
              </div>
              <div>
                <div>
                  <img
                    src={assignee.avatar}
                    alt={assignee.name}
                    className="w-8 h-8 rounded-full"
                  />
                </div>
                <p>{assignee.name}</p>
                <p className="text-xs text-gray-500">Today, 10:12 AM</p>
                <p>
                  Please ensure error summary links focus the first invalid
                  feild.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Issue Activity */}

        <div className="w-1/3 bg-white border border-gray-200 shadow rounded-xl p-4">
          <h1 className="text-lg font-medium">Activity</h1>
          <div className="space-y-3">
            <div>
              <div>
                <img
                  src={assignee.avatar}
                  alt={assignee.name}
                  className="w-9 h-9 rounded-full"
                />
              </div>
              <p>{assignee.name} moved issue to In Progress</p>
              <p className="text-xs text-gray-500">Today, 10:12 AM</p>
            </div>
            <div>
              <div>
                <img
                  src="https://randomuser.me/api/portraits/women/2.jpg"
                  alt={assignee.name}
                  className="w-9 h-9 rounded-full"
                />
              </div>
              <p>Maya R. updated the hero component</p>
              <p className="text-xs text-gray-500">Yesterday</p>
            </div>
            <div>
              <p>
                Commit abc123 • Add inline error components
                <p className="text-xs text-gray-500">3 days ago</p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssueDetails;
