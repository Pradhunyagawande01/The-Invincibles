import React, { useState } from "react";

const Stories = () => {
  const [stories, setStories] = useState([
    {
      id: 1,
      type: "video",
      mediaUrl: "https://www.youtube.com/embed/HIoj7DHmuEI",
      title: "Stay Safe While Jogging",
      author: "Jane Doe",
      likes: 120,
      comments: 15,
    },
    {
      id: 2,
      type: "video",
      mediaUrl:
        "https://www.youtube.com/embed/videoseries?list=PLHfTPxnG4fWq1Wa1vAt8NXnsr9pGmGvQ3",
      title: "Self-Defense Basics",
      author: "Alice Smith",
      likes: 98,
      comments: 22,
    },
    {
      id: 3,
      type: "video",
      mediaUrl: "https://www.youtube.com/embed/-zAEj8LTBdI",
      title: "Situational Awareness",
      author: "Emily Brown",
      likes: 75,
      comments: 8,
    },
  ]);

  const [newStory, setNewStory] = useState({
    title: "",
    content: "",
    type: "text",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newId = stories.length + 1;
    setStories([
      ...stories,
      { ...newStory, id: newId, author: "Anonymous", likes: 0, comments: 0 },
    ]);
    setNewStory({ title: "", content: "", type: "text" });
  };

  return (
    <div className="relative min-h-screen bg-gray-100 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Vertical lines */}
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-gray-300 opacity-80"></div>
        <div className="absolute right-1/4 top-0 bottom-0 w-px bg-gray-300 opacity-80"></div>

        {/* Horizontal lines */}
        <div className="absolute top-1/4 left-0 right-0 h-px bg-gray-300 opacity-80"></div>
        <div className="absolute bottom-1/4 left-0 right-0 h-px bg-gray-300 opacity-80"></div>

        {/* Diagonal abstract shapes */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-purple-400 to-indigo-500 opacity-20 transform rotate-45 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-purple-400 to-indigo-500 opacity-20 transform -rotate-45 translate-x-1/2 translate-y-1/2"></div>
      </div>

      <header className="bg-blue-600 text-white p-6 text-center relative z-10">
        <h1 className="text-4xl font-extrabold mb-2">
          Women's Safety Community
        </h1>
      </header>
      <main className="p-6 relative z-10">
        <div className="stories-section">
          <h2 className="text-3xl font-bold mb-6">Community Stories</h2>

          <div className="stories-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stories.map((story) => (
              <div
                key={story.id}
                className="story-card bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer"
              >
                {story.type === "video" && (
                  <iframe
                    width="100%"
                    height="180"
                    src={story.mediaUrl}
                    title={story.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{story.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    By: {story.author}
                  </p>
                  {story.type === "text" && (
                    <p className="text-sm text-gray-800">
                      {story.content.substring(0, 100)}...
                    </p>
                  )}
                  <div className="mt-2 flex justify-between text-sm text-gray-500">
                    <span>{story.likes} likes</span>
                    <span>{story.comments} comments</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="new-story-form mt-8">
            <h3 className="text-xl font-semibold mb-4">Share Your Story</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Title"
                value={newStory.title}
                onChange={(e) =>
                  setNewStory({ ...newStory, title: e.target.value })
                }
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              />
              <textarea
                placeholder="Your story"
                value={newStory.content}
                onChange={(e) =>
                  setNewStory({ ...newStory, content: e.target.value })
                }
                className="w-full p-3 border border-gray-300 rounded-lg h-32"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
              >
                Submit Story
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Stories;
