import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    navigate("/");
  };

  return (
    <div className="profile-page">
      <h2>Login / Sign Up</h2>
      <form className="login-form" onSubmit={handleLogin}>
        <input type="text" placeholder="Email or Phone" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default ProfilePage;
