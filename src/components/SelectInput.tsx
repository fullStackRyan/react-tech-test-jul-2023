import { ChangeEvent, useState } from "react";

const SelectInput = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleOptionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <select
        value={selectedOption}
        onChange={handleOptionChange}
        className="border-2 border-gray-200 p-1 rounded-md"
      >
        <option value="Sortby: Tier ranking">Sort by: Tier ranking</option>
      </select>
    </div>
  );
};

export default SelectInput;
