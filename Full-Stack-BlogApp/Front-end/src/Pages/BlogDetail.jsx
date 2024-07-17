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
    return data;
  };
  useEffect(() => {
    fetchDetailProduct().then((data) => setData(data.blog));
  }, []);

  return (
    <div className="md:flex flex-row rounded-md shadow-md">
      <div className="p-5 md:flex flex-row rounded-md shadow-md w-[400px] h-[300px]">
        <img src={data?.image} className="w-[300px] h-[250px]" alt="this is image" />
      </div>
      <div className="overflow-y-auto overflow-x-autop-5 rounded-md shadow-md pb-10 px-[10px] md:w-full h-80">
        <h2 className="mx-[10px] text-2xl font-bold">{data?.title}</h2>
        <p className="p-2 m-2">{data?.description}</p>
      </div>
    </div>
  );
};

export default BlogDetail;
