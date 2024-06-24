import "./style.css";

const index = () => {
  const span = [1, 2, 3, 4, 5, 6];
  return (
    <div className="relative w-full h-screen bg-cyan-700 overflow-hidden flex justify-center items-center">
      <div className="ripple-main">
        {span.map((i) => (
          <span key={i} style={{ "--i": i }}></span>
        ))}
      </div>
    </div>
  );
};

export default index;
