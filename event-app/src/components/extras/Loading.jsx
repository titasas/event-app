import loading from "../extras/loading.gif";

export function Loading() {
  return (
    <img
      src={loading}
      alt="Loading..."
      style={{
        width: "500px",
        display: "block",
        margin: "auto",
      }}
    />
  );
}
