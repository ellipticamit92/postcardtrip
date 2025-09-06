"use client";

import { Button } from "../ui/button";

const BackToTop = () => {
  return (
    <div className="text-center mt-12">
      <Button
        variant="outline"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Back to Top
      </Button>
    </div>
  );
};

export default BackToTop;
