import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const handlePost = (url: string, data: {}): any => {
  const toastId = toast.loading("loading");
  const updatedData = axios
    .put(url, data)
    .then(({ data }) => {
      //   console.log(data);
      toast.dismiss(toastId);
      toast.success("data has been succesfully updated");
      return data;
    })
    .catch((err) => {
      console.log(err);
      toast.dismiss(toastId);
      toast.error("something went wrong");
    });
  return updatedData;
};

export const handleDelete = (url: string): any => {
  const toastId = toast.loading("loading");
  const updatedData = axios
    .delete(url)
    .then(({ data }) => {
      console.log(data);
      toast.dismiss(toastId);
      toast.success("data has been succesfully deleted");
      window.location.href = "/";
      return data;
    })
    .catch((err) => {
      console.log(err);
      toast.dismiss(toastId);
      toast.error("something went wrong");
    });
  return updatedData;
};
