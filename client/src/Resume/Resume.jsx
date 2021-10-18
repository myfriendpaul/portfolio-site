import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import { useState } from "react";
export const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="resume-container">
      <div>
        <div className="download">
          <a
            href="https://drive.google.com/uc?export=download&id=13vLZhrk0xgnxP6EwRM_qN4kKh3XPcIKG"
            class="py-4 text-sm  text-gray-600 hover:text-gray-300"
          >
            Download Resume
          </a>
        </div>
        <iframe
          className="resume"
          src="https://drive.google.com/file/d/13vLZhrk0xgnxP6EwRM_qN4kKh3XPcIKG/preview"
          width="700"
          height="825"
          allow="autoplay"
          class="absolute
            top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-4"
        ></iframe>
      </div>
    </div>
  );
};
