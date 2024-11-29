import "./App.css";
import Card from "./components/card";
import Greeting from "./components/greeting";

function App() {
  //props - js object

  const obj = {
    title: "test",
  };
  return (
    //react fragment
    <>
      <Greeting />

      <div className="cards">
        <Card title="asus" desc="lorem ipsum dolor" price={"2100"} />
        <Card title="lenova" desc="lorem ipsum dolor" price="1600" />
        <Card title="dell" desc="lorem ipsum dolor" price="2750" obj={obj} />
      </div>
    </>
  );
}

export default App;

// functional components (hooks), class components

// function sum(a, b) {
//   return a + b;
// }

// sum(1, 2); // 3
// sum(3, 5); // 8
// sum(7, 12); // 21
