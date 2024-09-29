// import React, { useState } from 'react';

// const categories = [
//   { id: 1, title: 'Safety Tips' },
//   { id: 2, title: 'Self-Defense' },
//   { id: 3, title: 'Legal Rights' },
//   { id: 4, title: 'Mental Health' },
// ];

// const initialThreads = [
//   { id: 1, categoryId: 1, title: 'How to stay safe while jogging?', content: 'What are some tips for staying safe while jogging in the evening?', author: 'Jane Doe', replies: 5 },
//   { id: 2, categoryId: 2, title: 'Best self-defense techniques for beginners', content: 'What are the most effective self-defense techniques I can learn?', author: 'Alice Smith', replies: 3 },
// ];

// const Forums = () => {
//   const [threads, setThreads] = useState(initialThreads);
//   const [newThread, setNewThread] = useState({ title: '', content: '', categoryId: '' });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newId = threads.length + 1;
//     setThreads([...threads, { ...newThread, id: newId, author: 'Anonymous', replies: 0 }]);
//     setNewThread({ title: '', content: '', categoryId: '' });
//   };

//   return (
//     <div className="forums-page max-w-5xl mx-auto p-6">
//       <header className="bg-blue-600 text-white p-4 text-center mb-4">
//         <h1 className="text-2xl font-bold">Discussion Forums</h1>
//       </header>

//       <div className="mb-4">
//         <h2 className="text-xl font-bold">Categories</h2>
//         <ul className="flex flex-wrap gap-4 mt-2">
//           {categories.map(category => (
//             <li key={category.id} className="bg-gray-200 rounded-lg p-2 hover:bg-gray-300 transition">
//               {category.title}
//             </li>
//           ))}
//         </ul>
//       </div>

//       <div className="mb-4">
//         <h2 className="text-xl font-bold">Threads</h2>
//         <div className="grid grid-cols-1 gap-4 mt-2">
//           {threads.map(thread => (
//             <div key={thread.id} className="thread-card bg-white shadow-lg rounded-lg p-4 transition transform hover:scale-105">
//               <h3 className="font-semibold text-lg">{thread.title}</h3>
//               <p className="text-sm text-gray-600">{thread.content}</p>
//               <div className="mt-2 flex justify-between text-sm text-gray-500">
//                 <span>Posted by: {thread.author}</span>
//                 <span>{thread.replies} replies</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="new-thread-form mt-8">
//         <h3 className="text-lg font-semibold mb-2">Create a New Thread</h3>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <select
//             value={newThread.categoryId}
//             onChange={(e) => setNewThread({ ...newThread, categoryId: e.target.value })}
//             className="w-full p-2 border rounded"
//             required
//           >
//             <option value="">Select Category</option>
//             {categories.map(category => (
//               <option key={category.id} value={category.id}>{category.title}</option>
//             ))}
//           </select>
//           <input
//             type="text"
//             placeholder="Thread Title"
//             value={newThread.title}
//             onChange={(e) => setNewThread({ ...newThread, title: e.target.value })}
//             className="w-full p-2 border rounded"
//             required
//           />
//           <textarea
//             placeholder="Thread Content"
//             value={newThread.content}
//             onChange={(e) => setNewThread({ ...newThread, content: e.target.value })}
//             className="w-full p-2 border rounded h-32"
//             required
//           />
//           <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
//             Submit Thread
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Forums;
