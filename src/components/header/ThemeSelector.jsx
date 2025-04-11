export default function ThemeSelector({ isMobile }) {
  return (
    <div className="ml-4">
      {!isMobile && (
        <select
          className="select select-xs w-24 my-2"
          onChange={(e) =>
            document.documentElement.setAttribute("data-theme", e.target.value)
          }
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      )}
    </div>
  );
}
