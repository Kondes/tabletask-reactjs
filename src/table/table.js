import React, { useState } from "react";
import ArrowTop from "../svg/arrowTop";
import ArrowDown from "../svg/arrowDown";
import SearchElement from "../search/searchElement";

const Table = ({
  sortData,
  contactData,
  directionSort,
  detailRow,
  onSearchSend,
}) => {
  const [fieldData, setFieldData] = useState("");
  const Arrow = () => {
    return directionSort ? <ArrowDown /> : <ArrowTop />;
  };

  const fieldSortData = (field) => {
    sortData(field);
    setFieldData(field);
  };

  return (
    <div>
      <SearchElement onSearchSend={onSearchSend} />
      <table>
        <thead>
          <tr>
            <th
              onClick={() => {
                fieldSortData("id");
              }}
            >
              id {fieldData === "id" ? <Arrow /> : null}
            </th>
            <th
              onClick={() => {
                fieldSortData("firstName");
              }}
            >
              First name {fieldData === "firstName" ? <Arrow /> : null}
            </th>
            <th
              onClick={() => {
                fieldSortData("lastName");
              }}
            >
              Last name {fieldData === "lastName" ? <Arrow /> : null}
            </th>
            <th
              onClick={() => {
                fieldSortData("email");
              }}
            >
              Email {fieldData === "email" ? <Arrow /> : null}
            </th>
            <th
              onClick={() => {
                fieldSortData("phone");
              }}
            >
              Phone {fieldData === "phone" ? <Arrow /> : null}
            </th>
            <th
              onClick={() => {
                fieldSortData("adress.state");
              }}
            >
              State {fieldData === "adress.state" ? <Arrow /> : null}
            </th>
          </tr>
        </thead>
        <tbody>
          {contactData.map((item) => (
            <tr key={item.id + item.firstName} onClick={() => detailRow(item)}>
              <td>{item.id}</td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.adress.state}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
