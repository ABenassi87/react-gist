import React, { useEffect, useState } from 'react';
import { FileDetails, Files, GistDetails } from '../../model';
import { getGistDetails } from '../../utils';
import CodeViewer from '../CodeViewer';

type GistProps = {
  id: string;
  filenames?: string[];
};

function getFilesContent({ files, filenames = [] }: { files: Files | undefined; filenames: string[] | undefined }): FileDetails[] {
  if (!files) {
    return [];
  }
  if (!filenames?.length) {
    return Object.values(files);
  }

  return filenames.map((filename) => files[filename]).filter((file) => !!file);
}

const Gist: React.FunctionComponent<GistProps> = ({ id, filenames = [] }) => {
  const [gistContent, setGistContent] = useState<GistDetails | null>(null);
  const [fileDetails, setFileDetails] = useState<FileDetails[]>([]);

  useEffect(() => {
    getGistContent();
  }, []);

  useEffect(() => {
    setFileDetails(
      getFilesContent({
        files: gistContent?.files,
        filenames,
      }),
    );
  }, [gistContent?.files]);

  const getGistContent = async () => {
    try {
      const content = await getGistDetails(id);
      setGistContent(content);
    } catch (error: unknown) {
      console.error(error);
    }
  };

  return (
    <>
      <h2>Gist Details</h2>
      {fileDetails.map((detail: FileDetails, index) => (
        <>
          <h3 key={index}>{detail.filename}</h3>
          <CodeViewer key={detail.filename} code={detail.content ?? ''} language={detail.language} />
        </>
      ))}
    </>
  );
};

export default Gist;
