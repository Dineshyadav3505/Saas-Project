'use client';
import { useState } from 'react';
import { PDFDocument } from 'pdf-lib';
import Image from 'next/image';

const MergePDFs: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFiles = event.target.files;
    if (uploadedFiles) {
      setFiles(Array.from(uploadedFiles)); // Convert FileList to an array
    }
  };

  const mergePDFs = async () => {
    if (files.length === 0) {
      alert('Please upload at least one PDF file.');
      return;
    }

    const mergedPdf = await PDFDocument.create();

    for (const file of files) {
      const fileData = await file.arrayBuffer();
      const pdf = await PDFDocument.load(fileData);
      const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
      copiedPages.forEach((page) => mergedPdf.addPage(page));
    }

    const pdfBytes = await mergedPdf.save();
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);

    // Create a link to download the merged PDF
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'merged.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='bg-black h-[40rem] lg:flex'>
      <div className="w-full h-[15%] lg:h-full lg:w-[20%]"></div>
      <div className="w-full h-[70%] px-3 lg:h-full lg:w-[60%] flex text-white flex-col items-center py-7 lg:py-20">
        <h1 className='text-4xl font-bold'>Merge PDF Files</h1>
        <h6 className='py-2 lg:py-4 font-serif text-center'>
          Combine your PDFs in the order you want, quickly and easily.
        </h6>
        <div className="bg-zinc-900 lg:w-56 my-5 rounded-sm lg:my-10 lg:h-56 w-full h-52 flex flex-col items-center justify-center relative">
          <h6 className="text-white">Upload file</h6>
          <div className="py-3">
            <Image src="/upload.png" alt="Upload Icon" width={80} height={80} />
          </div>
          <input
            type="file"
            accept=".pdf"
            multiple
            onChange={handleFileUpload}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
        </div>
        {files.length > 0 && (
          <div className="mt-4">
            <h6 className="text-white mb-2">Uploaded Files:</h6>
            <div className="flex flex-wrap justify-center">
              {files.map((file, index) => (
                <div key={index} className="bg-zinc-900 p-2 rounded-md mr-2 mb-2">
                  <p className="text-white text-sm">{file.name}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        <button
          onClick={mergePDFs}
          disabled={files.length === 0}
          className={`bg-zinc-500 px-4 py-2 rounded-md text-sm md:text-base mt-4 ${
            files.length === 1 ? 'opacity-50' : 'opacity-100'
          }`}
        >
          Download Merged PDFs
        </button>
      </div>
      <div className="w-full h-[15%] lg:h-full lg:w-[20%]"></div>
    </div>
  );
};

export default MergePDFs;