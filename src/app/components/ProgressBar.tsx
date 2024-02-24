import React from "react";

const ProgressBar = ({ progress }: { progress: number }) => {
  return (
    <div className="w-full rounded-full overflow-hidden h-2 border">
      <div
        className="h-full"
        style={{
          width: progress + "%",
          backgroundImage:
            "repeating-linear-gradient(-45deg, blue 0%, blue 1%, #3588EE 1%, #3588EE 2%)",
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
