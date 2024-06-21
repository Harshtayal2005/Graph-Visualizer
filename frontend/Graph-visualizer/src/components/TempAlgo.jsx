import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import StoreContext from "../Store/StoreContext";

const TempAlgo = () => {
  const navigate = useNavigate();
  const setComp= useContext(StoreContext).setComp;
  const setAlgo= useContext(StoreContext).setAlgo;
  const algo_names = [
    {
      name: "Shortest Path Algorithm",
      key:"ShortestDist",
      link: "https://www.geeksforgeeks.org/introduction-to-dijkstras-shortest-path-algorithm/",
    },
    {
      name: "Min Spanning Tree Algorithm",
      key:"MinSpan",
      link: "https://www.geeksforgeeks.org/kruskals-minimum-spanning-tree-algorithm-greedy-algo-2/",
    },
    // {
    //   name: "Topological Sort",
    //   link: "https://www.geeksforgeeks.org/topological-sorting/",
    // },
    {
      name: "Strongly Connected Components",
      key:"SCC",
      link: "https://www.geeksforgeeks.org/strongly-connected-components/",
    },
  ];
  return (
    <>
      <div className="flex justify-center mt-8 h-[30rem]">
        <div className="bg-green-300 py-5 px-2 overflow-auto overflow-x-auto flex flex-col gap-5 h-[30rem] w-[40rem]">
          {algo_names.map((items,ind) =>(
            <div className="bg-green-600 rounded-2xl hover:scale-102 duration-200">
              <div className="bg-green-600 px-8 py-5 rounded-xl text-[1.3rem] text-black  font-semibold">
                <p>{items.name}</p>
              </div>
              <div className="px-8 flex justify-between mb-4 text-[1.1rem]">
                <a href={items.link} target="_blank">
                  <div className="bg-yellow-400 px-4 py-1 rounded-lg font-semibold">Learn</div>
                </a>
                <div className="bg-gray-300 px-4 py-1 rounded-lg font-semibold hover:cursor-pointer" onClick={()=>{setAlgo(items.key);
                  setComp("Algo");
                }} >View Graph</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TempAlgo;
