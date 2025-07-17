import React from "react";

const Generate = () => {
    return (
        <div className="bg-white-700
         min-h-screen grid grid-cols-2">
            <div className="col1 flex flex-col items-center justify-center min-h-screen">
                <div className="bg-white/80 shadow-xl border border-yellow-200 rounded-3xl px-10 py-12 flex flex-col items-center w-full max-w-md">
                    <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-400 to-yellow-500 mb-8 text-center">
                        Create your Tree
                    </h1>
                    <div className="flex flex-col gap-4 w-full">
                        {/* Display Picture Upload */}
                        <label className="flex flex-col items-center cursor-pointer mb-2">
                            <span className="mb-2 text-pink-500 font-semibold">Upload Display Picture</span>
                            <input type="file" accept="image/*" className="hidden" />
                            <div className="w-20 h-20 rounded-full bg-yellow-50 border-2 border-pink-300 flex items-center justify-center text-pink-400 text-3xl shadow hover:shadow-lg transition-all duration-200">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                            </div>
                        </label>
                        <input className="px-5 py-4 rounded-full bg-yellow-50 border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all duration-200 placeholder:text-pink-400 text-pink-700 font-medium shadow-sm" type="text" placeholder="Choose a Handle" />
                        <input className="px-5 py-4 rounded-full bg-yellow-50 border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all duration-200 placeholder:text-pink-400 text-pink-700 font-medium shadow-sm" type="text" placeholder="Enter link text" />
                        <input className="px-5 py-4 rounded-full bg-yellow-50 border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all duration-200 placeholder:text-pink-400 text-pink-700 font-medium shadow-sm" type="text" placeholder="Enter link" />
                    </div>
                    <button className="mt-8 w-full py-3 rounded-full bg-gradient-to-r from-pink-500 via-red-400 to-yellow-500 text-white font-bold text-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-200">
                        Add Link
                    </button>
                    <button className="mt-4 w-full py-3 rounded-full bg-pink-600 text-white font-bold text-lg shadow hover:bg-pink-700 transition-all duration-200">
                        Submit
                    </button>
                </div>
            </div>


        
            <div className="col2 w-full h-screen bg-white-300">
                <img  className="h-full object-contain "   src="https://imgs.search.brave.com/mPUnZTgR-kMUnMFKBUo5Q5xmABDTencwaxlhAJQcJpY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9mbG93/ZXJtb3hpZS5jb20v/Y2RuL3Nob3AvcHJv/ZHVjdHMvd2hpdGVf/c2NhYi5qcGc_dj0x/NjkyMDI4MDMwJndp/ZHRoPTc0NQ"></img>
            </div>
        </div>
    )
}

export default Generate;    