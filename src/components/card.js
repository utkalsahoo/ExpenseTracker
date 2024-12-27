export default function Card(props) {
  return (
    <div
      className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white"
      class="shadow-[0px_0px_0px_1px_rgba(9,9,11,0.07),0px_2px_2px_0px_rgba(9,9,11,0.05)]"
    >
      <div className="px-4 py-5 sm:px-6 flex flex-start">
        {props.heading}
        {/* We use less vertical padding on card headers on desktop than on body sections */}
      </div>
      <div className="px-4 py-5 sm:p-6">{props.children}</div>
    </div>
  );
}
