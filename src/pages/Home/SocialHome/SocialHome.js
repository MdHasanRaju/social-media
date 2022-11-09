import React, { useState } from "react";
import photo from "../../../assets/images/osthir.png";
import { Link } from 'react-router-dom';

const videoItems = [
  {
    id: "1",
    videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY?controls=0",
    photo: photo,
    title: "Mission impossible dead reckoning IMX",
    published: "American, 10 June 2020",
    views:17,
    react: "10 Love",
    comments: '14 Comments',
    share: '9 Share',
  },
  {
    id: "2",
    videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY?controls=0",
    photo: photo,
    title: "Mission impossible dead reckoning IMX",
    published: "American, 10 June 2020",
    views:17,
    react: "10 Love",
    comments: '14 Comments',
    share: '9 Share',
  },
  {
    id: "3",
    videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY?controls=0",
    photo: photo,
    title: "Mission impossible dead reckoning IMX",
    published: "American, 10 June 2020",
    views:17,
    react: "10 Love",
    comments: '14 Comments',
    share: '9 Share',
  },
  {
    id: "4",
    videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY?controls=0",
    photo: photo,
    title: "Mission impossible dead reckoning IMX",
    published: "American, 10 June 2020",
    views:17,
    react: "10 Love",
    comments: '14 Comments',
    share: '9 Share',
  },
  {
    id: "5",
    videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY?controls=0",
    photo: photo,
    title: "Mission impossible dead reckoning IMX",
    published: "American, 10 June 2020",
    views:17,
    react: "10 Love",
    comments: '14 Comments',
    share: '9 Share',
  },
  {
    id: "6",
    videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY?controls=0",
    photo: photo,
    title: "Mission impossible dead reckoning IMX",
    published: "American, 10 June 2020",
    views:17,
    react: "10 Love",
    comments: '14 Comments',
    share: '9 Share',
  },
  {
    id: "7",
    videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY?controls=0",
    photo: photo,
    title: "Mission impossible dead reckoning IMX",
    published: "American, 10 June 2020",
    views:17,
    react: "10 Love",
    comments: '14 Comments',
    share: '9 Share',
  },
];

