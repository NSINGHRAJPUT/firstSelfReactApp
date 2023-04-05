const User = (props) => {
  let out = [];
  props.userData.forEach((item) => {
    out.push(
      <h4>
        {item.name} - {item.age}
      </h4>
    );
  });
  return (
    <div className="container">
      <h2>Users List</h2>
      {out}
    </div>
  );
};

export default User;
