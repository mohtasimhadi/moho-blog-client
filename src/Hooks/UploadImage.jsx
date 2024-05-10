// useImageUpload.js
import { useState } from 'react';

const useImageUpload = () => {
    const [uploadState, setUploadState] = useState({
        imageUrl: null,
        error: null,
        isLoading: false
    });

    const uploadImage = async (file) => {
        setUploadState({ ...uploadState, isLoading: true });
        try {
            const formData = new FormData();
            formData.append('image', file);

            const url = `http://localhost:5001/api/v1/image/upload-image`;
            const response = await fetch(url, {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Failed to upload image');
            }

            const imageData = await response.json();
            setUploadState({ ...uploadState, imageUrl: imageData.imageUrl });
            console.log('image data ::::', imageData);
            return imageData.imageUrl;
        } catch (error) {
            setUploadState({ ...uploadState, error: error.message });
            return null;
        } finally {
            setUploadState({ ...uploadState, isLoading: false });
        }
    };

    return { uploadImage };
};

export default useImageUpload;