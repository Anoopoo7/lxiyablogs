const ProfileMenuComponent = ({ setSelectedPage }) => {
  return (
    <div className="container p-3 mt-3 border rounded profile-menu-card">
      <p className="profile-menu-link active" onClick={()=>setSelectedPage("order")}>Orders</p>
      <hr />
      <p className="profile-menu-link" onClick={()=>setSelectedPage("address")}>Address</p>
      <hr />
      <p className="profile-menu-link">Settings</p>
      <hr />
      <p className="profile-menu-link">cards</p>
      <hr />
      <p className="profile-menu-link">Feedback</p>
      <hr />
      <p className="profile-menu-link">Privact & Policy</p>
    </div>
  );
};

export default ProfileMenuComponent;
