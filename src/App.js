import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "./table/table";
import Loader from "./loader/loader";
import DetailedItem from "./detailItem/detailItem";

function App() {
  const baseUrl =
    "https://itrex-react-lab-files.s3.eu-central-1.amazonaws.com/react-test-api.json";

  const [contactData, setContactlData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [directionSort, setDirectionSort] = useState(true);
  const [rowItem, setRowItem] = useState("");
  const [searchText, setSearchText] = useState("");

  const getfilteredData = () => {
    if (!searchText) {
      return contactData;
    }
    return contactData.filter((el) => {
      return el["firstName"].toLowerCase().includes(searchText.toLowerCase());
    });
  };

  const filteredData = getfilteredData();
  // console.log(contactData);
  console.log(filteredData);

  const onSearchSend = (text) => {
    setSearchText(text);
    // console.log(setSearchText);
  };
  // console.log(searchText);

  const sortData = (field) => {
    const copyData = contactData.concat();
    let sortData;

    if (directionSort) {
      sortData = copyData.sort((a, b) => {
        return a[field] > b[field] ? 1 : -1;
      });
    }
    sortData = copyData.reverse((a, b) => {
      return a[field] > b[field] ? 1 : -1;
    });

    setContactlData(sortData);
    setDirectionSort(!directionSort);
  };

  useEffect(() => {
    axios(baseUrl).then((res) => {
      // console.log(res);
      setContactlData(res.data);
      setIsLoading(false);
    });
  }, []);

  const detailRow = (row) => {
    setRowItem(row);
  };

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <Table
          contactData={contactData}
          sortData={sortData}
          directionSort={directionSort}
          detailRow={detailRow}
          onSearchSend={onSearchSend}
        />
      )}
      <DetailedItem detailItemData={rowItem} />
    </div>
  );
}

export default App;
