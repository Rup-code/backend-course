export default function Input({ ref, label, textarea, ...props }) {
  const classes =
    'w-full bg-stone-200 rounded-sm p-1 border-b-2 border-stone-300 text-stone-600 focus:outline-none focus:border-stone-600 ';

  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm uppercase font-bold text-stone-500 ">
        {label}
      </label>
      {textarea ? (
        <textarea ref={ref} {...props} className={classes} />
      ) : (
        <input ref={ref} {...props} className={classes} />
      )}
    </p>
  );
}
