export default function StoryPaper({ story, onBack }) {
  return (
    <div className="story-list">
      {onBack && (
        <button className="story-list-back" onClick={onBack}>
          ← 목록으로 돌아가기
        </button>
      )}
      <div className="story-list-wrapper">
        <h1 className="story-title">{story.title}</h1>
        <p className="story-date">{story.date}</p>
        <div className="story-wrapper">
          <img className="story-img" src={story.img} />
          <p className="story-content">{story.content}</p>
        </div>
        <div className="story-wrapper">
          <p className="story-content">{story.content2}</p>
          <img className="story-img" src={story.img2} />
      </div>
      </div>
    </div>
  );
}
