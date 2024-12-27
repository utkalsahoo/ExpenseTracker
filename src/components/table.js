const people = [
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  // More people...
];

export default function Table(props) {
  console.log(props, "propppppppp");
  return (
    <div className="bg-gray-900">
      <div className="mx-auto max-w-7xl">
        <div className="bg-gray-900">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="mt-3 flow-root">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                  <table className="min-w-full divide-y divide-gray-700">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-0"
                        >
                          Category
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                        >
                          Title
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                        >
                          Date
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                        >
                          Expenses
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800">
                      {props.items.map((item) => (
                        <tr key={item.category}>
                          <td className="whitespace-nowrap text-left py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0">
                            <span className="ht-0.5 w-0.5">
                              <img src={item.img} />
                            </span>{" "}
                            {item.category}
                          </td>
                          <td className="whitespace-nowrap text-left px-3 py-4 text-sm text-gray-300">
                            {item.title}
                          </td>
                          <td className="whitespace-nowrap text-left px-3 py-4 text-sm text-gray-300">
                            {item.date}
                          </td>
                          <td className="whitespace-nowrap text-left px-3 py-4 text-sm text-gray-300">
                            {item.expense}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
