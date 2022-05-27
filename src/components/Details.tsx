import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { handleDelete } from "../apiRequests/apiRequests";
import useFetch from "../useFetch";
import Popup from "./Popup";
import LoadingSpinner from "./Spinner";

const Details = (props: {}) => {
  const [formIsVisible, setFormIsVisible] = useState<Boolean>(false);
  const [updatedData, setUpdatedData] = useState<any>();
  const { id } = useParams();
  const url = `https://jsonplaceholder.typicode.com/photos?id=${id}`;

  const { data, isLoading } = useFetch(url);

  const getNewData = (data: {}) => {
    console.log(data);
    setUpdatedData(data);
  };
  return (
    <>
      {formIsVisible && (
        <Popup
          status={setFormIsVisible}
          url={`https://jsonplaceholder.typicode.com/photos/${id}`}
          liftNewData={getNewData}
        />
      )}
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="details-box">
          <div className="details-box__1">
            <img src={data[0].url} alt="img1" />
            <div className="btn-container">
              <button className="btn" onClick={() => setFormIsVisible(true)}>
                Edit
              </button>
              <button className="btn" onClick={() => handleDelete(`https://jsonplaceholder.typicode.com/photos/${id}`)}>
                Delete
              </button>
            </div>
          </div>
          <div>
            <p>
              ALBUMID: {updatedData ? updatedData.albumId : data[0].albumId}
            </p>
            <p>ID: {updatedData ? updatedData.id : data[0].id}</p>
            <p>
              THUMBNAIL:{" "}
              {updatedData ? updatedData.thumbnailUrl : data[0].thumbnailUrl}
            </p>
            <p>TITLE: {updatedData ? updatedData.title : data[0].title}</p>
            <p>URL: {updatedData ? updatedData.url : data[0].url}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Details;
