export function formatDate(dateString) {
    const originalDate = new Date(dateString);
  
    const month = (originalDate.getMonth() + 1).toString().padStart(2, '0'); // Adding 1 because months are 0-based in JavaScript
    const day = originalDate.getDate().toString().padStart(2, '0');
    const year = originalDate.getFullYear().toString().slice(-2);
  
    return `${month}/${day}/${year}`;
  }