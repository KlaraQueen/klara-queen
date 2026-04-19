import React from "react";
import { FaUpload } from "react-icons/fa";
import * as S from "./styled";

export default function ImageUpload({
  images,
  uploading,
  onUpload,
  onRemove,
  multiple,
}) {
  return (
    <>
      {images.length > 0 && (
        <S.Grid>
          {images.map((url, i) => (
            <S.Item key={i}>
              <img src={url} alt={`preview-${i}`} />
              <S.Remove type="button" onClick={() => onRemove(i)}>
                ×
              </S.Remove>
            </S.Item>
          ))}
        </S.Grid>
      )}
      <S.Zone>
        <FaUpload />
        {uploading ? "Trwa upload…" : "Kliknij, aby wgrać"}
        <input
          type="file"
          accept="image/*"
          multiple={multiple}
          onChange={onUpload}
          disabled={uploading}
        />
      </S.Zone>
    </>
  );
}
