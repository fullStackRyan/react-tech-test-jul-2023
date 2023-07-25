import { ChangeEvent, useState } from "react";

type Option = {
  value: string;
  text: string;
};

const RadioButtonGroup = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const options: Option[] = [
    { value: "all", text: "All firms" },
    { value: "local", text: "Local firms" },
    { value: "global", text: "Global firms" },
  ];

  const handleOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      {options.map((option: Option) => (
        <div key={option.value} className="flex items-center mb-2">
          <input
            type="radio"
            id={option.value}
            name="firms"
            value={option.value}
            checked={selectedOption === option.value}
            onChange={handleOptionChange}
            className="mr-2"
          />
          <label htmlFor={option.value} className="text-black">
            {option.text}
          </label>
        </div>
      ))}
    </div>
  );
};

export default RadioButtonGroup;
