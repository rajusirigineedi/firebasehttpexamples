const name = `notes`; // hacky way to implement session kind of thing

//GET - get all records
const getData = async () => {
  const response = await fetch(
    `https://trail-39fca-default-rtdb.firebaseio.com/${name}.json`
  );
  const data = await response.json();
  console.log("data is", data);
  for (let i = 0; i < data.length; i++) {
    let currObj = data[i];
    console.log(currObj);
  }
  // loop the data
  for (const key in data) {
    console.log(key); //--- object key
    // console.log(data[key]); --- object data
    // el.innerHTML += `<h2>${data[key].name} : ${data[key].age}</h2>`; -- render in html
  }
};

//Post - add one record at a time
const sendData = async () => {
  const response = await fetch(
    `https://trail-39fca-default-rtdb.firebaseio.com/${name}.json`,
    {
      method: "post",
      body: JSON.stringify({ age: 12, hasLover: false, name: "rajesh" }),
    }
  );
};

//PUT - send the updating data & pass the id in link
const updateData = async (updatingId) => {
  const response = await fetch(
    `https://trail-39fca-default-rtdb.firebaseio.com/${name}/${updatingId}.json`,
    {
      method: "put",
      body: JSON.stringify({
        name: "pawan kalyan",
        age: 51,
        hasLover: false,
      }),
    }
  );
};

//Delete - delete the data by passing id to link
const deleteData = async (deletingId) => {
  const response = await fetch(
    `https://trail-39fca-default-rtdb.firebaseio.com/${name}/${deletingId}.json`,
    {
      method: "delete",
    }
  );
};

getData();
// sendData();
// updateData();
// deleteData("-NCR1xbjpWCj0xgD-kD0");
