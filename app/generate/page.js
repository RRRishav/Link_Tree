'use client';

import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSearchParams } from "next/navigation";

const Generate = () => {
  const searchParams = useSearchParams();

  const [link, setLink] = useState("");
  const [text, setText] = useState("");
  const [handle, setHandle] = useState("");
  const [pic, setPic] = useState(null);
  const [tree, setTree] = useState([]);

  useEffect(() => {
    const initialHandle = searchParams.get("handle") || "";
    setHandle(initialHandle);
    if (initialHandle) fetchTree(initialHandle);
  }, [searchParams]);

  const fetchTree = async (handle) => {
    if (!handle) return;
    try {
      const res = await fetch(`/api/tree?handle=${handle}`);
      const data = await res.json();
      if (data.success) setTree(data.links);
      else setTree([]);
    } catch (err) {
      setTree([]);
    }
  };

  const addLink = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      link,
      linktext: text,
      handle,
    });

    try {
      const res = await fetch("/api/add", {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      });

      const result = await res.json();

      if (res.ok && result.success) {
        toast.success(result.message || "Link added successfully!");
        fetchTree(handle); // Fetch and show the tree after adding
        setLink("");
        setText("");
      } else {
        toast.error(result.message || "Something went wrong.");
      }
    } catch (error) {
      toast.error("Network Error");
      console.error(error);
    }
  };

  return (
    <div className="bg-white-700 min-h-screen grid grid-cols-2">
      <div className="col1 flex flex-col items-center justify-center min-h-screen">
        <div className="bg-white/80 shadow-xl border border-yellow-200 rounded-3xl px-10 py-12 flex flex-col items-center w-full max-w-md">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-400 to-yellow-500 mb-8 text-center">
            Create your Tree
          </h1>

          <div className="flex flex-col gap-4 w-full">
            <label className="flex flex-col items-center cursor-pointer mb-2">
              <span className="mb-2 text-pink-500 font-semibold">Upload Display Picture</span>
              <input
                onChange={e => setPic(e.target.files[0])}
                type="file"
                accept="image/*"
                className="hidden"
              />
              <div className="w-20 h-20 rounded-full bg-yellow-50 border-2 border-pink-300 flex items-center justify-center text-pink-400 text-3xl shadow hover:shadow-lg transition-all duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
              </div>
              {pic && <img src={URL.createObjectURL(pic)} className="mt-4 w-20 h-20 rounded-full" />}
            </label>

            <input value={handle} onChange={e => setHandle(e.target.value)} className="px-5 py-4 rounded-full bg-yellow-50 border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all duration-200 placeholder:text-pink-400 text-pink-700 font-medium shadow-sm" type="text" placeholder="Choose a Handle" />
            <input value={text} onChange={e => setText(e.target.value)} className="px-5 py-4 rounded-full bg-yellow-50 border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all duration-200 placeholder:text-pink-400 text-pink-700 font-medium shadow-sm" type="text" placeholder="Enter link text" />
            <input value={link} onChange={e => setLink(e.target.value)} className="px-5 py-4 rounded-full bg-yellow-50 border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all duration-200 placeholder:text-pink-400 text-pink-700 font-medium shadow-sm" type="text" placeholder="Enter link" />
          </div>

          <button onClick={addLink} className="mt-8 w-full py-3 rounded-full bg-gradient-to-r from-pink-500 via-red-400 to-yellow-500 text-white font-bold text-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-200">
            Add Link
          </button>
        </div>
        {/* Tree Section */}
        <div className="w-full max-w-md mt-10">
          <h2 className="text-2xl font-bold mb-4 text-center">Your Tree</h2>
          {tree.length === 0 ? (
            <p className="text-gray-500 text-center">No links yet.</p>
          ) : (
            <ul className="space-y-3">
              {tree.map((item, idx) => (
                <li key={idx} className="bg-yellow-50 border border-pink-200 rounded-full px-6 py-3 flex items-center justify-between shadow-sm">
                  <span className="font-semibold text-pink-700">{item.linktext}</span>
                  <a href={item.link} className="text-blue-600 underline ml-4" target="_blank" rel="noopener noreferrer">
                    Visit
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="col2 w-full h-screen bg-white-300">
        <img className="h-full object-contain" src="https://imgs.search.brave.com/mPUnZTgR-kMUnMFKBUo5Q5xmABDTencwaxlhAJQcJpY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9mbG93/ZXJtb3hpZS5jb20v/Y2RuL3Nob3AvcHJv/ZHVjdHMvd2hpdGVf/c2NhYi5qcGc_dj0x/NjkyMDI4MDMwJndp/ZHRoPTc0NQ" />
        <ToastContainer />
      </div>
    </div>
  );
};

export default Generate;
