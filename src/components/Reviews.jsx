export default function Reviews({ username, rating, description }) {
  let star = "🌟";
  return (
    <div>
      <div className="bg-slate-200 my-4 p-4 rounded-xl">
        <p className="font-semibold">From: {username}</p>
        <p>Rating: {star.repeat(rating)}</p>
        <p className="text italic">- {description}</p>
      </div>
    </div>
  );
}
