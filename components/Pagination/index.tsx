import React from "react";

interface iPaginatiion {
  page: number;
  total: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const scrollTop = () => {
  scrollTo({
    behavior: "smooth",
    top: 0,
  });
};

const Pagination: React.FC<iPaginatiion> = ({ page, setPage, total }) => {
  const handlePrevPage = () => {
    if (page > 1) {
      setPage((prevState) => prevState - 1);
      scrollTop();
    } else return;
  };
  const handleNextPage = () => {
    if (page < total) {
      setPage((prevState) => prevState + 1);
      scrollTop();
    } else return;
  };

  return (
    <div className="container mx-auto flex justify-center gap-4 mt-3">
      {page < 2 ? null : (
        <button className="hover:text-[#ee4d2d]" onClick={handlePrevPage}>
          Prev
        </button>
      )}
      <p>
        {page} of {total}{" "}
      </p>
      {page < total ? (
        <button className="hover:text-[#ee4d2d]" onClick={handleNextPage}>
          Next
        </button>
      ) : null}
    </div>
  );
};

export default Pagination;
