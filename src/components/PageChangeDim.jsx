import { useNavigate } from 'react-router-dom';
import "../style.css";

function PageChangeDim({ isDimmed, toggleDim, isLogin, userId }) {
  const navigate = useNavigate();

  if (!isDimmed) return null;

  const handleNavigation = (path) => {
    toggleDim();
    navigate(path);
  };

  return (
    <div className="dim_container">
      <div className="dim_title" onClick={() => handleNavigation('/about')}>About us</div>
      <div className="dim_title" onClick={() => handleNavigation('/blog')}>Blog</div>
      <div className="dim_title" onClick={() => handleNavigation(`/profile/${userId}`)}>Profile</div>
      {
        isLogin ? (
            <div className="dim_title" onClick={() => handleNavigation('/logout')}>Logout</div>
        ):(
            <div className="dim_title" onClick={() => handleNavigation('/login')}>Login</div>
        )
      }
      {
        isLogin ? (<div></div>):(
            <div className="dim_title" onClick={() => handleNavigation('/signup')}>Signup</div>
        )
      }
    </div>
  );
}

export default PageChangeDim;