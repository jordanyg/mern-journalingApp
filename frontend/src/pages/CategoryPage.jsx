import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {useGetByCategoryQuery,useCreateEntryMutation,useDeleteEntryMutation,useUpdateEntryMutation,} from "../slices/journalApiSlice";
import { toast } from "react-toastify";


const CategoryPage = () => {
  const { category } = useParams();

  const { data: entries = []} = useGetByCategoryQuery(category);

  const [createEntry] = useCreateEntryMutation();
  const [deleteEntry] = useDeleteEntryMutation();
  const [UpdateEntryMutation] = useUpdateEntryMutation();

  const [content, setContent] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!content.trim()) return;

    try {
      await createEntry({
        category,
        content,
      }).unwrap();

      setContent("");
      toast.success('successfuly created')
    } catch (err) {
      toast.error(err?.data?.message || err.error)
    }
  };

  const deleteHandler = async (id) => {
    try {
      await deleteEntry(id).unwrap();
      toast.success('successfuly deleted')
    } catch (err) {
      toast.error(err?.data?.message || err.error)
    }
  };

  const editHandler = async (id) => {
    try {
      await useUpdateEntryMutation({
        id : entry._id,
        data: {
          content: editText,
        },
      }).unwrap();

      setEditingId(null);
      setEditText("");
      toast.success('successfuly edited')
    } catch (err) {
        toast.error(err?.data?.message || err.error)
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f6f2] px-6 py-10">
      <div className="mx-auto max-w-4xl">

        {/* HEADER */}
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold capitalize text-gray-900">
              {category === "lifeDirection"
                ? "Life Direction"
                : category}
            </h1>

            <p className="mt-2 text-gray-500">
              A space for your thoughts, patterns, and reflections.
            </p>
          </div>

          {/* ADD BUTTON */}
          <button
            onClick={() =>
              document
                .getElementById("journal-input")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="rounded-2xl bg-gray-900 px-6 py-3 text-sm font-medium text-white shadow-lg transition hover:-translate-y-1 hover:bg-gray-800"
          >
            + Add Entry
          </button>
        </div>

        {/* CREATE ENTRY */}
        <form
          onSubmit={submitHandler}
          className="mb-12 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm"
        >
          <textarea
            id="journal-input"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="What are your thoughts?"
            className="min-h-[140px] w-full resize-none rounded-2xl border border-gray-200 bg-[#faf8f5] p-4 text-gray-700 outline-none transition focus:border-gray-400"
          />

          <button
            type="submit"
            className="mt-4 rounded-2xl bg-gray-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
          >
            Save Entry
          </button>
        </form>

        {/* ENTRIES */}
        
          <div className="space-y-6">
            {entries.map((entry) => (
              <div
                key={entry._id}
                className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
              >

                {/* TOP ACTIONS */}
                <div className="mb-5 flex items-center justify-end gap-3">

                  <button
                    onClick={() => {
                      setEditingId(entry._id);
                      setEditText(entry.content);
                    }}
                    className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 transition hover:bg-blue-100"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteHandler(entry._id)}
                    className="rounded-xl border border-red-200 bg-red-50 px-4 py-2 text-sm font-medium text-red-600 transition hover:bg-red-100"
                  >
                    Delete
                  </button>

                </div>

                {/* CONTENT */}
                {editingId === entry._id ? (
                  <div>
                    <textarea
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                      className="min-h-[120px] w-full resize-none rounded-2xl border border-gray-200 bg-[#faf8f5] p-4 text-gray-700 outline-none focus:border-gray-400"
                    />

                    <div className="mt-4 flex gap-3">
                      <button
                        onClick={() => editHandler(entry._id)}
                        className="rounded-xl bg-gray-900 px-5 py-2 text-sm font-medium text-white transition hover:bg-gray-800"
                      >
                        Save
                      </button>

                      <button
                        onClick={() => {
                          setEditingId(null);
                          setEditText("");
                        }}
                        className="rounded-xl border border-gray-300 px-5 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-100"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <p className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                    {entry.content}
                  </p>
                )}

                {/* DATE */}
                <div className="mt-6 text-right text-xs text-gray-400">
                  {new Date(entry.createdAt).toLocaleString()}
                </div>

              </div>
            ))}
          </div>
        
      </div>
    </div>
  );
};

export default CategoryPage;