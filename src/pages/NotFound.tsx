import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Brain } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center px-4">
        <div className="w-20 h-20 rounded-2xl btn-glow flex items-center justify-center mx-auto mb-6 animate-float">
          <Brain className="w-10 h-10 text-background" />
        </div>
        <h1 className="text-8xl font-black gradient-text mb-4">404</h1>
        <p className="text-2xl font-bold text-foreground mb-2">Page Not Found</p>
        <p className="text-muted-foreground mb-8">The page you're looking for doesn't exist in our neural network.</p>
        <Link
          to="/"
          className="btn-glow px-8 py-4 rounded-full text-background font-bold inline-block"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
