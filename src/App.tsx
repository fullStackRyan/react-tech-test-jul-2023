import "./App.css";
import RankingsPage from "./pages/RankingsPage";
import Filters from "./components/Filters";
import SelectInput from "./components/SelectInput";

const App = () => {
  return (
    <div className="m-4 md:m-10">
      <div className="flex justify-end my-2">
        <SelectInput />
      </div>
      <div className="grid grid-cols-[1fr,5fr]">
        <div className="">
          <Filters />
        </div>
        <div className="">
          <RankingsPage />
        </div>
      </div>
    </div>
  );
};

export default App;
