export default function StoryList({ storys, onSelect }) {
  return (
    <ul className="story-list">
      {storys.map((story) => (
        <li
          key={story.id}
          className="story-list-title"
          onClick={() => onSelect(story)}
        > 
          <strong>{story.title}</strong>
          <span className="story-list-date">{story.date}</span>
        </li>
      ))}
    </ul>
  );
}
