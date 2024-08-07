import RedFooter from "../components/redFooter";
import React from "react";
import Post from "../components/post";
function Community() {
  const posts = [
    {
      postPicture: "/images/community1.jpeg",
      caption: "Finished my bag!",
      profilePicture: "/images/profilepic1.jpeg",
      username: "MilaMeow",
    },
    {
      postPicture: "/images/community2.jpeg",
      caption: "work in progress...",
      profilePicture: "/images/profilepic2.jpeg",
      username: "Cindy.lee",
    },
    {
      postPicture: "/images/community3.jpeg",
      caption: "New air-dry clay tray!",
      profilePicture: "/images/profilepic3.jpg",
      username: "Kelly.clarks",
    },
    {
      postPicture: "/images/community4.jpeg",
      caption: "My latest batch :)",
      profilePicture: "/images/profilepic4.jpg",
      username: "StitchWitch",
    },
    {
      postPicture: "/images/community5.jpeg",
      caption: "My knew knitted top!",
      profilePicture: "/images/profilepic4.jpg",
      username: "StitchWitch",
    },
    {
      postPicture: "/images/community6.jpeg",
      caption: "For my penpals!",
      profilePicture: "/images/profilepic5.jpg",
      username: "PotterySpark",
    },
    {
      postPicture: "/images/community7.jpeg",
      caption: "Love my orchid crochet bags",
      profilePicture: "/images/profilepic6.jpeg",
      username: "BeadBlossom",
    },
    {
      postPicture: "/images/community8.jpeg",
      caption: "Finally finished the dress!",
      profilePicture: "/images/profilepic3.jpg",
      username: "Kelly.clarks",
    },
    {
      postPicture: "/images/community9.jpeg",
      caption: "My little bow mugs",
      profilePicture: "/images/profilepic4.jpg",
      username: "StitchWitch",
    },
  ];
  return (
    <>
      <div className="bg-beige min-h-screen py-10">
        <h1 className="text-red font-Texterius text-4xl sm:text-4xl md:text-5xl lg:text-6xl text-center mb-10">
          Community
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {posts.map((post, index) => (
            <Post
              key={index}
              postPicture={post.postPicture}
              caption={post.caption}
              profilePicture={post.profilePicture}
              username={post.username}
            />
          ))}
        </div>
      </div>
      <RedFooter />
    </>
  );
}
export default Community;
