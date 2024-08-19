import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHoroscope } from '../features/horoscopeSlice';

const HoroscopeCard = () => {
  const [sign, setSign] = useState('');
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.horoscope);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchHoroscope(sign));
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-neo m-4">
      <h2 className="text-2xl font-bold mb-4 text-primary">Today's Horoscope</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={sign}
          onChange={(e) => setSign(e.target.value)}
          placeholder="Enter your zodiac sign"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="mt-2 bg-accent text-white py-2 px-4 rounded hover:bg-opacity-80 transition duration-300"
        >
          Get Horoscope
        </button>
      </form>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'succeeded' && (
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-lg">{data.horoscope}</p>
        </div>
      )}
      {status === 'failed' && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default HoroscopeCard;