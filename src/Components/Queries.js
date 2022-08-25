export default function Queries({
  sort_by,
  setSort_by,
  order_by,
  setOrder_by,
}) {
  const options = [
    {
      label: "Date",
      value: "created_at",
    },
    {
      label: "Comment count",
      value: "comment_count",
    },
    {
      label: "Votes",
      value: "votes",
    },
  ];

  const handleSort = (event) => {
    setSort_by(event.target.value);
  };
  const handleOrder = (event) => {
    setOrder_by(event.target.value);
  };

  return (
    <>
      <select value={sort_by} className="dropdown" onChange={handleSort}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <select value={order_by} className="dropdown" onChange={handleOrder}>
        <option value="asc" className="options">
          Ascending
        </option>
        <option value="desc" className="options">
          Descending
        </option>
      </select>
    </>
  );
}
