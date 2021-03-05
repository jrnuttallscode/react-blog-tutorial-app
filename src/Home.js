import { useState } from 'react';
import Bloglist from './Bloglist';

const Home = () => {
    const [blogs, setBlogs] = useState([
      { title: 'My New Website', body: "lorem ipsum...", author: "Mario", id: 1 },
      { title: 'Welcome party!', body: "lorem ipsum...", author: "Luigi", id: 2 },
      { title: 'Web Dev Top Tips', body: "lorem ipsum...", author: "Mario", id: 3, }
    ]);

    return (
      <div className="home">
        <Bloglist blogs={blogs} title="All Blogs!" />
        <Bloglist blogs={blogs.filter((blogs) => blogs.author === 'Mario')} title="Mario's Blogs!" />
      </div>
    );
}
 
export default Home;