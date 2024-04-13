export default function BottomGradient() {
  return (
    <>
      <span className="block -bottom-px absolute inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover/btn:opacity-100 w-full h-px transition duration-500" />
      <span className="block -bottom-px absolute inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 group-hover/btn:opacity-100 blur-sm mx-auto w-1/2 h-px transition duration-500" />
    </>
  );
}
