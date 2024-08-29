import { useState } from "react";
import "./Display.css";
const Display = ({ contract, account }) => {
  const [data, setData] = useState("");
  const getdata = async () => {
    let dataArray;
    const Otheraddress = document.querySelector(".address").value;
    try {
      if (Otheraddress) {
        dataArray = await contract.display(Otheraddress);
        console.log(dataArray);
      } else {
        dataArray = await contract.display(account);
      }
    } catch (e) {
      alert("You don't have access");
    }
    const isEmpty = Object.keys(dataArray).length === 0;

    if (!isEmpty) {
      const str = dataArray.toString();
      const str_array = str.split(",");
      //console.log(str);
      console.log(str_array);
      const images = str_array.map((item, i) => {
        // const imageUrl = `https://gateway.pinata.cloud/ipfs/${item.substring(34)}`;
        // console.log("Constructed URL for image", i, ":", imageUrl);
        var IPFSUrl = item.split("/");
        const lastIndex = IPFSUrl.length;
        return (
          <a href={item} key={i} target="_blank" rel="noreferrer">
            <img
              key={i}
              //src={`${item}`}
              src={`"https://ipfs.io/ipfs/"+${IPFSUrl[lastIndex-1]}`}
              alt="Medial report"
              className="image"
            ></img>
          </a>
        );
      });
      setData(images);
      console.log(images);
      
    } else {
      alert("No image to display");
    }
  };
  return (
    <>
      <div className="image-list">{data}</div>
      <input
        type="text"
        placeholder="Enter Address"
        className="address"
      ></input>
      <button className="center button" onClick={getdata}>
        Get Data
      </button>
    </>
  );
};
export default Display;
