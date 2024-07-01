import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
const BlogDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  //fetch the product
  const fetchDetailProduct = async () => {
    const res = await axios
      .get(`http://localhost:5000/BlogApi/blogs/${id}`, {
        withCredentials: false,
      })
      .catch((error) => console.log(error));
    const data = await res.data;
    console.log(data);
    return data;
  };
  useEffect(() => {
    fetchDetailProduct().then((data) => setData(data.blog));
  }, []);

  return (
    <div className="flex flex-col m-5 p-5 mx-[35%]">
      <div className="w-80 h-80 rounded-md shadow-md">
        <img src={data?.image} className="w-full h-full" alt="this is image" />
      </div>
      <div className="w-80 h-80 rounded-md shadow-md p-5">
        <h2>{data?.title}</h2>
        <p className="overflow-hidden">{data?.description}</p>
      </div>
    </div>
  );
};

export default BlogDetail;
