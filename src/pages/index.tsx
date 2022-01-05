import DarkModeBtn from "../components/darkModeBtn";

function Index() {
  return (
    <div className="flex flex-none flex-row m-0 h-screen justify-center">
      <div className="mx-auto my-auto">
        <div className="flex flex-none flex-col align-middle">
          <h1 className="mb-3">Let build react app</h1>
          <DarkModeBtn />
        </div>
      </div>
    </div>
  );
}

export default Index;
