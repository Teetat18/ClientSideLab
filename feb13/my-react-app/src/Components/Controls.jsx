export default function Controls({ activeIndex, setActiveIndex }) {
  const handleDecrement = () => {
    activeIndex > 0 ? setActiveIndex(activeIndex - 1) : setActiveIndex(29);
  };
  const handleIncrement = () => {
        activeIndex < 29 ? setActiveIndex(activeIndex + 1) : setActiveIndex(0);
    };
  return (
    <div>
      <button className="left" onClick={handleDecrement}>
        {"<"}
      </button>
      <button className="right" onClick={handleIncrement}>
        {">"}
      </button>
    </div>
  );
}
