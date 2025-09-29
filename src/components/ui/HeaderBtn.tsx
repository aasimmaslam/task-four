type ButtonProps = {
  label: string;
};

const HeaderBtn = ({ label }: ButtonProps) => {
  return (
    <>
      <button className="px-4 py-[6px] font-normal shadow rounded-lg cursor-pointer">
        {label}
      </button>
    </>
  );
};

export default HeaderBtn;
