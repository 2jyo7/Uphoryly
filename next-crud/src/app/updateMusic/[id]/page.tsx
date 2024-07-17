"use client";
import axios from "axios";
import { useRouter } from "next/navigation";

import React, { useEffect, useState } from "react";

const SongUpdate = ({ params }: { params: { id: string } }) => {
  const [data, setData] = useState<any>({});
  const id = params.id;
  const router = useRouter();

  const getData = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/get/${id}`);
      setData(res.data[0]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/update/${id}`, data);
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-black to-slate-800 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 to-slate-800 shadow-lg transform -skew-y-0 sm:skew-y-8 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 shadow-lg sm:rounded-3xl sm:p-20">
            <form onSubmit={handleUpdate}>
              <div className="max-w-md mx-auto">
                <div>
                  <h1 className="text-2xl font-semibold">Update MUSIC</h1>
                </div>
                <div className="divide-y divide-gray-200">
                  <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                    <div className="relative">
                      <input
                        autoComplete="off"
                        id="artist"
                        name="artist"
                        type="text"
                        value={data.artist || ""}
                        onChange={handleChange}
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                        placeholder="ARTISTS"
                      />
                      <label
                        htmlFor="artist"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        ARTIST
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        autoComplete="off"
                        id="songs"
                        name="songs"
                        type="text"
                        value={data.songs || ""}
                        onChange={handleChange}
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                        placeholder="SONGS"
                      />
                      <label
                        htmlFor="songs"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        SONGS
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        autoComplete="off"
                        id="releaseYear"
                        name="releaseYear"
                        type="text"
                        value={data.releaseYear || ""}
                        onChange={handleChange}
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                        placeholder="RELEASE YEAR"
                      />
                      <label
                        htmlFor="releaseYear"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        RELEASE YEAR
                      </label>
                    </div>
                    <div className="relative">
                      <button className="bg-black text-white rounded-md px-2 py-1">
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SongUpdate;
