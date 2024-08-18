'use client';

import React, { useState } from "react";
import { useSearchParams } from 'next/navigation';
import { FileUpload } from "@/components/ui/file-upload";

const SamplePage: React.FC = () => {
    const [files, setFiles] = useState<File[]>([]);
    const handleFileUpload = (files: File[]) => {
      setFiles(files);
      console.log(files);
    };
  
  const searchParams = useSearchParams();

  const h1 = searchParams.get('h1');
  const h2 = searchParams.get('h2');
  const api = searchParams.get('api');

  if (!h1 || !h2 || !api) {
    return <div>Loading...</div>; // Show a loading state while the query parameters are being retrieved
  }

  return (
    <div className="p-5 lg:px-10 text-white min-h-[30rem] py-10 ">
        <div className=" bg-zinc-950 shadow-lg rounded-2xl w-full flex flex-col items-center justify-center ">
            <h1 className=" text-xl lg:text-5xl font-bold">{h1}</h1>
            <h2 className="text-sm lg:text-xl mb-10">{h2}</h2>
            <FileUpload onChange={handleFileUpload} />
        </div>
    </div>
  );
};

export default SamplePage;