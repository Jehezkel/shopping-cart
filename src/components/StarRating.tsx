interface StarProps {
  rating: number;
}
export const StarRating = (props: StarProps) => {
  let starsRating = Math.round(props.rating);
  let starFull = (
    <svg className="w-5 fill-amber-300" viewBox="0 0 32 32" id="star">
      <path d="M31.547 12a.848.848 0 00-.677-.577l-9.427-1.376-4.224-8.532a.847.847 0 00-1.516 0l-4.218 8.534-9.427 1.355a.847.847 0 00-.467 1.467l6.823 6.664-1.612 9.375a.847.847 0 001.23.893l8.428-4.434 8.432 4.432a.847.847 0 001.229-.894l-1.615-9.373 6.822-6.665a.845.845 0 00.214-.869z" />
    </svg>
  );
  let starHalf = (
    <svg className="w-5 fill-amber-300" viewBox="0 0 32 32" id="star">
      <path
        fill="url(#half)"
        d="M31.547 12a.848.848 0 00-.677-.577l-9.427-1.376-4.224-8.532a.847.847 0 00-1.516 0l-4.218 8.534-9.427 1.355a.847.847 0 00-.467 1.467l6.823 6.664-1.612 9.375a.847.847 0 001.23.893l8.428-4.434 8.432 4.432a.847.847 0 001.229-.894l-1.615-9.373 6.822-6.665a.845.845 0 00.214-.869z"
      />
      <defs>
        <linearGradient id="half" x1="0" x2="100%" y1="0" y2="0">
          <stop offset="50%" stopColor="#fcd34d"></stop>
          <stop offset="50%" stopColor="#94a3b8"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
  let starEmpty = (
    <svg className="w-5 fill-slate-400" viewBox="0 0 32 32" id="star">
      <path d="M31.547 12a.848.848 0 00-.677-.577l-9.427-1.376-4.224-8.532a.847.847 0 00-1.516 0l-4.218 8.534-9.427 1.355a.847.847 0 00-.467 1.467l6.823 6.664-1.612 9.375a.847.847 0 001.23.893l8.428-4.434 8.432 4.432a.847.847 0 001.229-.894l-1.615-9.373 6.822-6.665a.845.845 0 00.214-.869z" />
    </svg>
  );
  starsRating =
    Math.round(props.rating + 0.25) > starsRating
      ? starsRating + 0.5
      : starsRating;
  return (
    <div className="has-tooltip">
      <span className="tooltip rounded shadow-lg p-1 bg-slate-800 text-zinc-200 -mt-8">
        {"Rating " + props.rating}
      </span>
      {/* <p>{"rating " + props.rating}</p> */}
      {[...Array(5)].map((element, i) => {
        return (
          <p key={i} className="inline-block">
            {starsRating >= i + 1
              ? starFull
              : starsRating >= i + 0.5
              ? starHalf
              : starEmpty}
          </p>
        );
      })}
    </div>
  );
};
