import React from "react";

const ProgressBar = ({ progress }: { progress: number }) => {
  return (
    <div className="w-full bg-gray-100 rounded-full overflow-hidden h-2 border border-gray-300">
      <div
        className="h-full"
        style={{
          width: progress + "%",
          backgroundImage:
            "repeating-linear-gradient(-45deg, blue 0px, blue 4px, #3588EE 4px, #3588EE 8px)",
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
