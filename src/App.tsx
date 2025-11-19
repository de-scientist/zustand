import useUser from "./store/userStore";

function App () {
  const {firstName, lastName, age} = useUser();
  return (
    <div>
      
    </div>
  );
};

App.propTypes = {
  
};

export default App;