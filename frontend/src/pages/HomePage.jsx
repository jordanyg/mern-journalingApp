import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
const categories = [
  { name: "clarity", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644" },
  { name: "mindset", image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773" },
  { name: "reflection", image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88" },
  { name: "audit", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40" },
  { name: "recovery", image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335" },
  { name: "anxiety", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" },
  { name: "direction", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" },
  { name: "decision", image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d" },
  { name: "lifeDirection", image: "https://images.unsplash.com/photo-1520975928316-56b6d8a2b3e4" },
];

   

const HomePage = () => {
    const {userInfo} = useSelector((state)=>state.auth)
  return (userInfo ? (<div className="min-h-screen bg-[#f8f6f2] px-6 py-10">

      {/* CATEGORY GRID */}
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-3xl font-bold text-gray-900">
          Your Journal Spaces
        </h1>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {categories.map((cat) => (
            <Link key={cat.name} to={`/category/${cat.name}`}>
              <div className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">

                {/* IMAGE */}
                <div className="h-44 w-full overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>

                {/* LABEL */}
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold capitalize text-gray-800">
                    {cat.name === "lifeDirection"
                      ? "Life Direction"
                      : cat.name}
                  </h3>
                </div>

              </div>
            </Link>
          ))}
        </div>

        {/* RECENT JOURNALS */}
        <div className="mt-16">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            Recent Journals
          </h2>

          
            <div className="space-y-4">
              {journals.slice(0, 5).map((j) => (
                <div
                  key={j._id}
                  className="relative rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md"
                >
                  {/* CATEGORY BADGE */}
                  <span className="absolute right-4 top-4 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium capitalize text-gray-600">
                    {j.category}
                  </span>

                  {/* CONTENT */}
                  <p className="pr-20 text-gray-700">
                    {j.content.length > 180
                      ? j.content.slice(0, 180) + "..."
                      : j.content}
                  </p>
                </div>
              ))}
            </div>
          
        </div>

      </div>
    </div>) : (<Hero />)
    
  )
}

export default HomePage
