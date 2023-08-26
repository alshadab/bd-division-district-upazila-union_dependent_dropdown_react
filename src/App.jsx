import { useState } from "react";
import {
  getAllDivision,
  getAllDistrict,
  getAllUpazila,
  getAllUnion,
} from "bd-divisions-to-unions";
import "./App.css";

function App() {
  const [districts, setDistricts] = useState([]);
  const [upazilas, setUpazilas] = useState([]);
  const [unions, setUnions] = useState([]);
  const [district, setDistrict] = useState("");
  const [division, setDivision] = useState("");
  const [upazila, setUpazila] = useState("");
  const [union, setUnion] = useState("");

  const handleDivision = (e) => {
    setDistricts(getAllDistrict()[e.target.value]);
    const dv = getAllDivision().find((d) => d.value === e.target.value);
    setDivision(dv.title);
  };
  const handleDistrict = (e) => {
    setUpazilas(getAllUpazila()[e.target.value]);
    const dis = districts.find((d) => d.value === e.target.value);
    setDistrict(dis.title);
  };
  const handleUpazila = (e) => {
    setUnions(getAllUnion()[e.target.value]);
    const upa = upazilas.find((d) => d.value === e.target.value);
    setUpazila(upa.title);
  };
  const handleUnion = (e) => {
    setUnion(e.target.value);
  };
  console.log(`${division} - ${district} - ${upazila} - ${union}`);
  return (
    <>
      <h1>
        Bangladesh&apos;s Division - District - Upazila - Union Dependent
        Dropdown
      </h1>
      <div className="box">
        <select name="division" id="divi" onChange={handleDivision}>
          <option value="">--Select Division--</option>
          {getAllDivision().map((div, index) => (
            <option key={index} value={div.value}>
              {div.title}
            </option>
          ))}
        </select>
        <select name="district" id="dis" onChange={handleDistrict}>
          <option value="">--Select District--</option>
          {districts.map((dis, index) => (
            <option key={index} value={dis.value}>
              {dis.title}
            </option>
          ))}
        </select>
        <select name="upazila" id="upa" onChange={handleUpazila}>
          <option value="">--Select Upazila--</option>
          {upazilas.map((upa, index) => (
            <option key={index} value={upa.value}>
              {upa.title}
            </option>
          ))}
        </select>
        <select name="union" id="upa" onChange={handleUnion}>
          <option value="">--Select Union--</option>
          {unions.map((uni, index) => (
            <option key={index} value={uni.title}>
              {uni.title}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

export default App;
