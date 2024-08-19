import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTempleFeed } from '../features/templeFeedSlice';

const TempleFeed = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.templeFeed);

  useEffect(() => {
    dispatch(fetchTempleFeed());
  }, [dispatch]);

  return (
    <div className="bg-white rounded-lg p-6 shadow-neo m-4">
      <h2 className="text-2xl font-bold mb-4 text-secondary">Live Temple Feed</h2>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'succeeded' && (
        <ul className="space-y-4">
          {data.map((item, index) => (
            <li key={index} className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-bold">{item.templeName}</h3>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      )}
      {status === 'failed' && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default TempleFeed;