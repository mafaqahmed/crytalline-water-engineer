"use client";
import React, { useEffect, useRef, useState } from "react";
import type { IconType } from "react-icons";

const Main = ({
  children,
  Icon,
}: {
  children: React.ReactNode;
  Icon?: IconType;
}) => {
  const [hide, setHide] = useState(false);
  const [dimensions, setDimensions] = useState([0, 0]);
  const divRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<{
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  }>({
    top: "-99999px",
    bottom: "",
    left: "",
    right: "-99999px",
  });

  useEffect(() => {
    if (divRef.current) {
      setDimensions([
        divRef.current.clientWidth || 0,
        divRef.current.clientHeight || 0,
      ]);
      divRef.current.style.zIndex = "100";
    }
    setHide(true);
  }, []);

  const eventListenerToggle = () => {
    setHide(true);
  };

  const onToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    const width = dimensions[0];
    const height = dimensions[1];

    const tempPos: {
      top?: Number;
      bottom?: Number;
      left?: Number;
      right?: Number;
    } = {
      top: undefined,
      bottom: undefined,
      left: undefined,
      right: undefined,
    };

    if (e.clientX + width + 10 > window.innerWidth) {
      tempPos.right = window.innerWidth - e.clientX;
    } else {
      tempPos.left = e.clientX;
    }

    if (e.clientY + height + 10 > window.innerHeight) {
      tempPos.bottom = window.innerHeight - e.clientY + 10;
    } else {
      tempPos.top = e.clientY + 10;
    }

    setPos({
      top: tempPos.top ? tempPos.top + "px" : undefined,
      bottom: tempPos.bottom ? tempPos.bottom + "px" : undefined,
      left: tempPos.left ? tempPos.left + "px" : undefined,
      right: tempPos.right ? tempPos.right + "px" : undefined,
    });
    setHide(!hide);
  };
  return (
    <>
      <button onClick={onToggle}>
        {Icon && <Icon className="text-lg text-gray-300" />}
      </button>
      {!hide && (
        <div
          className="fixed w-screen h-full top-0 left-0"
          onMouseDown={eventListenerToggle}
          onScroll={eventListenerToggle}
        ></div>
      )}
      <div
        ref={divRef}
        className="fixed"
        style={{
          top: pos.top ? pos.top : undefined,
          bottom: pos.bottom ? pos.bottom : undefined,
          left: pos.left ? pos.left : undefined,
          right: pos.right ? pos.right : undefined,
          zIndex: -999999999999,
        }}
      >
        <div style={{ display: hide ? "none" : "block" }}>{children}</div>
      </div>
    </>
  );
};

export default Main;
