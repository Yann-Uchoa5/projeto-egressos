export const useFormProgress = (formData, currentPage) => {
  const progress = ((currentPage + 1) / 8) * 100;
  
  return { progress };
};
