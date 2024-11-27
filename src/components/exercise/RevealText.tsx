import React, {useState} from "react";
import {clsx} from "clsx";

interface RevealTextProps {
    children: React.ReactNode;
}

export const RevealText: React.FC<RevealTextProps> = (props: RevealTextProps) => {
    const {children} = props
    const [isRevealed, setIsRevealed] = useState(false);

    return (
        <span
            className={clsx(`relative inline-block border rounded mx-1`, !isRevealed && "min-w-7")}
            onClick={() => setIsRevealed(true)}
        >
      {!isRevealed && (
          <span className="w-full h-full absolute bg-white cursor-pointer">
        </span>
      )}
            <span className={clsx("inline-block", isRevealed ? "p-1" : "invisible")}>
        {children}
      </span>
    </span>
    );
};

export default RevealText;
