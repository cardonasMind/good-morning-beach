import React from "react";

import Post from "./Post";

const Blog = ({ latestsPosts }) => {
  console.log(latestsPosts);

  return (
    <section id="blog" className="my-40 mx-8">
      <div className="flex">
        <h1 className="text-4xl bg-yellow-100">Online news</h1>
        <p className="ml-10">
          Read what's currently happening. <br />
          We write until 9:00 am.
        </p>
      </div>

      <div
        id="latest-posts"
        className="mt-14 grid sm:grid-cols-2 md:grid-cols-3 gap-14"
      >
        <Post
          category="World"
          title="Trump calls for Biden to resign over Taliban takeover of Afghanistan"
          excerpt={`Former US president Donald Trump called for his successor Joe Biden to resign on Sunday over the swift takeover of Afghanistan by Taliban militants, as US troops withdrew from the country after nearly 20 years on the ground.`}
        />
        <Post
          category="World"
          title="Taliban's Afghanistan takeover deals a harsh blow to Biden's 'America is back' foreign policy promise"
          excerpt={`When President Joe Biden announced last month he would pull U.S. troops out of Afghanistan by the end of August, he declared "speed is safety.`}
        />
        <Post
          category="Science"
          title="Why do turtles live so long?"
          excerpt={`On the island of St. Helena in the South Atlantic, there lives a creature that Guinness World Records has dubbed the "world's oldest animal on land." His name is Jonathan, and he's a giant tortoise. According to Guinness World Records.`}
        />
        <Post
          category="Technology"
          title="Tired of annoying and intrusive spam calls? Here's how to keep robocalls at a minimum"
          excerpt={`Stir/Shaken is a project where phone companies like T-Mobile, AT&T, Verizon and Comcast are now verifying all incoming and outgoing calls routed through their networks. By verifying each call, the number of fake or spoofed calls will be reduced, in turn, causing our phones to ring less often. Huzzah!`}
        />
        <Post
          category="World"
          title="The Taliban won. Here's what that could mean"
          excerpt={`Now that the Taliban has regained power after nearly two decades in the Afghan hinterlands, the average Afghan will face a radically different government, and lifestyle, than the one they have known since the U.S.-led invasion in late 2001.`}
        />
        <Post
          category="Travel"
          title="Qatar's Hamad International: World's most luxurious airport?"
          excerpt={`it's officially the best, according to Skytrax, the organization whose annual "airport Oscars" have for the past decade anointed Singapore's Changi as the planet's finest place to catch an airplane.
          Opened in 2014 with the ambition of turning the Arabian Gulf city of Doha into a global aviation hub serviced by Qatar Airways.`}
        />
      </div>

      <button className="mt-20 border-2 border-black py-1 px-4 hover:bg-gray-200">
        View all
      </button>
    </section>
  );
};

export default Blog;
