import Header from "../components/header/Header";
import Tabs from "../components/tabs/Tabs";
import IssuesTable from "../components/issues-table/IssuesTable";
import IssueDetails from "../components/issue-details/IssueDetails";
import { useState } from "react";
import { issues } from "../data/issues";

const IssuePage = () => {
  

  const [selectedIssueId, setSelectedIssueId] = useState<string>(issues[0].id);
  const selectedIssue = issues.find((issue) => issue.id === selectedIssueId)!;

  return (
    <>
      <div className="p-10 bg-gray-50 space-y-5">
        <Header />
        <div className="space-y-5 pb-5 bg-white rounded-xl shadow border border-gray-200">
          <Tabs tabs={["Issues", "Board", "Members", "Activity", "Settings"]} defaultTab="Issues"/>
          <IssuesTable onselect={(id) => setSelectedIssueId(id)} />
          <IssueDetails {...selectedIssue} />
        </div>
      </div>
    </>
  );
};

export default IssuePage;
