import { FaHeartCirclePlus } from "react-icons/fa6";
// import { FaRegHeart } from "react-icons/fa";

const ProgressBar = ({ progress }: { progress: number }) => {
  const style = {
    main: {
      position: "relative",
      width: "100px",
      height: "100px",
      margin: "0 auto",
    },
    quarter: {
      position: "absolute",
      width: "50%",
      height: "50%",
    },
    quarter1: {
      top: "0",
      left: "0",
      background:
        "linear-gradient(rgba(242,44,144,1) 0%, rgba(74,129,215,1) 100%)",
      borderRadius: "100% 0 0 0",
    },
    quarter2: {
      top: "0",
      right: "0",
      background:
        "linear-gradient(rgba(242,44,150,1) 0%, rgba(246,3,16,1) 100%)",
      borderRadius: "0 100% 0 0",
    },
    quarter3: {
      bottom: "0",
      left: "0",
      background:
        "linear-gradient(rgba(74,129,215,1) 0%, rgba(152,149,204,1) 100%)",
      borderRadius: "0 0 0 100%",
    },
    quarter4: {
      bottom: "0",
      right: "0",
      backgroundColor: "",
      borderRadius: "0 0 100% 0",
    },
    cutout: {
      width: "80%",
      height: "80%",
      backgroundColor: "#E2E6E9",
      position: "absolute",
      top: "10%",
      left: "10%",
      borderRadius: "50%",
      pointerEvents: "none",
    },
    heart: {
      width: "30%",
      height: "30%",
      position: "absolute",
      bottom: "-10%",
      // bottom: "-9%",
      left: "40%",
      // left: "54%",
      // color: "rgba(152,149,204,1)",
      color: "red",
    },
  } as const;
  return (
    <div className="w-full">
      {/* <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden border border-gray-300">
        <div
          className="h-full"
          style={{
            width: progress + "%",
            backgroundImage:
              "repeating-linear-gradient(-45deg, blue 0px, blue 4px, #3588EE 4px, #3588EE 8px)",
          }}
        ></div>
      </div> */}
      <div style={style.main}>
        <div style={{ ...style.quarter, ...style.quarter1 }}></div>
        <div style={{ ...style.quarter, ...style.quarter2 }}></div>
        <div style={{ ...style.quarter, ...style.quarter3 }}></div>
        <div style={{ ...style.quarter, ...style.quarter4 }}></div>
        <div style={style.cutout}>
          <p className="text-center mt-[34%] font-bold text-[#f60310]">
            {progress}%
          </p>
        </div>
        {/* <FaRegHeart style={style.heart} /> */}
        <FaHeartCirclePlus style={style.heart} />
      </div>
    </div>
  );
};

export default ProgressBar;
