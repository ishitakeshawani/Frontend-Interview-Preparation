const Accordian = ({ label, children, isopen, onChange }) => {
  return (
    <div className="wrapper">
      <button className={`toggler ${isopen && "active"}`} onClick={onChange}>
        {label}
      </button>
      <div className={`pannel ${isopen && "active"}`}>
        <div className="contentwarpper">{children}</div>
      </div>
    </div>
  );
};

Accordian.defaultProps = {
  isOpen: false,
  label: "Accordian",
  children: null,
};

export default Accordian;
