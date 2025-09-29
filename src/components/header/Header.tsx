import HeaderBtn from "../ui/HeaderBtn";

const Header = () => {
  const btnLabels: string[] = [
    "Filters",
    "Status: Any",
    "Priority: Any",
    "Assignee",
  ];

  return (
    <>
      <div className="flex justify-between items-center bg-white rounded-xl px-5 py-4 shadow">
        <div className="flex gap-6 items-center ">
          <div className=" bg-gray-100 px-2 py-1 rounded-lg">
            <p className="text-xs text-gray-500">PRJ-42</p>
          </div>
          <div>
            <h1 className="text-3xl font-semibold">Website Redesign</h1>
          </div>
        </div>
        <div className="flex gap-4">
          {btnLabels.map((item, index) => (
            <HeaderBtn key={index} label={item} />
          ))}
          <div>
            <button className="bg-blue-600 px-3 py-[6px] font-normal shadow rounded-xl cursor-pointer text-white">
              New Issue
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
