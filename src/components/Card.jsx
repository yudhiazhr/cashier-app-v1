export const Card = () => {
  return (
    <>
      <div className=" w-[310px] min-h-[200px] border rounded-lg shadow-xl">
        <img
          src="https://untirta.ac.id/wp-content/uploads/2023/08/placeholder-49.png"
          className="w-full"
          alt=""
        />
        <div className="flex flex-col gap-2 mx-4 my-4">
          <h1>Ayam Geprek</h1>
          <p>Rp. 15.000</p>
        </div>
      </div>
    </>
  );
};
