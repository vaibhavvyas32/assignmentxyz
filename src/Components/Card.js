const Card = ({ id, firstName, lastName, email, image }) => {
  return (
    <>
      <div className="container m-4 mt-[5vh]">
        <div className="card bg-white p-3 border-2 flex flex-col border-gray rounded-md shadow-lg w-[350px] h-[100%]">
          <img
            src={image}
            alt="Title of card"
            className="object-cover w-[100%] rounded-[5px] h-[300px]"
          />
          <div className="card__details pt-[5px] pr-[4px] pb-[2px] pl-[4px]">
            <div className="text-[24px] font-extrabold">
              {firstName} {lastName}
            </div>
            <p className="text-green text-[14px] leading-relaxed  font-light text-ellipsis">
              {email}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
