'use client';
import { useState } from 'react';
import { PDFDocument } from 'pdf-lib';
import Image from 'next/image';

const CompressPDFs: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFiles = event.target.files;
    if (uploadedFiles) {
      setFiles(Array.from(uploadedFiles)); // Convert FileList to an array
    }
  };

  const compressPDFs = async () => {
    if (files.length === 0) {
      alert('Please upload at least one PDF file.');
      return;
    }

    for (const file of files) {
      const fileData = await file.arrayBuffer();
      const pdf = await PDFDocument.load(fileData);

      // Create a new PDFDocument to save the optimized content
      const optimizedPdf = await PDFDocument.create();

      // Copy pages from the original PDF to the new PDF
      const pages = pdf.getPages();
      for (let i = 0; i < pages.length; i++) {
        const copiedPage = await optimizedPdf.copyPages(pdf, [i]);
        optimizedPdf.addPage(copiedPage[0]);
      }

      // Save the optimized PDF
      const optimizedPdfBytes = await optimizedPdf.save({ useObjectStreams: false });
      const optimizedBlob = new Blob([optimizedPdfBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(optimizedBlob);

      // Create a link to download the optimized PDF
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `optimized_${file.name}`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className='bg-black lg:flex'>
      <div className="w-full h-[15%] lg:h-full lg:w-[20%]"></div>
      <div className="w-full h-[70%] px-3 lg:h-full lg:w-[60%] flex text-white flex-col items-center py-7 lg:py-20">
        <h1 className='text-4xl font-bold'>Compress PDF Files</h1>
        <h6 className='py-2 lg:py-4 font-serif text-center'>
          Quickly compress your PDFs for easier sharing.
        </h6>
        <div className="bg-zinc-900 lg:w-56 my-5 rounded-sm lg:my-10 lg:h-56 w-full h-52 flex flex-col items-center justify-center relative">
          <h6 className="text-white">Upload file</h6>
          <div className="py-3">
            <Image src="/img/upload.png" alt="Upload Icon" width={80} height={80} />
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
          <div className="mt-4 flex flex-wrap justify-center items-center">
            <h6 className="text-white mb-2 mr-2">Uploaded Files:</h6>
            <div className="flex flex-wrap justify-center">
              {files.map((file, index) => (
                <div key={index} className="bg-zinc-900 p-2 rounded-md mr-2 mb-2 flex items-center">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-2">
                    <p className="text-zinc-900 text-sm font-bold">{file.name.charAt(0)}</p>
                  </div>
                  <p className="text-white text-sm truncate">{file.name}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        <button
          onClick={compressPDFs}
          disabled={files.length === 0}
          className={`bg-zinc-500 px-4 py-2 rounded-md text-sm md:text-base mt-4 ${
            files.length === 0 ? 'opacity-50' : 'opacity-100'
          }`}
        >
          Download Compressed PDFs
        </button>
      </div>
      <div className="w-full h-[15%] lg:h-full lg:w-[20%]"></div>
    </div>
  );
};

export default CompressPDFs;