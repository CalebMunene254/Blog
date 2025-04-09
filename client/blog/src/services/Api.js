// Mocked API function to simulate fetching a post by ID
export const getPostById = async (postId) => {
    // Simulate a delay to mimic an API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: postId,
          title: `Sample Post ${postId}`,
          content: `This is the content of sample post ${postId}.`,
        });
      }, 500); // 500ms delay
    });
  };
  
  // Export a mock API object for consistency
  const api = {
    getPostById,
  };
  
  export default api;