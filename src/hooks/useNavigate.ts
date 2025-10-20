// Simple navigation hook for non-React Router setup
export const useNavigate = () => {
  return (path: string) => {
    window.location.href = path;
  };
};



