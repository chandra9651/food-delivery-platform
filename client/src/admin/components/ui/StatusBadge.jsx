const StatusBadge = ({
    status = "Pending",
}) => {
    /* STATUS COLORS */

    const statusStyles = {
        Pending: `
      bg-yellow-100
      text-yellow-700
    `,

        Processing: `
      bg-blue-100
      text-blue-700
    `,

        Confirmed: `
      bg-indigo-100
      text-indigo-700
    `,

        Delivered: `
      bg-green-100
      text-green-700
    `,

        Completed: `
      bg-green-100
      text-green-700
    `,

        Cancelled: `
      bg-red-100
      text-red-700
    `,

        Rejected: `
      bg-red-100
      text-red-700
    `,

        Active: `
      bg-green-100
      text-green-700
    `,

        Inactive: `
      bg-gray-200
      text-gray-700
    `,

        Online: `
      bg-emerald-100
      text-emerald-700
    `,

        Offline: `
      bg-gray-200
      text-gray-700
    `,
    };

    return (
        <span
            className={`
        inline-flex
        items-center
        justify-center
        px-4
        py-2
        rounded-full
        text-sm
        font-semibold
        whitespace-nowrap
        ${statusStyles[status] ||
                "bg-gray-100 text-gray-700"
                }
      `}
        >
            {/* DOT */}

            <span
                className="
          w-2.5
          h-2.5
          rounded-full
          bg-current
          mr-2
        "
            />

            {status}
        </span>
    );
};

export default StatusBadge;