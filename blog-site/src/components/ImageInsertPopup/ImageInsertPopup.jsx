import React, { useState } from "react";

import "./style.scss";

import NiceModal, { useModal } from "@ebay/nice-modal-react";
import Modal from "../Modal/Modal";

// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";

import FilePondPluginImageEXIFOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

import "filepond/dist/filepond.min.css";

registerPlugin(FilePondPluginImageEXIFOrientation, FilePondPluginImagePreview);

// Import FilePond styles

export default NiceModal.create(({ onInsert }) => {
  const modal = useModal();

  const [files, setFiles] = useState([]); // Files are not js files but a file object defined by FilePond, you can get the js File inside it

  const OnInsertHandler = () => {
    modal.remove();
    const fileBlobs = files.map((f) => URL.createObjectURL(f.file)); // Maping the FilePond files to URL created from the JS file blobs
    onInsert(fileBlobs);
  };

  return (
    <Modal
      title="Upload an Image"
      visibility={modal.visible}
      onCancel={() => modal.hide()}
      onOk={() => OnInsertHandler()}
      okText="Insert"
    >
      <div className="file-upload-area">
        <FilePond
          files={files}
          onupdatefiles={setFiles}
          allowPaste={true}
          allowMultiple={true}
          acceptedFileTypes={["JPEG", "PNG", "JPG", "GIF"]}
          credits="false"
          labelIdle='Drag & Drop your images, <span class="filepond--label-action">Browse</span> or Paste your images'
        />
      </div>
    </Modal>
  );
});
