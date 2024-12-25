import React from 'react';
import { motion } from 'framer-motion';
import { useImageModal } from '../../../../hooks/useImageModal';
import ImageModal from '../../../ui/modal/ImageModal';
import ExpandableImage from '../../../ui/ExpandableImage';

const photos = [
  {
    src: "https://i.ibb.co/jVJYJqM/photo1.jpg",
    alt: "Professional Photography 1"
  },
  {
    src: "https://i.ibb.co/tQg5402/photo2.jpg",
    alt: "Professional Photography 2"
  },
  {
    src: "https://i.ibb.co/rdYg3gD/photo3.jpg",
    alt: "Professional Photography 3"
  },
  {
    src: "https://i.ibb.co/dmGm6jm/photo4.jpg",
    alt: "Professional Photography 4"
  },
  {
    src: "https://i.ibb.co/41zqMvj/photo5.jpg",
    alt: "Professional Photography 5"
  },
  {
    src: "https://i.ibb.co/zNRC9C3/photo6.jpg",
    alt: "Professional Photography 6"
  },
  {
    src: "https://i.ibb.co/23YrfwY/photo7.jpg",
    alt: "Professional Photography 7"
  },
  {
    src: "https://i.ibb.co/qxR2m3Z/photo8.jpg",
    alt: "Professional Photography 8"
  },
  {
    src: "https://i.ibb.co/PWYthLg/photo9.jpg",
    alt: "Professional Photography 9"
  }
];

export default function PhotographyGrid() {
  const { isOpen, selectedImage, openModal, closeModal } = useImageModal();

  return (
    <>
      <div className="grid md:grid-cols-3 gap-8">
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-black/30 backdrop-blur-sm rounded-xl overflow-hidden border border-[#FF0000]/20 hover:border-[#FF0000]/40 transition-all duration-300"
          >
            <ExpandableImage
              src={photo.src}
              alt={photo.alt}
              className="h-64"
              onClick={() => openModal(photo.src, photo.alt)}
            />
          </motion.div>
        ))}
      </div>

      {selectedImage && (
        <ImageModal
          isOpen={isOpen}
          onClose={closeModal}
          imageSrc={selectedImage.src}
          imageAlt={selectedImage.alt}
        />
      )}
    </>
  );
}