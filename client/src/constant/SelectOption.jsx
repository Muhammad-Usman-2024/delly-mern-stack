import { ChevronDown } from "lucide-react";
import React, { useState, useEffect } from "react";

const SelectOption = ({
  options,
  defaultOption,
  isOpen,
  onToggle,
  onSelect,
}) => {
  const [selectedOption, setSelectedOption] = useState(
    defaultOption || options[0]
  );
  const [animationState, setAnimationState] = useState("");

  useEffect(() => {
    if (isOpen) {
      setAnimationState("opening");
    } else {
      setAnimationState("closing");
    }
  }, [isOpen]);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    onSelect && onSelect(option);
    onToggle();
  };

  return (
    <div className="relative">
      <button
        className="w-full px-4 py-2 border border-3 border-[#E7E7E7] bg-[#F9F9F9] rounded-xl flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-green-500"
        onClick={onToggle}
      >
        <span>{selectedOption}</span>
        <ChevronDown color="#000000" size={17} />
      </button>
      <div
        className={`absolute right-0 mt-1 w-full bg-white rounded-lg shadow-lg border text-[#000000] border-[#E7E7E7] z-10 overflow-hidden transition-all duration-300 ${
          animationState === "opening"
            ? "max-h-48 opacity-100"
            : "max-h-0 opacity-0"
        }`}
        onTransitionEnd={() => {
          if (animationState === "closing") setAnimationState("");
        }}
      >
        <ul className={`py-2 ${animationState !== "" ? "block" : "hidden"}`}>
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleOptionSelect(option)}
              className="px-4 py-3 hover:bg-[#E9FBF2] cursor-pointer"
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SelectOption;
