import { useQuill } from "react-quilljs";

const DocumentEditor = () => {
  const { quill, quillRef } = useQuill();
  return (
    <div style={{ width: 500, height: 300 }}>
      <div ref={quillRef} />
    </div>
  );
};

export default DocumentEditor;
