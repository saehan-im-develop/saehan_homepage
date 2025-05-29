import React, { useState, useEffect } from "react";
import StoryPaper from "./Story/StoryPaper";
import StoryList from "./Story/StoryList";
import Pagination from "./Story/Pagination";
import StoryData from "./Story/StoryData"; // 임시 데이터
import "../DicCssFile/Story.css";
import { color } from "framer-motion";

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedStory, setSelectedStory] = useState(null);
  const pageSize = 5;

  const startIndex = (currentPage - 1) * pageSize;
  const pagedStorys = StoryData.slice(startIndex, startIndex + pageSize);

  const handleSelect = (story) => setSelectedStory(story);
  const handleBack = () => setSelectedStory(null);

  return (
    <div>
      <div className="hero-section-story">
        <h1 className="hero-title-story">새한 이야기</h1>
      </div>
      <div className="storypaper-container">
      {selectedStory ? (
        <StoryPaper story={selectedStory} onBack={handleBack} />
      ) : (
        <>
          <h2 className='storypaper-text' style={{color:'#2b5ecc'}}>NEW!</h2>
          <StoryPaper story={StoryData[0]} />
          {/* <h2 className="story-list-text">다른 이야기</h2>
          <StoryList storys={pagedStorys} onSelect={handleSelect} />
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(StoryData.length / pageSize)}
            onPageChange={setCurrentPage}
          /> */}
        </>
      )}
      </div>
    </div>
  );
}
