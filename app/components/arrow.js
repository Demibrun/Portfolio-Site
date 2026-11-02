export default function Arrow({ direction = "diagonal" }) {
  return (
    <span className="direction-arrow" aria-hidden="true">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        focusable="false"
      >
        <path
          d={
            direction === "right"
              ? "M5 12h14m-6-6 6 6-6 6"
              : "M7 17 17 7M7 7h10v10"
          }
        />
      </svg>
    </span>
  );
}
