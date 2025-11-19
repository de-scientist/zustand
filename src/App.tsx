import useUser from "./store/userStore";

function App () {
  const {firstName, lastName, age} = useUser();
  return (
    <div>
      <h1></h1>
    </div>
  );
};


export default App;