const SocialHome = () => { 

  const [showCommunity, setShowCommunity] = useState(false);

  const toggleCommunity = () => {
    setShowCommunity(!showCommunity);
  }

  return (
    <div> 
      <div className="px-4 py-6 mt-[70px]">
        <div class="grid grid-cols-6 gap-4">
          {/* ---left side bar start--- */}
          <div class="col-span-1">
            <div className=" ">
            <div>
              <h2 className="text-2xl font-medium mb-2 text-[#444]">Key Features</h2>
              <div className="bg-[#FFFFFF] rounded shadow-sm">
                <div className="flex items-center bg-[#0a66c2] text-white pl-4 py-3 rounded">
                  <i class="fa-solid fa-clapperboard mr-2"></i>
                  <h4 className="">Play</h4>
                </div>
                <hr />
                <div className="flex items-center pl-4 py-3 rounded">
                  <i class="fa-solid fa-video mr-2"></i>
                  <h4><Link to='meet' className="">Meet</Link></h4>
                </div>
                <hr />
                <div className="flex items-center pl-4 py-3 rounded">
                  <i class="fa-solid fa-comment-dots mr-2"></i>
                  <h4>Hangout</h4>
                </div>
                <hr />
                <div className="flex items-center pl-4 py-3 rounded">
                  <i class="fa-solid fa-play mr-2"></i>
                  <h4>Moment</h4>
                </div>
              </div>
            </div>

            <div class="mt-2">
              <h2 className="text-2xl font-medium mb-2 text-[#444]">Account</h2>
              <div className="rounded bg-[#FFFFFF] shadow-sm">
                <div className="flex items-center  text-dark pl-4 py-3 rounded">
                  <i class="fa-solid fa-user mr-2"></i>
                  <h4>My Profile</h4>
                </div>
                <hr />
                <div className="flex items-center text-dark pl-4 py-3 rounded">
                  <i class="fa-solid fa-user-pen mr-2"></i>
                  <h4>Edit Profile</h4>
                </div>
              </div>
            </div>

            <div class="mt-2 ">
              <h2 className="text-2xl font-medium mb-2 text-[#444]">Additional Settings</h2>
              <div className="bg-[#FFFFFF] rounded shadow-sm">
                <div className="flex items-center  text-dark pl-4 py-3 rounded">
                  <i class="fa-solid fa-gear mr-2"></i>
                  <h4>Settings</h4>
                </div>
                <hr />
                <div className="flex items-center text-dark pl-4 py-3 rounded">
                  <i class="fa-solid fa-circle-dot mr-2"></i>
                  <h4>Options</h4>
                </div>
              </div>
            </div>

            <div class="mt-2 ">
              <div className="flex justify-between items-center">
              <h2 className="text-2xl font-medium mb-2 text-[#444]">Community</h2>
              <i onClick={toggleCommunity} class={`fa-solid ${showCommunity ? 'fa-chevron-up ': 'fa-chevron-down'} pr-2`}></i>
              </div>
              <div className={`${showCommunity ? 'block': 'hidden'} bg-[#FFFFFF] rounded shadow-sm py-3 grid grid-cols-3 gap-3`}>
                 <div className="text-center">
                 <i class="fa-solid fa-calendar-day"></i>
                  <p>Events</p>
                 </div>
                 <div className="text-center">
                 <i class="fa-solid fa-file-lines"></i>
                  <p>Blogs</p>
                 </div>
                 <div className="text-center">
                 <i class="fa-solid fa-shop"></i>
                  <p>Markets</p>
                 </div>
                 <div className="text-center">
                 <i class="fa-solid fa-comments"></i>
                  <p>Forum</p>
                 </div>
                 <div className="text-center">
                 <i class="fa-solid fa-file-pen"></i>
                  <p>My Article</p>
                 </div>
                 <div className="text-center">
                 <i class="fa-brands fa-product-hunt"></i>
                  <p>My Products</p>
                 </div>
                 <div className="text-center">
                 <i class="fa-solid fa-people-group"></i>
                  <p>My Groups</p>
                 </div>
                 <div className="text-center">
                 <i class="fa-regular fa-file-lines"></i>
                  <p>My Pages</p>
                 </div>
              </div>
            </div>
            </div>
          </div>
          {/* ---left side bar end--- */}

        {/* ---middle video part start--- */}
          <div class="col-span-4">
            <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-4">
              {videoItems.map((vdo) => (
                <div className="bg-[#FFFFFF]">
                  <div>
                    <iframe width='100%' src={vdo.videoUrl} frameBorder="0"></iframe>
                  </div>
                  <div className="flex items-center justify-between px-2">
                    <img className="rounded-full" src={vdo.photo} height='30px' width='30px' alt="author photo" />
                    <h5 className="pr-4 ml-2 text-[#0f0f0f]">{vdo.title}</h5>
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                  </div>
                  <small className="pl-12 text-[#606060]"><i class="fa-solid fa-circle text-xs text-[8px]"></i> {vdo.published} <span>views: {vdo.views}</span></small>  
                  <hr className="my-4" /> 
                  <div className="flex items-center justify-between px-2 text-[#606060]">
                    <small><i class="fa-sharp fa-solid fa-heart pr-1 "></i>{vdo.react}</small>
                    <small><i class="fa-solid fa-comment-dots pr-1 "></i>{vdo.comments}</small>
                    <small><i class="fa-solid fa-share-nodes pr-1 "></i>{vdo.share}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* ---middle video part end--- */}


          {/* ---right side bar end--- */}
          <div class="col-span-1 sticky">
            <div>
              <h2 className="text-2xl font-medium mb-2 text-[#444]">Key Features</h2>
              <div className="bg-[#FFFFFF] rounded shadow-sm">
                <div className="flex items-center bg-[#0a66c2] text-white pl-4 py-3 rounded">
                  <i class="fa-solid fa-clapperboard mr-2"></i>
                  <h4 className="">Play</h4>
                </div>
                <hr />
                <div className="flex items-center pl-4 py-3 rounded">
                  <i class="fa-solid fa-video mr-2"></i>
                  <h4><Link to='meet' className="">Meet</Link></h4>
                </div>
                <hr />
                <div className="flex items-center pl-4 py-3 rounded">
                  <i class="fa-solid fa-comment-dots mr-2"></i>
                  <h4>Hangout</h4>
                </div>
                <hr />
                <div className="flex items-center pl-4 py-3 rounded">
                  <i class="fa-solid fa-play mr-2"></i>
                  <h4>Moment</h4>
                </div>
              </div>
            </div>

            <div class="mt-2">
              <h2 className="text-2xl font-medium mb-2 text-[#444]">Account</h2>
              <div className="rounded bg-[#FFFFFF] shadow-sm">
                <div className="flex items-center  text-dark pl-4 py-3 rounded">
                  <i class="fa-solid fa-user mr-2"></i>
                  <h4>My Profile</h4>
                </div>
                <hr />
                <div className="flex items-center text-dark pl-4 py-3 rounded">
                  <i class="fa-solid fa-user-pen mr-2"></i>
                  <h4>Edit Profile</h4>
                </div>
              </div>
            </div>

            <div class="mt-2 ">
              <h2 className="text-2xl font-medium mb-2 text-[#444]">Additional Settings</h2>
              <div className="bg-[#FFFFFF] rounded shadow-sm">
                <div className="flex items-center  text-dark pl-4 py-3 rounded">
                  <i class="fa-solid fa-gear mr-2"></i>
                  <h4>Settings</h4>
                </div>
                <hr />
                <div className="flex items-center text-dark pl-4 py-3 rounded">
                  <i class="fa-solid fa-circle-dot mr-2"></i>
                  <h4>Options</h4>
                </div>
              </div>
            </div>

            <div class="mt-2">
              <div className="flex justify-between items-center">
              <h2 className="text-2xl font-medium mb-2 text-[#444]">Community</h2>
              <i onClick={toggleCommunity} class={`fa-solid ${showCommunity ? 'fa-chevron-up ': 'fa-chevron-down'} pr-2`}></i>
              </div>
              <div className={`${showCommunity ? 'block': 'hidden'} bg-[#FFFFFF] rounded shadow-sm py-3 grid grid-cols-3 gap-3`}>
                 <div className="text-center">
                 <i class="fa-solid fa-calendar-day"></i>
                  <p>Events</p>
                 </div>
                 <div className="text-center">
                 <i class="fa-solid fa-file-lines"></i>
                  <p>Blogs</p>
                 </div>
                 <div className="text-center">
                 <i class="fa-solid fa-shop"></i>
                  <p>Markets</p>
                 </div>
                 <div className="text-center">
                 <i class="fa-solid fa-comments"></i>
                  <p>Forum</p>
                 </div>
                 <div className="text-center">
                 <i class="fa-solid fa-file-pen"></i>
                  <p>My Article</p>
                 </div>
                 <div className="text-center">
                 <i class="fa-brands fa-product-hunt"></i>
                  <p>My Products</p>
                 </div>
                 <div className="text-center">
                 <i class="fa-solid fa-people-group"></i>
                  <p>My Groups</p>
                 </div>
                 <div className="text-center">
                 <i class="fa-regular fa-file-lines"></i>
                  <p>My Pages</p>
                 </div>
              </div>
            </div>
          </div>
          {/* ---right side bar end--- */}

        </div>
      </div>
    </div>
  );
};

export default SocialHome;
