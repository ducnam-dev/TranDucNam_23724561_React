import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import StudentInfo from "./components/StudentInfo.jsx";
import "./App.css";

function App() {
  const student = {
    name: "Trần Đức Nam",
    mssv: "23724561",
    lop: "KTPM03"
  };

  return (
    <>
      <Header />
      <StudentInfo
        name={student.name}
        mssv={student.mssv}
        lop={student.lop}
      />
      <Footer />
    </>
  );
}

export default App;
