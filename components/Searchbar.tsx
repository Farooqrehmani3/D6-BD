"use client";

import { useState } from "react";
import { Search } from "lucide-react";

export default function SearchBar({ placeholder, data }: { placeholder: string; data: string[] }) {
  const [query, setQuery] = useState("");

  // Filter data based on query
  const filteredResults = data.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Search Input */}
      <div className="flex items-center border border-gray-300 rounded-lg p-2 shadow-sm bg-white">
        <Search className="w-5 h-5 text-gray-500 mx-2" />
        <input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full bg-transparent outline-none p-2"
        />
      </div>

      {/* Dropdown Results */}
      {query && filteredResults.length > 0 && (
        <ul className="absolute w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto">
          {filteredResults.map((result, index) => (
            <li
              key={index}
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => setQuery(result)}
            >
              {result}
            </li>
          ))}
        </ul>
      )}

      {/* No Results Message */}
      {query && filteredResults.length === 0 && (
        <p className="absolute w-full mt-2 bg-white border border-gray-300 rounded-lg p-2 text-center text-gray-500">
          No results found.
        </p>
      )}
    </div>
  );
}
