export default function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div className="story-pagination">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        ◀ 이전
      </button>
      <span>{currentPage} / {totalPages}</span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        다음 ▶
      </button>
    </div>
  );
}
