import React, { useState } from 'react';

const posts = [
  {
    title: '5 Benefits of Rooftop Gardens',
    excerpt: 'Discover how rooftop gardens can improve air quality, reduce heat, and bring communities together.',
    date: '2024-06-01',
    content: `Rooftop gardens offer a range of benefits: improved air quality, reduced urban heat, increased biodiversity, local food production, and stronger community ties. By transforming unused spaces, we create green oases that benefit everyone.`,
  },
  {
    title: 'How We Transformed a City Block',
    excerpt: 'A behind-the-scenes look at one of our most successful rooftop garden projects.',
    date: '2024-05-20',
    content: `Our team worked with local residents to design and build a rooftop garden that now provides fresh produce and a gathering space for the community. The transformation included workshops, planting days, and ongoing support.`,
  },
  {
    title: 'Upcoming Community Events',
    excerpt: 'Join us for workshops, planting days, and more throughout the summer.',
    date: '2024-05-10',
    content: `This summer, we're hosting a series of events: gardening workshops, volunteer days, and community celebrations. Check our calendar for dates and sign up to participate!`,
  },
];

function Blog() {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <section className="max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-green-800 mb-4">Blog & News</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post, idx) => (
          <div
            key={idx}
            className="bg-white rounded shadow p-6 cursor-pointer hover:shadow-lg transition"
            onClick={() => setSelectedPost(post)}
          >
            <div className="text-green-600 text-sm mb-2">{post.date}</div>
            <h3 className="text-xl font-semibold text-green-800 mb-2">{post.title}</h3>
            <p className="text-green-700 mb-2">{post.excerpt}</p>
            <span className="text-green-700 underline">Read more</span>
          </div>
        ))}
      </div>
      {selectedPost && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50" onClick={() => setSelectedPost(null)}>
          <div className="bg-white rounded shadow-lg p-6 max-w-lg w-full relative" onClick={e => e.stopPropagation()}>
            <button className="absolute top-2 right-2 text-green-700 text-2xl" onClick={() => setSelectedPost(null)}>&times;</button>
            <div className="text-green-600 text-sm mb-2">{selectedPost.date}</div>
            <h3 className="text-2xl font-bold text-green-800 mb-4">{selectedPost.title}</h3>
            <p className="text-green-700 mb-4 whitespace-pre-line">{selectedPost.content}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Blog; 