import walkingBG from "../assets/walkingBG.jpg";
import walking3d from "../assets/anime3dWalking.gif";
import happy from "../assets/animeRotatingHappy.gif";
const Walking = () => {
  return (
    <>
      <div
        className="h-[100vh] w-full relative"
        style={{
          background: `url(${walkingBG}) no-repeat`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute bottom-0 left-0 w-full">
          <img
            className="h-72 animate-marquee2"
            src={happy}
            alt="happy happy happy"
          />
          <img className="h-96 animate-marquee" src={walking3d} alt="walking" />
        </div>
      </div>
    </>
  );
};

export default Walking;
