export default function StoryPaper({ story, _onBack }) {
  return (
    <div className="story-list">
      {/* {onBack && (
        <button className="story-list-back" onClick={onBack}>
          ← 목록으로 돌아가기
        </button>
      )} */}
      <div className="story-list-wrapper">
        <h2 className="story-title">{story.title}</h2>
        <p className="story-date">{story.date}</p>
        <div className="story-wrapper">
          <img className="story-img" src={story.img} />
          <p className="story-description">{story.description}</p>
          <p className="story-content">{story.content}</p>
        </div>
        <div className="story-wrapper">
          <img className="story-img" src={story.img2} />
          <p className="story-description">{story.description2}</p>
          <p className="story-content">{story.content2}</p>
      </div>
      <div className="story-wrapper">
          <img className="story-img" src={story.img3} />
          <p className="story-description">{story.description3}</p>
          <p className="story-content">{story.content3}</p>
      </div>
      </div>
    </div>
  );
}
