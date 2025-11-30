"use client";

import Image from "next/image";

export default function clientsPage() {
  const clients = [
    "/clients/client1.png",
    "/clients/client2.png",
    "/clients/client3.png",
    "/clients/client4.png",
  ];

  return (
    <div className="min-h-screen py-20 px-6">
      <h1 className="text-4xl font-bold text-center mb-12">Our Clients</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 justify-center items-center">
        {clients.map((img, index) => (
          <div key={index} className="flex justify-center">
            <Image
              src={img}
              alt={`Client ${index + 1}`}
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
