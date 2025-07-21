import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Post {
  id: number;
  title: string;
  body: string;
}

const DataFetcher: React.FC = () => {
  const [data, setData] = useState<Post[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
        setData(response.data);
      } catch (err: any) {
        setError(err.message || 'Error fetching data');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-40 text-lg text-blue-600 animate-pulse">
        Loading data...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-40 text-lg text-red-600 font-semibold">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Hot posts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data && data.map(post => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow duration-200 border border-gray-100"
          >
            <h3 className="text-lg font-semibold mb-2 text-blue-700 truncate">{post.title}</h3>
            <p className="text-gray-700 text-sm line-clamp-3">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataFetcher;
