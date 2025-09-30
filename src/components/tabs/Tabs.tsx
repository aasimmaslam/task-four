import { useState } from "react";
interface TabsProps {
  tabs: string[];
  defaultTab?: string;
  onChange?: (tab: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ tabs, defaultTab, onChange }) => {
  const [activeTab, setActiveTab] = useState<string>(defaultTab || tabs[0]);
  
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    onChange?.(tab);
  };

  return (
    <>
      <div className="flex gap-3 px-2 pt-3 bg-white rounded-xl border border-gray-200 shadow">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`pb-3 px-3 text-md font-medium border-b-3 cursor-pointer ${
              activeTab === tab
                ? "border-blue-500 text-black"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </>
  );
};

export default Tabs;
