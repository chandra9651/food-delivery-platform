import { useState } from "react";

import {
    FaLayerGroup,
    FaImage,
    FaAlignLeft,
    FaCheckCircle,
} from "react-icons/fa";

const CategoryForm = () => {
    const [categoryData, setCategoryData] = useState({
        name: "",
        slug: "",
        image: "",
        status: "Active",
        description: "",
    });

    const handleChange = (e) => {
        setCategoryData({
            ...categoryData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(categoryData);

        alert("Category Created Successfully!");
    };

    return (
        <div
            className="
        bg-white
        rounded-[32px]
        shadow-sm
        border
        border-gray-100
        p-6
        lg:p-8
      "
        >
            {/* HEADER */}

            <div className="mb-8">

                <h2 className="text-3xl font-extrabold text-gray-900">
                    Create Food Category
                </h2>

                <p className="text-gray-500 mt-2">
                    Add and manage food categories
                </p>
            </div>

            {/* FORM */}

            <form
                onSubmit={handleSubmit}
                className="space-y-6"
            >
                {/* CATEGORY NAME */}

                <div>

                    <label
                        className="
              block
              text-sm
              font-semibold
              text-gray-700
              mb-3
            "
                    >
                        Category Name
                    </label>

                    <div className="relative">

                        <FaLayerGroup
                            className="
                absolute
                top-1/2
                left-4
                -translate-y-1/2
                text-orange-500
              "
                        />

                        <input
                            type="text"
                            name="name"
                            value={categoryData.name}
                            onChange={handleChange}
                            placeholder="Pizza"
                            className="
                w-full
                bg-gray-100
                rounded-2xl
                py-4
                pl-12
                pr-4
                outline-none
                focus:ring-2
                focus:ring-orange-400
              "
                            required
                        />
                    </div>
                </div>

                {/* SLUG */}

                <div>

                    <label
                        className="
              block
              text-sm
              font-semibold
              text-gray-700
              mb-3
            "
                    >
                        Category Slug
                    </label>

                    <input
                        type="text"
                        name="slug"
                        value={categoryData.slug}
                        onChange={handleChange}
                        placeholder="pizza"
                        className="
              w-full
              bg-gray-100
              rounded-2xl
              py-4
              px-4
              outline-none
              focus:ring-2
              focus:ring-orange-400
            "
                        required
                    />
                </div>

                {/* IMAGE URL */}

                <div>

                    <label
                        className="
              block
              text-sm
              font-semibold
              text-gray-700
              mb-3
            "
                    >
                        Category Image URL
                    </label>

                    <div className="relative">

                        <FaImage
                            className="
                absolute
                top-1/2
                left-4
                -translate-y-1/2
                text-orange-500
              "
                        />

                        <input
                            type="text"
                            name="image"
                            value={categoryData.image}
                            onChange={handleChange}
                            placeholder="https://example.com/pizza.jpg"
                            className="
                w-full
                bg-gray-100
                rounded-2xl
                py-4
                pl-12
                pr-4
                outline-none
                focus:ring-2
                focus:ring-orange-400
              "
                        />
                    </div>
                </div>

                {/* IMAGE PREVIEW */}

                {categoryData.image && (
                    <div
                        className="
              w-full
              h-[220px]
              rounded-3xl
              overflow-hidden
              border
              border-gray-200
            "
                    >
                        <img
                            src={categoryData.image}
                            alt="Preview"
                            className="
                w-full
                h-full
                object-cover
              "
                        />
                    </div>
                )}

                {/* STATUS */}

                <div>

                    <label
                        className="
              block
              text-sm
              font-semibold
              text-gray-700
              mb-3
            "
                    >
                        Status
                    </label>

                    <div className="relative">

                        <FaCheckCircle
                            className="
                absolute
                top-1/2
                left-4
                -translate-y-1/2
                text-orange-500
              "
                        />

                        <select
                            name="status"
                            value={categoryData.status}
                            onChange={handleChange}
                            className="
                w-full
                bg-gray-100
                rounded-2xl
                py-4
                pl-12
                pr-4
                outline-none
                focus:ring-2
                focus:ring-orange-400
              "
                        >
                            <option>Active</option>
                            <option>Inactive</option>
                        </select>
                    </div>
                </div>

                {/* DESCRIPTION */}

                <div>

                    <label
                        className="
              block
              text-sm
              font-semibold
              text-gray-700
              mb-3
            "
                    >
                        Description
                    </label>

                    <div className="relative">

                        <FaAlignLeft
                            className="
                absolute
                top-5
                left-4
                text-orange-500
              "
                        />

                        <textarea
                            rows="5"
                            name="description"
                            value={categoryData.description}
                            onChange={handleChange}
                            placeholder="Write category description..."
                            className="
                w-full
                bg-gray-100
                rounded-2xl
                py-4
                pl-12
                pr-4
                outline-none
                resize-none
                focus:ring-2
                focus:ring-orange-400
              "
                        />
                    </div>
                </div>

                {/* BUTTONS */}

                <div
                    className="
            flex
            flex-col
            sm:flex-row
            gap-4
            pt-4
          "
                >
                    <button
                        type="submit"
                        className="
              flex-1
              bg-orange-500
              hover:bg-orange-600
              text-white
              py-4
              rounded-2xl
              font-bold
              text-lg
              transition-all
            "
                    >
                        Create Category
                    </button>

                    <button
                        type="button"
                        className="
              flex-1
              bg-gray-200
              hover:bg-gray-300
              text-gray-800
              py-4
              rounded-2xl
              font-bold
              text-lg
              transition-all
            "
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CategoryForm;