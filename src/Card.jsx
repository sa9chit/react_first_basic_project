function Card() {
    const imgData = [
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D',
      'https://plus.unsplash.com/premium_photo-1663858367001-89e5c92d1e0e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D',
      'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZvb2R8ZW58MHx8MHx8fDA%3D'
    ];
  const cusionData = ['palak Paneer','chilli Paneer','Chaap']

  const about = ['palak paneer famous indian cuison for you test the best of the three ','chilli paneer is the best indian cuison for the test ','also check our chaap chaap is also the famous ']
    return (
      <div className="flex justify-around w-full">
        {imgData.map((value, index) => (
          <div key={index} className="h-72 w-64 p-5 rounded-md bg-[#2f2e2e]">
            <img src={value} className="h-32 w-[300px] rounded-t-md bg-gray-600" alt={`Image ${index + 1}`} />

            <p className="mt-3 text-white font-semibold font-[Gilroy]"> Cusion Name:</p>
            <p className="font-semibold text-orange-500 font-[Gilroy] uppercase">
               {cusionData[index]} 
            </p>
            <p className="font-thin text-white text-sm font-[Gotham]">
                {about[index]}
            </p>
          </div>
        ))}
      </div>
    );
  }
  
  export default Card;
  
