import React from "react";

const DetailedItem = ({ detailItemData }) => {
  const AdressCity =
    detailItemData && detailItemData.adress ? detailItemData.adress.city : null;

  const AdressStr =
    detailItemData && detailItemData.adress
      ? detailItemData.adress.streetAddress
      : null;

  const AdressState =
    detailItemData && detailItemData.adress
      ? detailItemData.adress.state
      : null;

  const AdressZip =
    detailItemData && detailItemData.adress ? detailItemData.adress.zip : null;

  return (
    <div>
      <h2>Profile info:</h2>
      <div>
        Selected profile:{" "}
        <b>
          {detailItemData.firstName} {detailItemData.lastName}{" "}
        </b>
      </div>
      <div>
        Description: <b>{detailItemData.description} </b>
      </div>
      <div>
        Address: <b>{AdressStr} </b>
      </div>
      <div>
        City: <b>{AdressCity} </b>
      </div>
      <div>
        State: <b>{AdressState} </b>
      </div>
      <div>
        Index: <b>{AdressZip} </b>
      </div>
    </div>
  );
};

export default DetailedItem;
