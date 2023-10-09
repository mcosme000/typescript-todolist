import List from "./components/List";
import OrganismFormContainer from "./components/organisms/OrganismFormContainer";

function App() {
  return (
    <div className="h-4/6 w-10/12 sm:w-7/12 md:w-5/12 bg-white shadow-lg rounded-md">
      <OrganismFormContainer />
      <List />
    </div>
  );
}

export default App;
