import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import toast from "react-hot-toast";
import { handlePost } from "../apiRequests/apiRequests";

const Modal = (props: any) => {
  const albumIdref: any = useRef();
  const idref: any = useRef();
  const thumbnailref: any = useRef();
  const titleref: any = useRef();
  const urlref: any = useRef();
  const { status, url } = props;

  const updatePhoto = (e: any) => {
    e.preventDefault();
    if (
      albumIdref.current.value.length <= 0 ||
      idref.current.value.length <= 0 ||
      thumbnailref.current.value.length <= 0 ||
      titleref.current.value.length <= 0 ||
      urlref.current.value.length <= 0
    )
      return toast.error("Please fill all the values to update");

    const updatedData = handlePost(url, {
      albumId: albumIdref.current.value,
      id: idref.current.value,
      thumbnailUrl: thumbnailref.current.value,
      title: titleref.current.value,
      url: urlref.current.value,
    });
    updatedData &&
      updatedData.then((data: []) => {
        props.PassNewData(data);
      });

    status(false);
  };
  return (
    <>
      <div className="popup" onClick={() => status(false)}></div>
      <form className="popup__form" onSubmit={updatePhoto}>
        <div>
          <label htmlFor="ALBUMID">ALBUMID:</label>
          <input id="ALBUMID" ref={albumIdref} />
        </div>
        <div>
          <label htmlFor="ID">ID:</label>
          <input id="ID" ref={idref} />
        </div>
        <div>
          <label htmlFor="THUMBNAIL">THUMBNAIL:</label>
          <input id="THUMBNAIL" ref={thumbnailref} />
        </div>
        <div>
          <label htmlFor="TITLE">TITLE:</label>
          <input id="TITLE" ref={titleref} />
        </div>
        <div>
          <label htmlFor="URL">URL:</label>
          <input id="URL" ref={urlref} />
        </div>
        <div>
          <button className="btn">Submit</button>
        </div>
      </form>
    </>
  );
};

const Popup = (props: any) => {
  const { status, url } = props;
  const handleNewData = (data: {}) => {
    props.liftNewData(data)
  };

  return (
    <>
      {ReactDOM.createPortal(
        <Modal status={status} url={url} PassNewData={handleNewData} />,
        document.getElementById("overlay")!
      )}
    </>
  );
};

export default Popup;
